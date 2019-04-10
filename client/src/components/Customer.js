import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component{
    render(){
       return( 
       <TableRow>
           <TableCell> {this.props.id}</TableCell>
           <TableCell> <img src = {this.props.image} alt = "props img"></img></TableCell>
           <TableCell> {this.props.name}</TableCell>
           <TableCell> {this.props.age}</TableCell>
           <TableCell> {this.props.job}</TableCell>
           <TableCell> {this.props.sex}</TableCell>
           
        </TableRow>
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