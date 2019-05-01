import React, { Component } from 'react';
import './App.css';
import CustomerAdd from './components/CustomerAdd';
import Customer from './components/Customer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      customers : '',
      completed : 0
    }
  }
  stateRefresh = () =>{
    this.setState({
      customers: '',
      completed: 0
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
  render() {
    
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
                  </tr>
                </thead>
                <tbody>
                  { this.state.customers? this.state.customers.map(c => {
                      return ( <Customer key = {c.id}     id = {c.id}  image ={c.image}
                        name ={c.NAME} gender = {c.gender}  birthday = {c.birthday}  job = {c.job} />)
                    }) : "로딩 중"}
              </tbody>
            </table>
        </div>
        <CustomerAdd stateRefresh = {this.stateRefresh}></CustomerAdd>
      </div>
      
    )
   }
}

export default App;
