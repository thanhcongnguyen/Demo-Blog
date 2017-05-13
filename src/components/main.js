import React from 'react'
import Aside from './aside.js'
import MainContent from './mainContent.js'
import('./main.css')
class Main extends React.Component{
	render(){
		return(
		<section id="main">
			<div className="row">
				<div className="container">
					<MainContent/>
					<Aside/>
				</div>
			</div>
		</section>
			)
	}
}


export default Main