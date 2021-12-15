import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import Slider from './Slider';
import {TrendingItem} from './TrendingItem';

const Trending = ({articles}) => {
	const [trendingarticles, setThowarticles] = useState([])

  useEffect(() => {
  	let temp = articles.filter(item => item.category.name === 'Consparacy')
  	setThowarticles(temp)
  }, [articles])

	return (
		<div className="sm:p-0 md:px-24 md:mt-16 mt-trending">
			<div className="sm:flex">
				{/* //////////////carousel//////////////// */}
				<div className="sm:w-6/12 md:w-8/12 md:px-10 z-10">
					<p className="font-sans text-xl md:mt-12 px-2">Trending</p>
					<div className="flex justify-around mt-8 mx-auto w-full">
						<Slider articles={articles} />
					</div>
				</div>

				{/* //////////////////////////////////// */}
				<div className="sm:w-6/12 md:w-4/12 z-10 pl-4">
					<p className="font-sans text-xl md:mt-12">Conspiracy</p>
					<div className="bg-white sm:p-4">
						{
							trendingarticles.map((item, i) => (
								<TrendingItem article={item} key={i} num={i} />
							))
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Trending