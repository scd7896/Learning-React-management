import React from 'react';
import { post } from 'axios';
import './CustomerAdd.css'
// import { TextField } from 'material-ui';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import {withStyles} from '@material-ui/core/styles';

// const styles = theme =>({
//     hidden : {
//         display : 'none'
//     }
// })
class CustomerAdd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            file : '',
            userName : '',
            birthday : '',
            gender : '',
            job : '',
            fileName : '',
            open : false
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
                open : false
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
    handleClickOpen=() =>{
        this.setState({
            open: true
        })
    }
    handleClickClose = () =>{
        this.setState({
            file: null,
            userName :'',
            birthday :'',
            gender : '',
            job : '',
            fileName : '',
            open : false
        })
    }
    render(){
        const { classes} = this.props;
        return (
            // <div>
            //     <Button variant = "contained" color = "primary" onClick = {this.handleClickOpen}>
            //         고객추가하기
            //     </Button>
            //     <Dialog open = {this.state.open} onClose = {this.handleClickClose}>
            //         <DialogTitle>고객추가</DialogTitle>
            //         <DialogContent>
            //             <input className = {classes.hidden} accept = "image/*" id = "raised-button-file" type ="file"  file= {this.state.file} value={this.state.fileName} onChange={this.handleFileChange}></input>
            //             <label htmlFor ="raised-button-file">
            //                 <Button variant = "contained" color="primary" component = "span" name="file">
            //                     {this.state.fileName === "" ? "프로필 이미지 선택" : this.state.fileName}
            //                 </Button>
            //             </label>
            //             <br/>
            //             <TextField label = "이름" type = "text" name = "userName" value={this.state.userName} onChange={this.handleValueChange}></TextField>
            //             <TextField label = "나이" type = "text" name = "birthday" onChange={this.handleValueChange}></TextField>
            //             <TextField label = "직업" type = "text" name = "job" onChange={this.handleValueChange}></TextField>
            //             <TextField label = "성별" type = "text" name = "gender" onChange={this.handleValueChange}></TextField>
                
            //         </DialogContent>
            //         <DialogActions>
            //             <Button variant = "contained" color = "primary" 
            //             onclick = {this.handleFormSubmit}>추가</Button>
            //             <Button variant = "contained" color = "primary" 
            //             onclick = {this.handleClickClose}>닫기</Button>
            //         </DialogActions>
            //     </Dialog>
            // </div>
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
//export default withStyles(styles)(CustomerAdd);
