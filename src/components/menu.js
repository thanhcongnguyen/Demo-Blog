import React from 'react'
import ('./menu.css')

class Menu extends React.Component{
	render(){
		return(
			<nav className="col-lg-6" id="main-nav">
				<ul className="main-menu">
					<li>
        				<a href="#"><i className="fa fa-home" aria-hidden="true"></i></a>
    				</li>
    				<li className="has-submenu">
						<a href="#" >Lập Trình</a>
						<ul className="sub-menu">
            				<li><a href="#">HTML/CSS</a></li>
            				<li className="menu-item-has-childrend">
                				<a href="#">JavaScript</a>
                				<ul className="sub-menu">
                    				<li><a href="#">JavaScript cơ bản</a></li>
                                    <li><a href="#">JavaScript Nâng Cao</a></li>
                    				<li><a href="#">ES6</a></li>
                				</ul>
            				</li>
            				<li><a href="#">ReactJS</a></li>
            				<li><a href="#">React Native</a></li>
            				<li><a href="#">NodeJS</a></li>
                            <li><a href="#">VueJS</a></li>
 						</ul>
    				</li>
    				<li className="has-submenu">
						<a href="#" >cơ sở dữ liệu</a>
						<ul className="sub-menu">
                            <li className="menu-item-has-childrend"><a href="#">PostgreSQL</a>
                            	<ul className="sub-menu">
                                	<li><a href="#">PostgreSQL cơ bản</a></li>
                                	<li><a href="#">Function</a></li>
                                	<li><a href="#">Trigger</a></li>
                                	<li><a href="#">View</a></li>
                            	</ul>                            
                        	</li>
                            <li><a href="#">MongoDB</a></li>
                         </ul>
    				</li>
    				<li>
						<a href="#">videos</a>
    				</li>
				</ul>
			</nav>
			)
	}
}


export default Menu