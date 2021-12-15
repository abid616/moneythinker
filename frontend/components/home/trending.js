import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Trending = ({}) => {
	return (
		<div className="sm:p-0 md:px-24 md:mt-16 mt-trending">
			<div className="sm:flex">
				{/* //////////////carousel//////////////// */}
				<div className="sm:w-6/12 md:w-8/12 md:px-10 z-10">
					<p className="font-sans text-xl md:mt-12 px-2">Trending</p>
					<div className="flex justify-around mt-8 mx-auto w-full">
						<Carousel 
							showThumbs={false}
						>
            	<div className="p-4 bg-purple-500 rounded-lg">
            		<div>
									<img src='/background.png' className="rounded-lg trending-image"/>
            		</div>
								<p className="font-sans text-white text-xl md:mt-12 sm:mt-6">Barclays is asking more bankers to return to its New York office in October</p>
								<div className="w-full flex justify-between mt-8">
									<p className="text-lg">by adobe.com</p>
									<p className="text-lg">1h ago</p>
								</div>
							</div>
							<div className="p-4 bg-purple-500 rounded-lg">
            		<div>
									<img src='/background.png' className="rounded-lg trending-image"/>
            		</div>
								<p className="font-sans text-white text-xl md:mt-12 sm:mt-6">Barclays is asking more bankers to return to its New York office in October</p>
								<div className="w-full flex justify-between mt-8">
									<p className="text-lg">by adobe.com</p>
									<p className="text-lg">1h ago</p>
								</div>
							</div>
							<div className="p-4 bg-purple-500 rounded-lg">
            		<div>
									<img src='/background.png' className="rounded-lg trending-image"/>
            		</div>
								<p className="font-sans text-white text-xl md:mt-12 sm:mt-6">Barclays is asking more bankers to return to its New York office in October</p>
								<div className="w-full flex justify-between mt-8">
									<p className="text-lg">by adobe.com</p>
									<p className="text-lg">1h ago</p>
								</div>
							</div>
          	</Carousel>
					</div>
				</div>




				{/* //////////////////////////////////// */}
				<div className="sm:w-6/12 md:w-4/12 z-10 pl-4">
					<p className="font-sans text-xl md:mt-12">Conspiracy</p>
					<div className="bg-white sm:p-4 mt-8">
						<div>
							<div className="flex">
								<div className="w-8/12 flex flex-col">
									<p className="text-sm text-blue-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
									<p className="text-sm text-blue-400 mt-4">1h ago</p>
								</div>
								<div className="w-4/12 flex justify-around">
									<div className="h-20 w-20 bg-blue-400">
									</div>
								</div>
							</div>
						</div>
						<div className="mt-8">
							<div className="flex">
								<div className="w-8/12 flex flex-col">
									<p className="text-sm text-blue-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
									<p className="text-sm text-blue-400 mt-4">1h ago</p>
								</div>
								<div className="w-4/12 flex justify-around">
									<div className="h-20 w-20 bg-blue-400">
									</div>
								</div>
							</div>
						</div>
						<div className="mt-8">
							<div className="flex">
								<div className="w-8/12 flex flex-col">
									<p className="text-sm text-blue-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
									<p className="text-sm text-blue-400 mt-4">1h ago</p>
								</div>
								<div className="w-4/12 flex justify-around">
									<div className="h-20 w-20 bg-blue-400">
									</div>
								</div>
							</div>
						</div>
						<div className="mt-8 hidden md:block">
							<div className="flex">
								<div className="w-8/12 flex flex-col">
									<p className="text-sm text-blue-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
									<p className="text-sm text-blue-400 mt-4">1h ago</p>
								</div>
								<div className="w-4/12 flex justify-around">
									<div className="h-20 w-20 bg-blue-400">
									</div>
								</div>
							</div>
						</div>
						<div className="mt-8 hidden md:block">
							<div className="flex">
								<div className="w-8/12 flex flex-col">
									<p className="text-sm text-blue-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
									<p className="text-sm text-blue-400 mt-4">1h ago</p>
								</div>
								<div className="w-4/12 flex justify-around">
									<div className="h-20 w-20 bg-blue-400">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Trending