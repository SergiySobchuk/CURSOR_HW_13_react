import styled from "styled-components";

export default {
    Wrapper: styled.div`
        padding: 10px;
        margin: 5px;
    `,
    UserInfo: styled.div`
        padding: 10px;
        width: auto;
        font-size: 15px;
        display: flex;
        flex-wrap: wrap;
    `,
    Card: styled.div`
        background-color: #F8F8FF;
        padding: 10px;
        margin: 5px;
        height: 375px;
        width: 300px;
        border-radius: 10px;
        border: 1px solid #D3D3D3;
    `,
    LoadingImg: styled.img`
        display: block;
        margin: 0 auto;
        width: auto;
    `,
    Button: styled.button`
        margin: 5px;
        cursor: pointer;
        border-radius: 10px;
        border: none;
    `,
    Name: styled.div`
        font-size: 25px;
        display: flex;
        justify-content: center;
        margin-top: 5px;
        font-family: 'Indie Flower', cursive;
        flex-wrap: wrap;
    `
}