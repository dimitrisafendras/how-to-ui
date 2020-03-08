import React from 'react';
import {Content, Footer, Header, SubContent, SubHeader} from './components';
import './Card.css';

export const Card = () =>
	<div className='Card'>
		<div className='CardInnerContainer'>
			<Header/>
			<SubHeader/>
			<Content/>
			<SubContent/>
		</div>
		<Footer/>
	</div>;








