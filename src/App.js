import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"


import "./App.scss"

export function Images(props) {
    return (
        <div className="image-card">
            <img src={props.img} alt='pictures'/>
        </div>
    );
}



export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
            <div className="images">
                <Images img="./images/1.jpg"/>
                <Images img="./images/2.png"/>
                <Images img="./images/3.jpg"/>
                <Images img="./images/4.jpg"/>
                <Images img="./images/5.jpg"/>
                <Images img="./images/6.jpg"/>
                <Images img="./images/7.jpg"/>
                <Images img="./images/8.jpg"/>
                <Images img="./images/9.jpg"/>
                <Images img="./images/10.jpg"/>
                <Images img="./images/11.jpg"/>
                <Images img="./images/12.jpg"/>
                <Images img="./images/13.jpg"/>
                <Images img="./images/14.jpg"/>
                <Images img="./images/15.jpg"/>
                <Images img="./images/16.jpg"/>
                <Images img="./images/17.jpg"/>
                <Images img="./images/18.jpg"/>
                <Images img="./images/19.jpg"/>
                <Images img="./images/20.jpg"/>
                <Images img="./images/21.jpg"/>
                <Images img="./images/22.jpg"/>

            </div>
            
        </div>
    )
}


