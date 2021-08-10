import React from 'react';
import './layout.scss'
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';

export default class Layout extends React.Component{

    render(){
        return(
            <div className="layout">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}