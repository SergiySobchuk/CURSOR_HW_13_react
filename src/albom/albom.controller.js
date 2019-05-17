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
        // this.loadPage();
        this.pageLoad = 1;
    }
    state = {
        cardsOnPage: this.props.cardsOnPage,
        users: [],

        // disabledPrev: true,
        // disabledNext: false,
        // test: "10"
    }

    componentDidMount() {
        this.loadPage();
    }

    loadPage = async() =>{
        console.log("loadPage work!!!");
        const response = await CharacterAPI.get(`/?page=${this.pageLoad}`);
        this.setState({
            users: response.data.results,
        })
    }



    prevPage = () =>{
        this.pageLoad--;

        // if (this.state.pageLoad === 1){
        //     this.setState({
        //         disabledPrev: true
        //     })
        //
        // }else {
        //     this.setState({
        //         disabledPrev: false,
        //         disabledNext: false
        //     })
        // }
        this.loadPage();
            // const response = await CharacterAPI.get(`/?page=${this.state.pageLoad}`);
            // this.setState({
            //     users: response.data.results
            // })
            // this.forceUpdate();
    }

    nextPage = () =>{
        // console.log("*****************next*****************");
        // console.log("in page:",this.state.pageLoad);
        // console.log("in test:",this.state.test);
        // this.setState({
        //     pageLoad: this.state.pageLoad + 1
        // })
        // console.log("in disabledNext:",this.state.disabledNext);

        // this.setState({
            this.pageLoad++;

        // if ((this.state.pageLoad + 1) ===25){
        //     let res = this.state.pageLoad + 1;
        //     this.setState({
        //         disabledNext: true,
        //         pageLoad: res,
        //         test: 15
        //     })
        // }else {
        //     this.setState({
        //         disabledNext: false,
        //         disabledPrev: false,
        //         pageLoad: (this.state.pageLoad + 1)
        //     })
        // }
        // console.log("out page:",this.state.pageLoad);
        // console.log("out test:",this.state.test);
        //
        // console.log("out disabledNext:",this.state.disabledNext);
        // this.forceUpdate();

        this.loadPage();
        //
        // this.setState({
        //     users: response.data.results
        // })
        // console.log("response.data.results:", response.data.results);
    }
    render(){
        return (
             <Style.Wrapper>
                 <Style.UserInfo>
                     {this.state.users.map((user, index) => {
                         if(index < this.state.cardsOnPage){
                         return (
                             <Style.Card>
                                 <div>ID: {user.id}</div>
                                 <img src={user.image} alt={user.name}/>
                                 <div>{user.name}</div>
                             </Style.Card>
                         )}
                     })
                     }
                </Style.UserInfo>
                <div>
                    <button onClick={this.prevPage} disabled={this.pageLoad ===1}>PREV</button>
                    <button onClick={this.nextPage} disabled={this.pageLoad === 25}>NEXT</button>
                </div>
             </Style.Wrapper>
        )
    }
}

// {users.map((user) => (
//     <Style.Card>
//         <div>ID: {user.id}</div>
//         <div>Name:{user.name}</div>
//         <img src={user.foto} alt={user.name}/>
//     </Style.Card>
// ))}

{/*<Style.UserInfo>*/}
    {/*{users.map((user, index) => {*/}
        {/*if(index < this.state.countCards){*/}
            {/*return (*/}
                {/*<Style.Card>*/}
                    {/*<div>ID: {user.id}</div>*/}
                    {/*<div>Name:{user.name}</div>*/}
                    {/*<img src={user.foto} alt={user.name}/>*/}
                {/*</Style.Card>*/}
            {/*)}*/}
    {/*})*/}
    {/*}*/}
{/*</Style.UserInfo>*/}