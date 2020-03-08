import React from 'react';
import './Card.css';
import {Content, Footer, Header, SubContent, SubHeader} from './components';

export const Card = () =>
	<div className='CardContainer'>
		<div className='Card FinalStyle CardFixes'>
			<Header/>
			<SubHeader/>
			<Content/>
			<SubContent/>
		</div>
		<Footer/>
	</div>;








