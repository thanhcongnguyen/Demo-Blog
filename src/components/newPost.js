import React from 'react'
import('./newPost.css')

class Newpost extends React.Component{
	render(){
		return(
			<div className="new-post">
						<h3 className="title-section">Bài viết mới nhất</h3>
						<div className="wiget-content">
						<ul className="fn-list">
							<li className="fn-item">
							<div className="row">
								<div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
									<a href="#" className="thumb">
										<img src="./img/medium_350x350_hoc_web_ra_lam_gi1.png" alt="#" className="fn-thumb" />
									</a>
								</div>
								<div className="col-lg-10 col-md-10 col-sm-10 col-xs-9">
									<div className="wrapper-name-date">
										<h3 className="post-name">
											<a href="#" href="#" className="fn-link fn-name txt-primary">Promise trong javascript</a>
										</h3>
							 			<h4 className="create-date txt-info">23/04/2017 2:01 AM</h4>
									</div>
								</div>
							</div>	
							</li>

							<li className="fn-item">
							<div className="row">
								<div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
									<a href="#" className="thumb">
										<img src="./img/medium_350x350_recruitment-designer.png" alt="#" className="fn-thumb" />
									</a>
								</div>
								<div className="col-lg-10 col-md-10 col-sm-10 col-xs-9">
									<div className="wrapper-name-date">
										<h3 className="post-name">
											<a href="#" href="#" className="fn-link fn-name txt-primary">NodeJS: Vấn đề đồng bộ và bất đồng bộ</a>
										</h3>
							 			<h4 className="create-date txt-info">23/04/2017 2:11 AM</h4>
									</div>
								</div>
							</div>	
							</li>

							<li className="fn-item">
							<div className="row">
								<div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
									<a href="#" className="thumb">
										<img src="./img/medium_350x350_web_can_hoc_nhung_gi1.png" alt="#" className="fn-thumb" />
									</a>
								</div>
								<div className="col-lg-10 col-md-10 col-sm-10 col-xs-9">
									<div className="wrapper-name-date">
										<h3 className="post-name">
											<a href="#" href="#" className="fn-link fn-name txt-primary">javaScript: ES6</a>
										</h3>
							 			<h4 className="create-date txt-info">23/04/2017 2:12 AM</h4>
									</div>
								</div>
							</div>	
							</li>

							<li className="fn-item">
							<div className="row">
								<div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
									<a href="#" className="thumb">
										<img src="./img/fetch-api-1050x360.jpg" alt="#" className="fn-thumb" />
									</a>
								</div>
								<div className="col-lg-10 col-md-10 col-sm-10 col-xs-9">
									<div className="wrapper-name-date">
										<h3 className="post-name">
											<a href="#" href="#" className="fn-link fn-name txt-primary">ReactJS: lấy dữ liệu với fetch API</a>
										</h3>
							 			<h4 className="create-date txt-info">23/04/2017 2:01 AM</h4>
									</div>
								</div>
							</div>	
							</li>

							<li className="fn-item">
							<div className="row">
								<div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
									<a href="#" className="thumb">
										<img src="./img/medium_350x350_hoc_web_ra_lam_gi1.png" alt="#" className="fn-thumb" />
									</a>
								</div>
								<div className="col-lg-10 col-md-10  col-sm-10 col-xs-9">
									<div className="wrapper-name-date">
										<h3 className="post-name">
											<a href="#" href="#" className="fn-link fn-name txt-primary">Promise trong javascript</a>
										</h3>
							 			<h4 className="create-date txt-info">23/04/2017 2:01 AM</h4>
									</div>
								</div>
							</div>	
							</li>
							

							

						</ul>
							
						</div>
			</div>
			)
	}
}


export default Newpost