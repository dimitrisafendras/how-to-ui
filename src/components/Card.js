import React from 'react';
import './Card.css';
import {Separator} from './Separator';


export const Card = () =>
	<>
		<Separator text={'\t\tCreate the card\'s Skeleton\n'}/>

		<div className='Card'>
		</div>

		<Separator/>

		<div className='Card'>
			<div className='Header'></div>
		</div>

		<Separator/>

		<div className='Card'>
			<div className='Header'></div>
			<div className='SubHeaderContainer'></div>
		</div>

		<Separator/>

		<div className='Card'>
			<div className='Header'></div>
			<div className='SubHeaderContainer'></div>
			<div className='ContentContainer'></div>
		</div>

		<Separator/>

		<div className='Card'>
			<div className='Header'></div>
			<div className='SubHeaderContainer'></div>
			<div className='ContentContainer'></div>
			<div className='SubContentContainer'></div>
		</div>

		<Separator/>

		<div className='Card'>
			<div className='Header'></div>
			<div className='SubHeaderContainer'></div>
			<div className='ContentContainer'></div>
			<div className='SubContentContainer'></div>
			<div className='Footer'></div>
		</div>

		<Separator text={'\t\tCommit progress on card\'s skeleton\n'}/>
		<Separator text={'\t\tCreate the header\'s skeleton\n'} />

		<div className='Header'></div>

		<Separator/>

		<div className='Header'>
			<div className='AccountInfoContainer'></div>
			<div className='Logo'></div>
		</div>

		<Separator/>

		<div className='Header'>
			<div className='AccountInfoContainer'>
				<div className='Icon'></div>
				<div className='InfoContainer'></div>
			</div>
			<div className='Logo'></div>
		</div>

		<Separator/>

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

		<Separator text={'\t\tCommit progress on header\'s skeleton\n'}/>
		<Separator text={'\t\tCreate subheader\'s skeleton\n'}/>

		<div className='SubHeaderContainer'></div>

		<Separator/>

		<div className='SubHeaderContainer'>
			<div className='Text'></div>
			<div className='Link'></div>
		</div>

		<Separator text={'\t\tCommit progress on subheader\'s skeleton\n'}/>
		<Separator text={'\t\tCreate content\'s skeleton\n'}/>

		<div className='ContentContainer'></div>

		<Separator/>

		<div className='ContentContainer'>
			<div className='Image'></div>
			<div className='ContentInfoContainer'></div>
		</div>

		<Separator/>

		<div className='ContentContainer'>
			<div className='Image'></div>
			<div className='ContentInfoContainer'>
				<div className='ContentHeader'></div>
				<div className='ContentText'></div>
				<div className='ContentLink'></div>
			</div>
		</div>

		<Separator text={'\t\tCommit progress on content\'s skeleton\n'}/>
		<Separator text={'\t\tCreate subcontnet\'s skeleton\n'}/>

		<div className='SubContentContainer'></div>

		<Separator/>

		<div className='SubContentContainer'>
			<div className='MetadataContainer'></div>
			<div className='InfoIcon'></div>
		</div>

		<Separator/>

		<div className='SubContentContainer'>
			<div className='MetadataContainer'>
				<div className='Likes'></div>
				<div className='Date'></div>
			</div>
			<div className='InfoIcon'></div>
		</div>

		<Separator text={'\t\tCommit progress on subcontent\'s skeleton\n'}/>
		<Separator text={'\t\tCreate footer\'s skeleton\n'}/>

		<div className='Footer'></div>

		<Separator/>

		<div className='Footer'>
			<div className='ExtraInfo'></div>
			<div className='NextBTN'></div>
		</div>

		<Separator text={'\t\tCommit progress on footer\'s skeleton\n'}/>
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







