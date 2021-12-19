import React, { useEffect, useState } from 'react'
import {CategoryCard} from './card'
import { v1 as uuidv1 } from 'uuid';

export const Posts = ({ title, articles}) => {
    const [latestPosts, setLatestPosts] = useState([])
    useEffect(() => {
        setLatestPosts(articles)
    }, [articles])

    return (        
        <div className='mt-8'>
            <div>
                <div className="card-title sm:p-0 px-2 capitalize">{title}</div>
                <div className="sm:px-10 px-2">
                    {latestPosts.map((article) => {
                        return (
                            <CategoryCard article={article} key={`article__${article.slug}`} />
                        );
                    })}
                </div>
            </div>  
        </div>
    )
}

export default Posts