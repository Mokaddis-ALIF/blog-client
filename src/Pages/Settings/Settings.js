import React from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import './Settings.css';

const Settings = () => {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update Your Account</span>
					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
							src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingsPPIcon far fa-user-circle"></i>{' '}
						</label>
						<input
							id="fileInput"
							type="file"
							style={{ display: 'none' }}
							className="settingsPPInput"
						/>
						<label>Username</label>
						<input type="text" placeholder="Alif" name="name" />
						<label>Email</label>
						<input type="email" placeholder="alif@gmail.com" name="email" />
						<label>Password</label>
						<input type="password" placeholder="Password" name="password" />
						<button className="settingsSubmitButton" type="submit">
							Update
						</button>
					</div>
				</form>
			</div>
			<SideBar />
		</div>
	);
};

export default Settings;
