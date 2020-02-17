import React from 'react';
import './Card.css';
import {Separator} from './Separator';
import Comment from '../assets/comment.svg';
import Direction from '../assets/direction.svg';

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

		<Separator text={'\t\tReplace footer\'s placeholders with actual ui\n'}/>

		<div className='Footer'>
			<div className='ExtraInfo'></div>
			<div className='NextBTN'></div>
		</div>

		<Separator/>

		<div className='Footer1'>
			<img src={Comment} className='ExtraInfo1' />
			<img src={Direction} className='NextBTN1' />
		</div>

		<Separator/>

		<div className='Footer2'>
			<div className='ExtraInfoContainer'>
				<img src={Comment} className='ExtraInfoIcon' />
				<div className='ExtraInfoTxt'>
					Lorem Ipsum is simply dummy text of the
				</div>
			</div>
			<img src={Direction} className='NextBTN2' />
		</div>

		<Separator text={'Commit footer'}/>

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
			<div className='Footer2'>
				<div className='ExtraInfoContainer'>
					<img src={Comment} className='ExtraInfoIcon' />
					<div className='ExtraInfoTxt'>
						Lorem Ipsum is simply dummy text of the
					</div>
				</div>
				<img src={Direction} className='NextBTN2' />
			</div>
		</div>

		<Separator/>
	</>;







