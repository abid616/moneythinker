import React,{useState} from 'react'
import Images from "../image"
import Link from "next/link"
import Moment from "react-moment";

export const TrendingItem = ({article, num}) => {
    let published_at = new Date(article.published_at);
    let current = new Date();
    let hour = Math.ceil((current - published_at) / 3600000);
    let day = Math.ceil(hour / 24);
    let month = Math.ceil(day / 30);
    let year = Math.ceil(day / 365);
    let display = 0;
    return (
        <div className={num > 2 ? "mt-8 hidden md:block" : "mt-8"}>
            <div className="flex">
                <div className="w-8/12 flex flex-col">
                    <p className="text-sm text-left sm:text-lg card-title h-5 sm:h-8 whitespace-nowrap whitespace-normal text-ellipsis overflow-hidden text-center sm:text-left mb-1 sm:mb-2 cursor-pointer">{article.description}</p>
                    
                    <span className="text-xm sm:text-sm sm:mt-0 mt-1 
                            text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 
                            ">{
                            hour < 24 ? `${hour} h ago` :
                                day < 30 ? `${day} day ago` :
                                    month < 12 ? `${month} month ago` :
                                        `${year} year ago`
                        }</span>
                </div>
                <div className="w-4/12 flex justify-around items-center">
                    {article.image ? <Images image={article.image} width={80} height={80} /> : <div className="h-20 w-20 bg-blue-400"></div>}
                </div>
            </div>
        </div>
    )
}
