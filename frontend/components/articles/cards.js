import React,{useState} from 'react'
import Images from "../image"
import Link from "next/link"
import {smartTrim} from "../../lib/blog"
import Moment from "react-moment";

export const HeroCard = ({article}) => {
    return (
        <Link as={`/article/${article.slug}`} href="/article/[id]">
            <a>
                <div className="object-cover card border-2 md:p-4 md:rounded h-full">
                    {/* Image article.image.width*/}
                    <div>
                        {article.image ? <Images image={article.image} width={400} height={200} /> : null}
                    </div>

                    {/* discription */}
                    <div className="card-body m-auto p-0 sm:p-2 w-full">
                        <h2 className="text-sm text-left sm:text-lg card-title h-5 sm:h-8 whitespace-nowrap whitespace-normal text-ellipsis overflow-hidden text-center sm:text-left mb-1 sm:mb-2">{article.title}</h2>
                        {/*<p className="text-sm h-0 sm:h-16 overflow-hidden">{article.description}</p>*/}
                        <div className="flex flex-col sm:flex-row justify-between mt-1 sm:mt-2 items-center">
                            <h2 className="text-sm md:text-lg font-semibold">By {article.author.name}</h2>
                            <p className="text-sm md:text-lg sm:mt-0 mt-1"><Moment format="MMM Do YYYY">{article.published_at}</Moment></p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}
