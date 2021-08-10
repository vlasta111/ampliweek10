import React from 'react';
import "./header.scss";



export default class Header extends React.Component{

    render(){
        return(
            <div className="container">
                <div className="menu">
                    <nav className="menu__header">
                        <svg className="menu__header__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z" fill="#000"/></svg>
                    </nav>
                    <div className="menu__data">
                        <button className="menu__data__btn">
                            Sign Up
                        </button>
                        <button className="menu__data__btn">
                            Login
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}