import React from 'react';
import style from './banner.module.css';
import banner from './banner.jpg';

const Banner = () => {
	return (
		<div className={style.banner}><img src={banner}/></div>
	)
}

export default Banner;
