import React from 'react';
import Logo from '../../../../assets/logo.svg';
import Twitter from '../../../../assets/twitter.svg';
import './Header.css'

export const Header = () =>
	<div className='Header3 MarginBottom'>
		<div className='AccountInfoContainer3'>
			<img src={Logo} className='Icon3'/>
			<div className='InfoContainer3'>
				<div className='UserName3'>
					Lorem Ipsum
				</div>
				<div className='AtUserName3'>
					@Lorem Ipsum
				</div>
			</div>
		</div>
		<img src={Twitter} className='Logo3' />
	</div>;
