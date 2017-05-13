import React from 'react'
import('./banner.css')

class Banner extends React.Component{
	render(){
		return(
			<section>
				<div className="row">
					<div className="banner container">
						<div className="col-lg-12 col-md-12 col-sm-12 hidden-xs">
							<img src="./img/newslog-hbn-1.png" alt="banner" />
						</div>
					</div>
				</div>
			</section>
			)
	}
}

export default Banner