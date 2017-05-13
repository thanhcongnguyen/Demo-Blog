import React from 'react'
import('./post.css')

class Post extends React.Component{
	render(){
		return(
			<div className="post clearfix">
					<a href="#" className="img-post">
						<img src="./img/medium_350x350_recruitment-designer.png" alt="desinger" />
					</a>
					<div className="info-post">
						<h3>
							<a href="#" className="title-post">Nên học lập trình web ở đâu - thực trạng và tư vấn</a>
						</h3>
						<p className="create-date">14/04/2017 08:28:46 <span>Lượt xem: 30</span></p>
						<p className="post-caption">Như bạn biết đấy, kiến thức ở trên mạng có quá nhiều, người chia sẻ nội dung có nhiều loại khác nhau, có thể họ là chuyên gia, cũng có thể là những người kiến thức trung bình và họ muốn chia sẻ...<span><a href="#">Đọc tiếp</a></span></p>
					</div>
						
			</div>
			)
	}
}

export default Post
