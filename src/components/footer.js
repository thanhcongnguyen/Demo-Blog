import React from 'react'
import('./footer.css')


class Footer extends React.Component{
	render(){
		return(
			<footer id="footer" className="footer-wp">
				<div className="row">
					<div className="container">
						<div className="col-lg-8">
							<div className="row">
								<div className="col-lg-12">
									<ul className="aboutus">
										<li><a href="#">Trang Chủ</a></li>
										<li><a href="#">Giới Thiệu</a></li>
										<li><a href="#">Bản Quyền</a></li>
										<li><a href="#">Liên Hệ</a></li>
									</ul>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12">
									<div className="copyright">
										<p>Bản quyền © 2017 Thanhcongdev. Phát triển bởi Nguyễn Thành Công</p>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-4">
							<div className="social">
								<ul className="social-share">
									<li ><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li ><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
									<li ><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
									<li ><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
			)
	}
}


export default Footer