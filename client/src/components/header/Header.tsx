import React from "react"
import "./Header.scss"

export default class Header extends React.Component {
    render(){
        return (
            <header className="header">
                <nav>
                    <span>GKD</span>
                </nav>
            </header>
        )
    }
}