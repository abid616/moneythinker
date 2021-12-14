import React, { useEffect, useState } from 'react'

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
							<div className="w-full max-w-xs">
							  <form className="sm:pt-6 pt-2 sm:pb-8 pb-0 sm:mb-4 mb-2">
							    <div className="sm:mb-4 mb-2">
							      <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
							    </div>
							    <div className="sm:mb-6 mb-2">
							      <input className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="PhoneNumber" />
							    </div>
							    <div className="flex items-center justify-between">
							      <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
							        Submit
							      </button>
							    </div>
							  </form>
							</div>
						</div>
						<div>
						</div>
					</div>
					<p className="font-sans text-sm">success message like we will get in touch with you as soon as possible</p>
				</div>
				<div className="md:w-6/12 sm:w-12/12 pt-36 sm:pt-60 md:pt-0">
					<img src='/background.png' />
				</div>
			</div>
		</div>
	)
}

export default Hero