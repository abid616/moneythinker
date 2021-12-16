import React,{useState} from 'react'
import Images from "../image"
import Link from "next/link"
import {smartTrim} from "../../lib/blog"
import Moment from "react-moment";

export const HeroCard = ({article}) => {
    console.log(article)
    return (
        <Link as={`/article/${article.slug}`} href="/article/[id]">
            <a>
                <div className="object-cover card border-2 md:p-4 md:rounded h-full">
                    {/* Image article.image.width*/}
                    <div>
                        {article.image ? <Images image={article.image} width={400} height={350} /> : null}
                    </div>

                    {/* discription */}
                    <div className="card-body m-auto p-2 w-full">
                        <h2 className="text-md card-title h-14 overflow-hidden">{article.title}</h2>
                        <p className="text-sm h-10 sm:h-16 overflow-hidden">{article.description}</p>
                        <div className="flex justify-between mt-2 items-center">
                            <h2 className="text-lg font-semibold">By {}</h2>
                            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}
