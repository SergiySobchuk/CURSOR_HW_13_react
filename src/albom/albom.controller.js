import React from "react";
import Style from "./albom.view";
import Axios from "axios";

const CharacterAPI = Axios.create({
    baseURL: "https://rickandmortyapi.com/api/character/",
    headers: {
        Accept: 'application/json', 'Content-Type': 'application/json'
    }
})

export  default class Character extends React.Component{
    constructor(props) {
        super(props);
        this.pageLoad = 1;
    }

    state = {
        cardsOnPage: this.props.cardsOnPage,
        users: [],
        loading: true
    }

    loadingImage = "./img/giphy.gif";

    componentDidMount() {
        this.loadPage();
    }

    loadPage = async() =>{
        const response = await CharacterAPI.get(`/?page=${this.pageLoad}`);
        this.setState({
            users: response.data.results,
            loading: false
        })
    }

    prevPage = () =>{
        this.setState({
            loading:true
        });
        this.pageLoad--;
        this.loadPage();
    }

    nextPage = () =>{
        this.setState({
            loading:true
        });
        this.pageLoad++;
        this.loadPage();
    }

    render(){
        if(!this.state.loading) {
        return (
                <Style.Wrapper>
                    <Style.UserInfo>
                        {this.state.users.map((user, index) => {
                            if (index < this.state.cardsOnPage) {
                                return (
                                    <Style.Card>
                                        {/*<div>ID: {user.id}</div>*/}
                                        <img src={user.image} alt={user.name}/>
                                        <Style.Name>{user.name}</Style.Name>
                                    </Style.Card>
                                )
                            }
                        })
                        }
                    </Style.UserInfo>
                    <div>
                        <Style.Button onClick={this.prevPage} disabled={this.pageLoad === 1}>PREV</Style.Button>
                        <Style.Button onClick={this.nextPage} disabled={this.pageLoad === 25}>NEXT</Style.Button>
                    </div>
                </Style.Wrapper>
        )
        } else {
            return(
                <Style.LoadingImg src={this.loadingImage} alt="loading"/>
            )
        }
    }
}
