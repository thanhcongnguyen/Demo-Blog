import React from 'react'
import Post from './post.js'

class ListArticle extends React.Component{
	render(){
		return(
			<div className="row">
				<div className="col-lg-12">
					<Post/>
					<Post/>
					<Post/>
					<Post/>
					<Post/>
					<Post/>
					<Post/>
					<Post/>
					<Post/>
					<Post/>
				</div>
			</div>
			)
	}
}


export default ListArticle

