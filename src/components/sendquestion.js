import React from 'react'
import('./sendquestion.css')

class Sendquestion extends React.Component{
	render(){
		return(
			<div className="send-question">
				<form>
					<input type="text" className="form-control" id="exampleInputEmail1" placeholder="name" />
					<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
					<textarea className="form-control" rows="10"></textarea>
					<button type="button" className="btn btn-default">send</button>
				</form>
			</div>
			)
	}
}


export default Sendquestion