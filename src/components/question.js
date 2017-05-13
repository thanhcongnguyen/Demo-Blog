import React from 'react'
import { NavLink , Route} from 'react-router-dom'

import Getanswer from './getanswer.js'


import Sendquestion from'./sendquestion.js'
import('./question.css')


export class Abc extends React.Component{
	render(){
		return(
			<h1>abc</h1>
			)
	}
}

export class Cde extends React.Component{
	render(){
		return(
			<h1>bcd</h1>
		)
	}
}

class Question extends React.Component{
	render(){
		const { match } = this.props
		return(
			<div className="question">
				<strong><NavLink exact to={`${match.url}/getanswer`} activeClassName="actived">Câu Hỏi</NavLink></strong>
				<strong><NavLink exact to={`${match.url}/sendquestion`} activeClassName="actived">Gởi câu hỏi</NavLink></strong>
				<Route exact path={`${match.url}/getanswer`} component={Getanswer}/>
				<Route  path={`${match.url}/sendquestion`} component={Sendquestion}/>
			</div>
			)
	}
}


export default Question