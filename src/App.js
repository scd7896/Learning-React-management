import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


const customers =[{
  'id' : 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '김서버',
  'age' : '25',
  'sex' : '남자',
  'job' : '학생'
},{
  'id' : 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '킹갓버',
  'age' : '21',
  'sex' : '여자',
  'job' :  '프로게이머'
},{
  'id' : 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '그녀그뇬그녀',
  'age' : '30',
  'sex' :  '여자',
  'job' : '사무직'
}
]

class App extends Component {
  
 
  render() {
    return (
      <div className="gray-background">
        {
          customers.map(c => {
            return (
            <Customer
              key = {c.id}
              id = {c.id}
              image ={c.image}
              name ={c.name}
              sex = {c.sex}
              age = {c.age}
              job = {c.job}
              />   
            )
          })
        }
      
      </div>
    );
  }
}

export default App;
