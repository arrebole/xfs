import React from "react"


import Header from "../../components/header"
import Footer from "../../components/footer"
import Message from "../../components/message"
import Uploader from "../../components/uploader"
import "./Home.scss"


export interface Props {}

export interface State {
    loading: boolean
    url: string
}

export default class Home extends React.Component<Props, State> {
    constructor(props:Props){
        super(props)
        
        this.state = { 
            loading: false,
            url: "" 
        };
    }

    handleChange = (info:any) => {
        // 如果是上传操作，将load改为true
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }

        // 如果上传完成
        if (info.file.status === 'done'){
            console.log(info);
            this.setState({ loading: false });
            if (info.file.response.code >= 0 ){
                this.setState({ url: info.file.response.data.url });
            }else{
                alert("上传失败")
            }
        }

    };

    render(){
        return (
            <div id = "home">
                <Header></Header>

                <article className="home-contents">
                    <Message url={this.state.url} > </Message>
                    <Uploader url={this.state.url} handleChange={this.handleChange} loading={this.state.loading}></Uploader>
                </article>
                
                <Footer></Footer>
            </div>
        )
    }
}