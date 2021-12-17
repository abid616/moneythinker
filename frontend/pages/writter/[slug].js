import React from 'react'
import Posts from "../../components/articles/posts"
import { fetchAPI } from "../../lib/api"
import Container from '../../components/container'
import Seo from "../../components/seo"

const Writers = ({ writer, writers }) => {
    const seo = {
        metaTitle: writer.name,
        metaDescription: `All ${writer.name} posts`,
    };

    return (
        <Container writers={writers}>
            <Seo seo={seo} />
            <div className="">
                <div className="">
                    <h1>{writer.name}</h1>
                    <Posts articles={writer.articles} />
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
                slug: writer.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const writer = (await fetchAPI(`/writers?slug=${params.slug}`))[0]
    const writers = await fetchAPI("/writers")

    return {
        props: { writer, writers },
        revalidate: 1,
    }
}

export default Writers;