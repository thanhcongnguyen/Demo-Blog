import React from 'react'
import('./Subcribe.css')


class Subcribe extends React.Component{
	render(){
		return(
			<div className="subcribe">
					<h3>Tìm bài viết trên blog</h3>
					<form action="#" method="post">
						<input type="text" placeholder="Nhập từ khóa" />
						<input type="submit" value="tìm kiếm" />	
					</form>	
			</div>
			)
	}
}

export default Subcribe