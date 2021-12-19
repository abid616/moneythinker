import React, { useEffect, useState } from 'react'
import { Form } from './form'

const Hero = ({}) => {
	return (        
		<div className="sm:px-0 md:px-24 sm:absolute md:relative">
			<div className="md:flex">
				<div className="md:w-6/12 sm:w-12/12 absolute md:relative px-2">
					<p className="font-sans text-blue-500 sm:text-4xl text-2xl font-semibold">Business Utility Comparison</p>
					<p className="font-sans text-gray-900 sm:text-2xl text-1xl font-semibold sm:pt-12 pt-6">Compare, switch & save on your energy bills</p>
					<p className="font-sans text-gray-500 sm:text-2xl text-1xl">Switch to a cheaper energy deal today</p>
					<p className="font-sans text-gray-500 sm:text-lg text-xs sm:pt-6 pt-2">We guarantee to beat your business energy suppliers renewal quote</p>
					<div className="grid sm:grid-cols-2 gap-4 sm:pt-12 pt-6">
						<div>
							<p className="font-sans text-pink-600 sm:text-lg text-sm">Compare business energy prices</p>
							<p className="font-sans text-pink-600 text-sm sm:pt-4 pt-2">See how much you could save in 60 seconds!</p>

							{/* form */}
							<Form/>
							{/*  */}

						</div>
						<div>
						</div>
					</div>
				</div>
				<div className="md:w-6/12 sm:w-12/12 pt-64 md:pt-0">
					<img src='/background.png' />
				</div>
			</div>
		</div>
	)
}

export default Hero