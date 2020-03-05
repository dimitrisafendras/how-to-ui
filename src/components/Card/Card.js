import React from 'react';
import './Card.css';
import Comment from '../../assets/comment.svg';
import Direction from '../../assets/direction.svg';
import Heart from '../../assets/heart.svg';
import Info from '../../assets/info.svg';
import Logo from '../../assets/logo.svg';
import Twitter from '../../assets/twitter.svg';
import BG from '../../assets/milky-way.jpg';

export const Card = () =>
	<div className='CardContainer'>
		<div className='Card FinalStyle CardFixes'>
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
			</div>
			<div className='SubHeaderContainer2 MarginBottom'>
				<div className='Text2'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry'sLorem Ipsum has been the industry's
				</div>
				<div className='Link2'>
					Lorem Ipsum has been the industry'sLorem Ipsum has been the industry's
				</div>
			</div>
			<div className='ContentContainer3 MarginBottom'>
				<img src={BG} className='Image3'/>
				<div className='ContentInfoContainer3'>
					<div className='ContentHeader3'>
						It is a long established a reader will be distracted by the
					</div>
					<div className='ContentText3'>
						It is  that a reader will be distracted by the
					</div>
					<div className='ContentLink3'>
						It is a long estaa reader will be distracted by the
					</div>
				</div>
			</div>
			<div className='SubContentContainer2 MarginBottom'>
				<div className='MetadataContainer2'>
					<img src={Heart} className='Likes2'/>
					<div className='Date2'>
						Lorem Ipsum has been
					</div>
				</div>
				<img src={Info} className='InfoIcon2'/>
			</div>
		</div>
		<div className='Footer2 FooterFixes'>
			<div className='ExtraInfoContainer'>
				<img src={Comment} className='ExtraInfoIcon' />
				<div className='ExtraInfoTxt'>
					Lorem Ipsum is simply dummy text of the
				</div>
			</div>
			<img src={Direction} className='NextBTN2' />
		</div>
	</div>;








