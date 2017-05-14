import React from 'react'
import Article from './article.js'
import BVLQ from './bvlq.js'
import Home from './home.js'


class MainContent extends React.Component{
	render(){
		return(
			<div className="col-lg-8 col-md-8">
				<Article/>
				<BVLQ/>
			</div>
			)
	}
}


export default MainContent