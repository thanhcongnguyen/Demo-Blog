import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import Header from './header.js'
import Banner from './banner.js'
import Main from './main.js'
import Footer from './footer.js'

import('./global.css')
import('./responsive.css')

class App extends React.Component{
	render(){
		return(
			<Router>
				<div>
					<Header/>
					<Banner/>
					<Main/>
					<Footer/>
				</div>
			</Router>
			)
	}
}

export default App