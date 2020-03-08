import React from 'react';
import Logo from '../../../../assets/logo.svg';
import Twitter from '../../../../assets/twitter.svg';
import './Header.css'

export const Header = () =>
	<div className='Header'>
		<div className='AccountInfo'>
			<img src={Logo} className='Icon'/>
			<div className='Info'>
				<div className='UserName'>
					Lorem Ipsum
				</div>
				<div className='AtUserName'>
					@Lorem Ipsum
				</div>
			</div>
		</div>
		<img src={Twitter} className='Logo' />
	</div>;
