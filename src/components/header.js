import React from 'react'
import Logo from './logo.js'
import Menu from './menu.js'
import('./header.css')
class Header extends React.Component{
	render(){
		return(
			<header id="header">
				<div className="container">
					<div className="row">
						<Logo/>
						<Menu/>
					</div>
				</div>
			</header>
		)
	}
}


export default Header