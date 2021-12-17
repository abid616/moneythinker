import React,{useState} from 'react'
import Images from "../image"
import Link from "next/link"
import Moment from "react-moment";

export const SlideItem = ({article, num}) => {
    let published_at = new Date(article.published_at);
    let current = new Date();
    let hour = Math.ceil((current - published_at) / 3600000);
    let day = Math.ceil(hour / 24);
    let month = Math.ceil(day / 30);
    let year = Math.ceil(day / 365);
    let display = 0;
    return (
        <div className="p-4 bg-purple-500 rounded-lg">
            <div>
                <Images image={article.image} width={800} height={250} className="rounded-lg trending-image"/>
            </div>
            <p className="font-sans text-white text-xl md:mt-2 sm:mt-1  sm:h-8 overflow-hidden">{article.description}</p>

            <div className="w-full flex justify-between mt-2">
                <h2 className="text-xm sm:text-sm font-normal hover:underline cursor-pointer ">By {article.author.name}</h2>

                <p className="text-xm sm:text-sm sm:mt-0 mt-1">{
                    hour < 24 ? `${hour} h ago` :
                        day < 30 ? `${day} day ago` :
                            month < 12 ? `${month} month ago` :
                                `${year} year ago`
                }</p>
            </div>
        </div>
    )
}
