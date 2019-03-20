import React from 'react'
import VMenu from '../components/VMenu'
import Head from '../components/head'
import { API_URL } from '../variables'
import { get } from 'axios'

const SinglePost = ({
    post: {
        body,
        meta: { title, description, date, slug },
    },
}) => {
    return (
        <div className="home-page py-5">
            <Head title="I'm Rayhan | Fullstack web developer" />
            <VMenu />
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h1>{title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: body }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

SinglePost.getInitialProps = async ({ query: { slug } }) => {
    const { data: post } = await get(`http://localhost:4545/${slug}`)
    return { post }
}
export default SinglePost
