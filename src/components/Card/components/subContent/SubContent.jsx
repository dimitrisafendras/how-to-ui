import React from 'react';
import Heart from '../../../../assets/heart.svg';
import Info from '../../../../assets/info.svg';
import './SubContent.css'

export const SubContent = () =>
	<div className='SubContentContainer MarginBottom'>
		<div className='MetadataContainer'>
			<img src={Heart} className='Likes'/>
			<div className='Date'>
				Lorem Ipsum has been
			</div>
		</div>
		<img src={Info} className='InfoIcon'/>
	</div>