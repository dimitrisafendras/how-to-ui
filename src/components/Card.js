import React from 'react';
import './Card.css';
import {Separator} from './Separator';
import Comment from '../assets/comment.svg';
import Direction from '../assets/direction.svg';
import Heart from '../assets/heart.svg';
import Info from '../assets/info.svg';
import Logo from '../assets/logo.svg';
import Twitter from '../assets/twitter.svg';
import BG from '../assets/milky-way.jpg';

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

		<Separator text={'\t\tReplace SubContent\'s placeholders with actual ui\n'}/>

		<div className='SubContentContainer'>
			<div className='MetadataContainer'>
				<div className='Likes'></div>
				<div className='Date'></div>
			</div>
			<div className='InfoIcon'></div>
		</div>

		<Separator/>

		<div className='SubContentContainer1'>
			<div className='MetadataContainer1'>
				<img src={Heart} className='Likes1'/>
				<div className='Date1'></div>
			</div>
			<img src={Info} className='InfoIcon1'/>
		</div>

		<Separator/>

		<div className='SubContentContainer2'>
			<div className='MetadataContainer2'>
				<img src={Heart} className='Likes2'/>
				<div className='Date2'>
					Lorem Ipsum has been
				</div>
			</div>
			<img src={Info} className='InfoIcon2'/>
		</div>

		<Separator text={'Commit subContent'} />

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
			<div className='SubContentContainer2'>
				<div className='MetadataContainer2'>
					<img src={Heart} className='Likes2'/>
					<div className='Date2'>
						Lorem Ipsum has been
					</div>
				</div>
				<img src={Info} className='InfoIcon2'/>
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

		<Separator text={'\t\tReplace SubHeader\'s placeholders with actual ui\n'}/>

		<div className='SubHeaderContainer'>
			<div className='Text'></div>
			<div className='Link'></div>
		</div>

		<Separator/>

		<div className='SubHeaderContainer1'>
			<div className='Text1'>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				Lorem Ipsum has been the industry'sLorem Ipsum has been the industry's
			</div>
			<div className='Link1'>
				Lorem Ipsum has been the industry'sLorem Ipsum has been the industry's
			</div>
		</div>

		<Separator/>

		<div className='SubHeaderContainer2'>
			<div className='Text2'>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				Lorem Ipsum has been the industry'sLorem Ipsum has been the industry's
			</div>
			<div className='Link2'>
				Lorem Ipsum has been the industry'sLorem Ipsum has been the industry's
			</div>
		</div>

		<Separator text={'Commit SubHeader'}/>

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
			<div className='SubHeaderContainer2'>
				<div className='Text2'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry'sLorem Ipsum has been the industry's
				</div>
				<div className='Link2'>
					Lorem Ipsum has been the industry'sLorem Ipsum has been the industry's
				</div>
			</div>
			<div className='ContentContainer'>
				<div className='Image'></div>
				<div className='ContentInfoContainer'>
					<div className='ContentHeader'></div>
					<div className='ContentText'></div>
					<div className='ContentLink'></div>
				</div>
			</div>
			<div className='SubContentContainer2'>
				<div className='MetadataContainer2'>
					<img src={Heart} className='Likes2'/>
					<div className='Date2'>
						Lorem Ipsum has been
					</div>
				</div>
				<img src={Info} className='InfoIcon2'/>
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

		<Separator text={'\t\tReplace Header\'s placeholders with actual ui\n'}/>

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

		<Separator/>

		<div className='Header1'>
			<div className='AccountInfoContainer1'>
				<div className='Icon1'></div>
				<div className='InfoContainer1'>
					<div className='UserName1'>
						Lorem Ipsum
					</div>
					<div className='AtUserName1'>
						@Lorem Ipsum
					</div>
				</div>
			</div>
			<div className='Logo1'></div>
		</div>

		<Separator/>

		<div className='Header2'>
			<div className='AccountInfoContainer2'>
				<img src={Logo} className='Icon2'/>
				<div className='InfoContainer2'>
					<div className='UserName2'>
						Lorem Ipsum
					</div>
					<div className='AtUserName2'>
						@Lorem Ipsum
					</div>
				</div>
			</div>
			<img src={Twitter} className='Logo2' />
		</div>

		<Separator/>

		<div className='Header3'>
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

		<Separator text={'Commit Header'}/>

		<div className='Card'>
			<div className='Header3'>
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
			<div className='SubHeaderContainer2'>
				<div className='Text2'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry'sLorem Ipsum has been the industry's
				</div>
				<div className='Link2'>
					Lorem Ipsum has been the industry'sLorem Ipsum has been the industry's
				</div>
			</div>
			<div className='ContentContainer'>
				<div className='Image'></div>
				<div className='ContentInfoContainer'>
					<div className='ContentHeader'></div>
					<div className='ContentText'></div>
					<div className='ContentLink'></div>
				</div>
			</div>
			<div className='SubContentContainer2'>
				<div className='MetadataContainer2'>
					<img src={Heart} className='Likes2'/>
					<div className='Date2'>
						Lorem Ipsum has been
					</div>
				</div>
				<img src={Info} className='InfoIcon2'/>
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

		<Separator text={'\t\tReplace Content\'s placeholders with actual ui\n'}/>

		<div className='ContentContainer'>
			<div className='Image'></div>
			<div className='ContentInfoContainer'>
				<div className='ContentHeader'></div>
				<div className='ContentText'></div>
				<div className='ContentLink'></div>
			</div>
		</div>

		<Separator/>

		<div className='ContentContainer1'>
			<div className='Image1'></div>
			<div className='ContentInfoContainer1'>
				<div className='ContentHeader1'>
					It is a long established fact that a reader will be distracted by the
				</div>
				<div className='ContentText1'>
					It is a long established fact that a reader will be distracted by the
				</div>
				<div className='ContentLink1'>
					It is a long established fact that a reader will be distracted by the
				</div>
			</div>
		</div>

		<Separator/>

		<div className='ContentContainer2'>
			<img src={BG} className='Image2'></img>
			<div className='ContentInfoContainer2'>
				<div className='ContentHeader2'>
					It is a long established fact that a reader will be distracted by the
				</div>
				<div className='ContentText2'>
					It is a long established fact that a reader will be distracted by the
				</div>
				<div className='ContentLink2'>
					It is a long established fact that a reader will be distracted by the
				</div>
			</div>
		</div>

		<Separator/>

		<div className='ContentContainer3'>
			<img src={BG} className='Image3'></img>
			<div className='ContentInfoContainer3'>
				<div className='ContentHeader3'>
					It is a long established fact that a reader will be distracted by the
				</div>
				<div className='ContentText3'>
					It is a long established fact that a reader will be distracted by the
				</div>
				<div className='ContentLink3'>
					It is a long established fact that a reader will be distracted by the
				</div>
			</div>
		</div>

		<Separator text={'Commit Content'}/>

		<div className='Card'>
			<div className='Header3'>
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
			<div className='SubHeaderContainer2'>
				<div className='Text2'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry'sLorem Ipsum has been the industry's
				</div>
				<div className='Link2'>
					Lorem Ipsum has been the industry'sLorem Ipsum has been the industry's
				</div>
			</div>
			<div className='ContentContainer3'>
				<img src={BG} className='Image3'></img>
				<div className='ContentInfoContainer3'>
					<div className='ContentHeader3'>
						It is a long established fact that a reader will be distracted by the
					</div>
					<div className='ContentText3'>
						It is a long established fact that a reader will be distracted by the
					</div>
					<div className='ContentLink3'>
						It is a long established fact that a reader will be distracted by the
					</div>
				</div>
			</div>
			<div className='SubContentContainer2'>
				<div className='MetadataContainer2'>
					<img src={Heart} className='Likes2'/>
					<div className='Date2'>
						Lorem Ipsum has been
					</div>
				</div>
				<img src={Info} className='InfoIcon2'/>
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

		<Separator text={'Position elements in card correctly'}/>

		<div className='Card'>
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
				<img src={BG} className='Image3'></img>
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
			<div className='Footer2 MarginBottom'>
				<div className='ExtraInfoContainer'>
					<img src={Comment} className='ExtraInfoIcon' />
					<div className='ExtraInfoTxt'>
						Lorem Ipsum is simply dummy text of the
					</div>
				</div>
				<img src={Direction} className='NextBTN2' />
			</div>
		</div>

		<Separator text={'Commit Elements positional changes'}/>
		<Separator text={'Styling the card\n'}/>

		<div className='Card FinalStyle'>
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
				<img src={BG} className='Image3'></img>
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

		<Separator text={'Commit Card'} />

	</>;







