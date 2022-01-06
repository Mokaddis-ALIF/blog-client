import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">React & Node</span>
				<span className="headerTitleLg">Blog</span>
			</div>
			<img
				src="https://i.ibb.co/Bj2cgXh/blog-bg.jpg"
				alt=""
				className="headerImg"
			/>
		</div>
	);
};

export default Header;
