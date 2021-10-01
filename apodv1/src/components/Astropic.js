import React, {useState, useEffect} from 'react';
import owl from './owl.svg'; 
const Url = 'https://api.nasa.gov/planetary/apod?api_key=TDRCcyaEeGJrMXEpgh8hgNrJcmF2DkArlF16EBRN';

const AstroPic = () => {
	const [pic, setPic] = useState({title:'kiki'});
	
	const getPic = async() => {
		const response = await fetch(Url)
		
		const pic = await response.json();
		setPic(pic);
	};
	
	useEffect( () => {
		getPic()
	},[]);
	
	const {title,date,hdurl,explanation,url} = pic; 
	return(
	<>
		<main className='astroPic'>
			<img className='owl' src={owl} alt='owl' />
			<h2>{title}</h2>
			<h5 className='date'>{date}</h5>
			<div className='picInfo'>
				<a href={hdurl} target='_blank'><img src={hdurl} alt={title}/></a>
				<p>{explanation}</p>
			</div>
		</main>
	</>
	);
}
export default AstroPic;