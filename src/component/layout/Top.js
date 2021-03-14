import React, { Component } from 'react'
import Gnb from "./Gnb.js"
import { Icon } from 'semantic-ui-react'
import Link from 'next/link';


class Top extends Component{
    
    state = {
        gnbOn : false
    };
    
    
    showGNB = () => {
        const gnbPannel=document.getElementsByClassName ("gnb-pannel");
        this.setState({
            gnbOn : true
        })
    }

    render(){
        const uiData = this.state
        return (
            <div className="header">
                <Link href="/">
                    <h1>EUNEUN</h1>
                </Link>
                <a className="gnb-menu" onClick={this.showGNB}>
                    <Icon name="align center" />
                </a>
                <div className={`gnb-pannel ${uiData.gnbOn  ? "show" : ""}`}>
                    <Gnb />
                </div>
            </div>
        );
    }
}   

export default Top;