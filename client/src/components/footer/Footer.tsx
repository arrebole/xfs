import React from "react"
import "./Footer.scss"

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-contents">
                    <p>V0.1.0 | 静态文件服务器 </p>
                    <p>Copyright Ⓒ 2019 <strong>futanaicha</strong> , LLC. All rights reserved.</p>
                </div>
            </div>
        )
    }
}