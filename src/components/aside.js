import React from 'react'
import Subcribe from './subcribe.js'
import Newpost from './newPost.js'
import BRight from './bRight.js'
import Tag from './tag.js'



class Aside extends React.Component{
	render(){
		return(
		<aside className="sidebar">
			<div className="col-lg-4 col-md-4">
			<div className="row">
				<div className="col-lg-12 col-md-12 hidden-sm hidden-xs">
					<Subcribe/>
				</div>
			</div>
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<BRight/>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<Newpost/>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<Tag/>
					</div>
				</div>
				
			</div>
			
		</aside>

		)
	}
}

export default Aside