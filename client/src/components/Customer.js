import React from 'react';


class Customer extends React.Component{
    render(){
       return( 
       <tr>
           <td> {this.props.id}</td>
           <td> <img src = {this.props.image} alt = "props img"></img></td>
           <td> {this.props.name}</td>
           <td> {this.props.birthday}</td>
           <td> {this.props.job}</td>
           <td> {this.props.gender}</td>
           
        </tr>
       )
    }
}

// class CustomerProfile  extends React.Component{
//     render(){
//         return(
//             <div>
//                 <img src = {this.props.image} alt="profile"/>
//                 <h2>{this.props.name}({this.props.id})</h2>
//             </div>
//         )
//     }
// }

// class CustomerInfo extends React.Component{
//     render(){
//         return(
//             <div>
//                 <p>{this.props.sex}</p>
//                 <p>{this.props.job}</p>
//                 <p>{this.props.age}</p>
//             </div>
//         )
//     }
// }
export default Customer;