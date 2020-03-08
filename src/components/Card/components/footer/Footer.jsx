import React from 'react';
import Comment from '../../../../assets/comment.svg';
import Direction from '../../../../assets/direction.svg';
import './Footer.css'

export const Footer = () =>
	<div className='Footer'>
		<div className='ExtraInfo'>
			<img src={Comment} className='ExtraInfoIcon' />
			<div className='ExtraInfoTxt'>
				Lorem Ipsum is simply dummy text of the
			</div>
		</div>
		<img src={Direction} className='NextBTN' />
	</div>
