import React from 'react';
import "./main.scss";



export default class Main extends React.Component{

    render(){
        return(
            <div className="container">
                <div className="content">
                    <div className="content__title">
                        <h1>PEXELS</h1>
                        <h2>Best free stock photos in one place.</h2>
                    </div>
                    <div className="content__help">
                        <div className="content__help__data">
                            <input type="text" placeholder="Search for free photos..."className="content__help__data__input" />
                            <img className="content__help__data__img" src="https://image.flaticon.com/icons/png/512/14/14877.png" alt="search" />
                        </div>
                        <div className="content__help__menu">
                            <ul className="content__help__menu__main">
                                <li><a href="#">travel</a></li>
                                <li><a href="#">fish</a></li>
                                <li><a href="#">shopping</a></li>
                                <li><a href="#">house</a></li>
                                <li><a href="#">healthy</a></li>
                                <li><a href="#">football</a></li>
                                <li><a href="#">boat</a></li>
                                <li><a href="#">flowers</a></li>
                                <li><a href="#">art</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
 
            </div>
        )
    }
}