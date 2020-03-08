import React from 'react';
import Heart from '../../../../assets/heart.svg';
import Info from '../../../../assets/info.svg';
import './SubContent.css'

export const SubContent = () =>
	<div className='SubContentContainer2 MarginBottom'>
		<div className='MetadataContainer2'>
			<img src={Heart} className='Likes2'/>
			<div className='Date2'>
				Lorem Ipsum has been
			</div>
		</div>
		<img src={Info} className='InfoIcon2'/>
	</div>