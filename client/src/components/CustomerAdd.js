import React from 'react';
import { post } from 'axios';
import './CustomerAdd.css'

class CustomerAdd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            file : '',
            userName : '',
            birthday : '',
            gender : '',
            job : '',
            fileName : ''
        }
    }
    handleFormSubmit = (e) =>{
        e.preventDefault();
        this.addCustomer()
            .then((res)=>{
                console.log(res.data);
                this.props.stateRefresh();
            })
            this.setState({
                file: null,
                userName :'',
                birthday :'',
                gender : '',
                job : '',
                fileName : '',
            })
    }
    
    handleFileChange = (e)=>{
        this.setState ({
            file: e.target.files[0],
            fileName : e.target.value
        })
    }
    handleValueChange = (e)=>{
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    addCustomer = () =>{
        const url = 'api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config = {
            headers :{
                'content-type' :'multipart/form-data'
            }
        }
        return post(url, formData,config);
    }
    render(){
        return (
            <form onSubmit = {this.handleFormSubmit}>
                <h1>고객추가</h1>
                프로필 이미지 : <input type ="file" name="file" file= {this.state.file} value={this.state.fileName} onChange={this.handleFileChange}></input>
                이름: <input type = "text" name = "userName" value={this.state.userName} onChange={this.handleValueChange}></input>
                나이: <input type = "text" name = "birthday" onChange={this.handleValueChange}></input>
                직업: <input type = "text" name = "job" onChange={this.handleValueChange}></input>
                성별: <input type = "text" name = "gender" onChange={this.handleValueChange}></input>
                <button type = "submit">추가하기</button>
            </form>
        )
    }
}

export default CustomerAdd;
