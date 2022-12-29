import React from 'react';
import joinBarLogo from '../assets/netflix.png';
import './JoinBar.css';

function JoinBar() {
	const briefDescription =
		'Starring Jonah Hill and Emma Stone. From Cary Fukunaga ("True Detective") and Patrick Somerville ("The Leftovers").';

	return (
		<>
			<div className="joinbar-container">
				<div className="joinbar-bar">
					<div className="joinbar-logo">
						<img src={joinBarLogo} alt="netflix symbol" srcset="" />
						<p className="bar text">Watch all you want.</p>
					</div>
					<div className="joinbar-btn">
						<a href="netflix.com" className="btn">
							JOIN NOW
						</a>
					</div>
				</div>

				<div className="bar-description">
					<div className="bar-line"></div>
					<div className="bar-content">
						<p className="bar-text">{briefDescription}</p>
					</div>
					<div className="bar-line"></div>
				</div>
			</div>
		</>
	);
}

export default JoinBar;
