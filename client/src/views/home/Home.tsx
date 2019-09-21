import React from "react"
import { Upload,Input, Icon } from 'antd';

import Header from "../../components/header"
import Footer from "../../components/footer"
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

    UploadButton: React.FC = ()=> (
        <div className="upload-button">
          <Icon type={this.state.loading ? 'loading' : 'plus'} style={{ fontSize: 24 }}/>
          <div className="ant-upload-text">Upload</div>
        </div>
    );

    FsUpload: React.FC = ()=>{
        return (
            <section className="container upload-container">
                <Upload
                    name="file"
                    listType="picture-card"
                    className="uploader"
                    showUploadList={false}
                    onChange={this.handleChange}
                    action="/api/upload"
                >
                    {this.state.url !== "" ? <img src={this.state.url} alt="file" style={{ width: '100%' }} /> : <this.UploadButton/>}
                </Upload>
            </section>
        )
    }

    ResInfo: React.FC = ()=>{
        //if (!this.state.visible) return null
        return (
            <section className="container res-container">
                <div className="res-contents">
                    <Input value={this.state.url} size="large" />
                </div>
            </section>
        )
    }

    render(){
        return (
            <div id = "home">
                <Header></Header>
                <article className="home-contents">
                    <this.ResInfo></this.ResInfo>
                    <this.FsUpload></this.FsUpload>
                </article>
                <Footer></Footer>
            </div>
        )
    }
}