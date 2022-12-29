import React from 'react';
import netflixLogo from '../assets/netflixlogo.png';
import './TopNav.css';

function TopNav() {
	return (
		<>
			<nav className="nav-container">
				<div className="nav-logo">
					<a href="netflix.com">
						<img className="nav-icon" src={netflixLogo} alt="Netflix Logo" />
					</a>
				</div>
				<div className="nav-elements">
					<p>UNLIMITED TV SHOWS & MOVIES</p>
					<a href="netflix.com" className="nav-joinus">
						JOIN NOW
					</a>
					<a href="netflix.com" className="nav-signin">
						SIGN IN
					</a>
				</div>
			</nav>
		</>
	);
}

export default TopNav;
