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

export async function getStaticPaths() {
    const writers = await fetchAPI("/writers");
    return {
        paths: writers.map((writer) => ({
            params: {
                id: writer.id,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const writer = (await fetchAPI(`/writers?id=${params.id}`))[0]
    const writers = await fetchAPI("/writers")
    const categories = await fetchAPI("/categories")
    const articles = await fetchAPI("/articles")

    return {
        props: { writer, writers, categories, articles },
        revalidate: 1,
    }
}

export default Writers;