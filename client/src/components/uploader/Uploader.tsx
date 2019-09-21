import React from "react"
import ReactLoading from 'react-loading';
import { Upload, Icon  } from 'antd';
import "./Uploader.scss"

export interface Props {
    loading: boolean
    handleChange:any
    url: string
}

export default class Uploader extends React.Component<Props> {
    UploadButton: React.FC = ()=> (
        <div className="upload-button">
            {
                this.props.loading ? 
                    <ReactLoading type="spin" color="rgb(82, 82, 82)" height={30} width={30} /> 
                    : <Icon type='plus' style={{ fontSize: 24 }}/>
            }
        </div>
    );

    render(){
        return (
            <section className="container upload-container">
                <Upload
                    name="file"
                    listType="picture-card"
                    className="uploader"
                    showUploadList={false}
                    onChange={this.props.handleChange}
                    action="/api/upload"
                >
                    {this.props.url !== "" ? <img src={this.props.url} alt="file" style={{ width: '100%' }} /> : <this.UploadButton/>}
                </Upload>

            </section>
        )
    }
}