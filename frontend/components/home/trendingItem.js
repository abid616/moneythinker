import React,{useState} from 'react'
import Images from "../image"
import Link from "next/link"
import Moment from "react-moment";

export const TrendingItem = ({article, num}) => {
    return (
        <div className={num > 2 ? "mt-8 hidden md:block" : "mt-8"}>
            <div className="flex">
                <div className="w-8/12 flex flex-col">
                    <p className="text-sm text-left sm:text-lg card-title h-5 sm:h-8 whitespace-nowrap whitespace-normal text-ellipsis overflow-hidden text-center sm:text-left mb-1 sm:mb-2 cursor-pointer">{article.description}</p>
                    <p className="text-sm text-blue-400 mt-4"><Moment format="MMM Do YYYY">{article.published_at}</Moment></p>
                </div>
                <div className="w-4/12 flex justify-around items-center">
                    {article.image ? <Images image={article.image} width={80} height={80} /> : <div className="h-20 w-20 bg-blue-400"></div>}
                </div>
            </div>
        </div>
    )
}
