import React, { useEffect, useState } from 'react'
import { HeroCard, CardPreview } from './cards'
import { Slide} from './slide'

export const Posts = ({ title, articles, categories}) => {
    const [latestPosts, setLatestPosts] = useState([])
    useEffect(() => {
        setLatestPosts(articles.slice(3, 8))
    }, [articles])

    return (        
        <div className='mt-8'>
            <div className="card-title sm:p-0 px-2">{title}</div>
            <div className="flex flex-wrap -m-4">
                {latestPosts.map((article) => {
                    return (
                        <Slide article={article} key={`article__${article.slug}`} />
                    );
                })}
            </div>
            <div className="">
                {categories.map(({ i, ...otherCategoryProps }) => (
                    <CardPreview key={i} {...otherCategoryProps} />
                ))}
            </div>
        </div>
    )
}

export default Posts