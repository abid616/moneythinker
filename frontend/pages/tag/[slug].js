import React from 'react'
import Posts from "../../components/articles/posts"
import { fetchAPI } from "../../lib/api"
import Container from '../../components/container'
import Seo from "../../components/seo"

const Tag = ({ tag, tags }) => {
    const seo = {
        metaTitle: category.name,
        metaDescription: `All ${tag.name} posts`,
    };

    return (
        <Container categories={tags}>
            <Seo seo={seo} />
            <div className="">
                <div className="">
                    <h1>{tag.name}</h1>
                    <Posts articles={tag.articles} />
                </div>
            </div>
        </Container>
    );
};

export async function getStaticPaths() {
    const tags = await fetchAPI("/tags");

    return {
        paths: tags.map((tag) => ({
            params: {
                slug: tag.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const tag = (await fetchAPI(`/tags?slug=${params.slug}`))[0]
    const tags = await fetchAPI("/tags")

    return {
        props: { tag, tags },
        revalidate: 1,
    }
}

export default Tag;