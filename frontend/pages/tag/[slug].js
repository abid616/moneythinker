import React from 'react'
import Posts from "../../components/category/posts"
import { fetchAPI } from "../../lib/api"
import Container from '../../components/container'
import Seo from "../../components/seo"

const Tag = ({ tag, tags, articles }) => {
    const seo = {
        metaTitle: tag.name,
        metaDescription: `All ${tag.name} posts`,
    };

    let showlist = articles.filter(ar => {
        let flag = ar.tags.filter(t => t.id === tag.id);
        if(flag.length > 0) return ar;
    })

    return (
        <Container categories={tags}>
            <Seo seo={seo} />
            <div className="">
                <div className="">
                    <h1>{tag.name}</h1>
                    <Posts articles={showlist} />
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
    const articles = await fetchAPI("/articles")

    return {
        props: { tag, tags, articles },
        revalidate: 1,
    }
}

export default Tag;