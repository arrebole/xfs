import React from "react"
import { Input } from 'antd';
import "./Message.scss"

export interface Props {
    url: string
}

export default class Message extends React.Component<Props> {
    render(){
        return (
            <section className="container res-container">
                <div className="res-contents">
                    <Input value={this.props.url} size="large" />
                </div>
            </section>
        )
    }
}