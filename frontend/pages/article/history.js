import React,{useState} from 'react'
import Link from "next/link"
import Images from "../../components/image";
import Moment from "react-moment";

const History = ({ article }) => {
console.log(article)
    return(
    	<div className="mt-8 inline-flex p-4 items-center w-auto border-2">
    		<div className="flex flex-col">
    			<p className="mr-4 text-2xl font-semibold">{article.title}</p>
    			<p className="mr-4 text-1xl font-semibold text-gray-500 mt-4">Written By {article.author.name}<span className="mx-2 text-sm font-semibold text-gray-500"><Moment format="MMM Do YYYY">{article.published_at}</Moment></span></p>
    			<div className="flex mt-4">
    				{
    					article.tags.map((item, i) => (
    						<div className="mr-4 inline-flex items-center w-auto border-2 rounded-full" key={i}>
				              	<p className="mx-4 px-2">Tags</p>
				            </div>
    					))
    				}
    			</div>
    		</div>
        <Images image={article.image} width={200} height={200}/>
    	</div>
    )
};

export default History;