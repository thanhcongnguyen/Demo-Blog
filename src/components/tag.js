import React from 'react'
import('./tag.css')

class Tag extends React.Component{
	render(){
		return(
			<div className="tags">
				<h3 className="title-section">tags</h3>
				<a href="#" className="tag-item">Redux<span>23</span></a>
				<a href="#" className="tag-item">Node JS<span>56</span></a>
				<a href="#" className="tag-item">React JS<span>20</span></a>
				<a href="#" className="tag-item">React Native<span>30</span></a>
				<a href="#" className="tag-item">Vue JS<span>6</span></a>
				<a href="#" className="tag-item">HTML<span>18</span></a>
				<a href="#" className="tag-item">CSS<span>15</span></a>
				<a href="#" className="tag-item">JavaScript<span>60</span></a>
				<a href="#" className="tag-item">PostgreSQL<span>8</span></a>
				<a href="#" className="tag-item">MongoDB<span>11</span></a>
				<a href="#" className="tag-item">MySQL<span>5</span></a>
				<a href="#" className="tag-item">PHP<span>3</span></a>
			</div>
			)
	}
}


export default Tag