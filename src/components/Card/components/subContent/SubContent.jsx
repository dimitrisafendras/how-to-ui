import React from 'react';
import Heart from '../../../../assets/heart.svg';
import Info from '../../../../assets/info.svg';
import './SubContent.css'

export const SubContent = () =>
	<div className='SubContent'>
		<div className='Metadata'>
			<img src={Heart} className='Likes'/>
			<div className='Date'>
				Lorem Ipsum has been
			</div>
		</div>
		<img src={Info} className='InfoIcon'/>
	</div>