import React from 'react'
import { Route } from 'react-router-dom'
import Panel from './panel-title.js'
import Question from './question.js'

import List from './list-article.js'
class Home extends React.Component{
	render(){
		return(
			<div>
			<Panel/>
			<Route exact path='/popular' component={List} />
			<Route  path='/question' component={Question} />
			</div>
			)
	}
}


export default Home