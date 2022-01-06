import React from 'react';
import './TopBar.css';

const TopBar = () => {
	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fab fa-facebook"></i>
				<i className="topIcon fab fa-twitter"></i>
				<i className="topIcon fab fa-pinterest"></i>
				<i className="topIcon fab fa-instagram-square"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">Home</li>
					<li className="topListItem">About</li>
					<li className="topListItem">Contact</li>
					<li className="topListItem">Write</li>
					<li className="topListItem">Logout</li>
				</ul>
			</div>
			<div className="topRight">
				<img src="https://i.ibb.co/7k4RgQL/4.jpg" alt="" className="topImage" />
				<i class="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
};

export default TopBar;
