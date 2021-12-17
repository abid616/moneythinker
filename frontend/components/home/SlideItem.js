import React,{useState} from 'react'
import Images from "../image"
import Link from "next/link"
import Moment from "react-moment";

export const SlideItem = ({article, num}) => {
    return (
        <div className="p-4 bg-purple-500 rounded-lg">
            <div>
                <Images image={article.image} width={800} height={250} className="rounded-lg trending-image"/>
            </div>
            <p className="font-sans text-white text-xl md:mt-12 sm:mt-6  sm:h-8 overflow-hidden">{article.description}</p>
            <div className="w-full flex justify-between mt-8">
                <p className="text-lg">By {article.author.name}</p>
                <p className="text-lg"><Moment format="MMM Do YYYY">{article.published_at}</Moment></p>
            </div>
        </div>
    )
}
