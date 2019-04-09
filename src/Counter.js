import React from 'react';

class Customer extends React.Component{
    render(){
       return( 
       <div>
            <CustomerProfile id ={this.props.id} image={this.props.image} name = {this.props.name}/>
            <CustomerInfo age = {this.props.age} sex ={this.props.sex} job = {this.props.job}/>
            <h2>테스트해보시는것이여</h2>
        </div>
       )
    }
}

class CustomerProfile  extends React.Component{
    render(){
        return(
            <div>
                <img src = {this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.sex}</p>
                <p>{this.props.job}</p>
                <p>{this.props.age}</p>
            </div>
        )
    }
}
export default Customer;