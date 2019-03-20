import React from 'react'
import VMenu from '../components/VMenu'
import Head from '../components/head'
import ArticleCard from '../components/ArticleCard'

import { get } from 'axios'

const blog = ({ posts }) => {
    return (
        <div className="home-page py-5">
            <Head title="My Blog | Rayhan" />
            <VMenu />
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        {posts.map(post => (
                            <ArticleCard {...post} key={post.meta.slug} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

blog.getInitialProps = async () => {
    const { data: posts } = await get(`http://localhost:4545`)

    return { posts }
}

export default blog
