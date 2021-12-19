// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import React from 'react'
import Posts from "../../components/articles/posts"
import { fetchAPI } from "../../lib/api"
import Container from '../../components/container'
import Seo from "../../components/seo"

const Writers = ({ writer, writers, categories, articles }) => {
    const seo = {
        metaTitle: writer.name,
        metaDescription: `All ${writer.name} posts`,
    };

    return (
        <Container writers={writers} categories={categories}>
            <Seo seo={seo} />
            <div className="">
                <div className="">
                    <h1>{writer.name}</h1>
                    <Posts articles={articles.filter(ar => ar.author.id === writer.id)} />
                </div>
            </div>
        </Container>
    );
};

// export default function helloAPI(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }