import React, { Component } from 'react'
import Gnb from "./Gnb.js"
import { Icon } from 'semantic-ui-react'
import Link from 'next/link';


class Top extends Component{
    render(){
        return (
            <div className="header">
                <Link href="/">
                    <h1>EUNEUN</h1>
                </Link>
                <Gnb />
            </div>
        );
    }
}   

export default Top;