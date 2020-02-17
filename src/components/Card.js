import React from 'react';
import './Card.css';
import {Separator} from './Separator';


export const Card = () =>
	<>
		<Separator text={'\t\tThe resulted skeleton\n'}/>
		<div className='Card'>
			<div className='Header'>
				<div className='AccountInfoContainer'>
					<div className='Icon'></div>
					<div className='InfoContainer'>
						<div className='UserName'></div>
						<div className='AtUserName'></div>
					</div>
				</div>
				<div className='Logo'></div>
			</div>
			<div className='SubHeaderContainer'>
				<div className='Text'></div>
				<div className='Link'></div>
			</div>
			<div className='ContentContainer'>
				<div className='Image'></div>
				<div className='ContentInfoContainer'>
					<div className='ContentHeader'></div>
					<div className='ContentText'></div>
					<div className='ContentLink'></div>
				</div>
			</div>
			<div className='SubContentContainer'>
				<div className='MetadataContainer'>
					<div className='Likes'></div>
					<div className='Date'></div>
				</div>
				<div className='InfoIcon'></div>
			</div>
			<div className='Footer'>
				<div className='ExtraInfo'></div>
				<div className='NextBTN'></div>
			</div>
		</div>
	</>;







