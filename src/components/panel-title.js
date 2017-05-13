import React from 'react'
import { NavLink } from 'react-router-dom'
import('./panel-title.css')

class Panel extends React.Component{
	render(){
		return(

		<div className="row">
			<div className="col-lg-12 col-md-12  hidden-xs">
				<div className="panel-title">
					<strong ><NavLink exact to="/popular" activeClassName="active">Bài Viết xem nhiều nhất</NavLink></strong>
					<strong><NavLink exact to="/question" activeClassName="active">Hỏi & Đáp</NavLink></strong>
				</div>
			</div>
		</div>
			
			)
	}
}

export default Panel