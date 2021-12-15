import React from 'react'
import { BsPen } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Moment from "react-moment";
import Images from "../image"


export function Slide({article}) {
    return (
        <div>
            <div className="sm:w-6/12 md:w-8/12 md:px-10 z-10">
                <p className="font-sans text-xl md:mt-12 px-2">Trending</p>
                <div className="flex justify-around mt-8 mx-auto w-full">
                    <Carousel showThumbs={false}>
                        <div className="p-4 bg-purple-500 rounded-lg">
                            <div>
                                <Images image={article.image} className="rounded-lg trending-image" />
                            </div>
                            <p className="font-sans text-white text-xl md:mt-12 sm:mt-6">{article.title}</p>
                            <div className="w-full flex justify-between mt-8">
                                <p className="text-lg">
                                    <BsPen />
                                    {article.author.name}
                                </p>
                                {/* How can I put 1h ago published from the api*/}
                                <p className="text-lg">1h ago</p>
                                <p><Moment format="MMM Do YYYY, h:mm a">{article.published_at}</Moment></p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
