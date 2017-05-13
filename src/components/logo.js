import React from 'react'
class Logo extends React.Component{
	render(){
		return(
			<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
				<div className="logo">
					<a href="http://localhost:3000/" className="logo">
						<img src="./img/logo.png" alt="logo" />
					</a>
				</div>
			</div>
			)
	}
}


export default Logo