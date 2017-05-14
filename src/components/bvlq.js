import React from 'react'
import Slider from 'react-slick'
import('./bvlq.css')


class BVLQ extends React.Component{
	render(){
		let settings = {
	      dots: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 2,
	      slidesToScroll: 1
    	}
		return(
			<div>
				<h3 className="title-section ">bài viết liên quan</h3>
				<Slider {...settings}>
			        <div className="bvlq-detail">
			        	<a href="#"><img src="./img/medium_350x350_recruitment-designer.png" alt="" /></a>
			        	<h3><a href="" className="txt-primary">Tìm hiểu promise trong JavaScript</a></h3>
			        </div>
			        <div className="bvlq-detail">
			        	<a href="#"><img src="./img/medium_350x350_web_can_hoc_nhung_gi1.png" alt="" /></a>
			        	<h3><a href="" className="txt-primary">Node JS: Vấn Đề Đồng Bộ Và Bất Đồng Bộ</a></h3>
			        </div>
			        <div className="bvlq-detail">
			        	<a href="#"><img src="./img/medium_350x350_hoc_lap_trinh_online.png" alt="" /></a>
			        	<h3><a href="" className="txt-primary">JavaScript: ES6</a></h3>
			        </div>
			        <div className="bvlq-detail">
			        	<a href="#"><img src="./img/medium_350x350_recruitment-designer.png" alt="" /></a>
			        	<h3><a href="" className="txt-primary">React JS: Lấy Dữ Liệu Với Fetch API</a></h3>
			        </div>
			        
		      	</Slider>
			</div>
			)
	}
}


export default BVLQ