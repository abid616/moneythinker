import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {SlideItem} from './SlideItem';

const Slider = ({articles}) => {
	return (
		<Carousel 
			showThumbs={false}
		>
			{
				articles.slice(0, 4).map((item, i) => (
					<SlideItem article={item} key={i} />
				))
			}
  	</Carousel>
	)
}

export default Slider