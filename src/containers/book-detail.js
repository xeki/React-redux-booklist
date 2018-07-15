import React, { Component } from 'react';
import { connect } from 'react-redux';


class  BookDetail extends Component{
	displayDetails(){
		let activeBook = this.props.activeBook;
		if(activeBook){
			return (<div><h3> Book detail</h3>
			<b> Title </b>{activeBook.title} <br />
			<b> Page </b>{ activeBook.pages} <br />
			</div>	);
		}
		return "No book selected";
	}
	render(){
			return (<div> {this.displayDetails()}</div>);
		}
	
	
}

function mapStateToProps(state){
	console.log("State: " + state.activeBook);
				return {activeBook:state.activeBook};
}

		
export default connect(mapStateToProps)(BookDetail);