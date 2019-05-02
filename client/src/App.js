import React, { Component } from 'react';
import './App.css';
import CustomerAdd from './components/CustomerAdd';
import Customer from './components/Customer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      customers : '',
      completed : 0,
      searchKeyword : ''
    }
  }
  stateRefresh = () =>{
    this.setState({
      customers: '',
      completed: 0,
      searchKeyword : ''
    });
    this.callApi()
      .then(res => this.setState({customers : res}))
      .catch(err => console.log(err));
  }
  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers : res}))
      .catch(err => console.log(err));
  }
  callApi = async() =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  progress = () =>{
    const {completed} = this.state;
    this.setState({ completed: completed >= 100 ? 0: completed+1})
  }
  handleValueChange = (e) =>{
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
  render() {
    const filteredComponents = (data)=>{
      data = data.filter((c)=>{
        return c.NAME.indexOf(this.state.searchKeyword) > -1;
      });
      return data.map((c)=>{
        return ( <Customer stateRefresh = {this.stateRefresh} key = {c.id}     id = {c.id}  image ={c.image}
          name ={c.NAME} gender = {c.gender}  birthday = {c.birthday}  job = {c.job} />
      )});
    }
    return (
      <div>
       
        <div >
            <table>
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>이미지</th>
                    <th>이름</th>
                    <th>나이</th>
                    <th>성별</th>
                    <th>직업</th>
                    <th>설정</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.customers? filteredComponents(this.state.customers): "로딩 중"}
              </tbody>
            </table>
        </div>
        <CustomerAdd stateRefresh = {this.stateRefresh}></CustomerAdd>
        <div>
          <input type = "text" placeholder ="고객검색하기"
          name = "searchKeyword"
          value = {this.state.searchKeyword}
          onChange ={this.handleValueChange}></input>
        </div>
        
      </div>
      
    )
   }
}

export default App;
