import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import Posts from '../../Components/Posts/Posts';
import SideBar from '../../Components/SideBar/SideBar';

const Home = () => {
	return (
		<>
			<Header />
			<div className="home">
				<Posts />
				<SideBar />
			</div>
		</>
	);
};

export default Home;
