import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const StyledArticleCard = styled.article`
    margin-bottom: 45px;
    .thumbnail {
        border-radius: 5px;
        overflow: hidden;
    }
    .content {
        padding-top: 25px;
        padding-left: 85px;
        padding-right: 85px;
    }
    .title {
        font-family: 'Playfair Display', serif;
    }
    .excerpt {
        font-size: 16px;
        line-height: 25px;
    }
    .tags {
        margin-top: 15px;
        span {
            margin-right: 15px;
        }
    }
`

const ArticleCard = ({
    excerpt,
    meta: {
        date: { date },
        slug,
        tags,
        title,
    },
}) => {
    return (
        <StyledArticleCard>
            <div className="thumbnail">
                <img src="http://placehold.it/1065x565" alt="post image" />
            </div>
            <div className="content">
                <div className="meta">
                    <h2 className="title">
                        <Link as={`/${slug}`} href={`/SinglePost?slug=${slug}`}>
                            <a>{title}</a>
                        </Link>
                    </h2>
                    <p className="date">{date}</p>
                </div>
                <div className="excerpt">{excerpt}</div>
                <div className="tags">
                    {tags.map(tag => (
                        <span key={tag}>#{tag}</span>
                    ))}
                </div>
            </div>
        </StyledArticleCard>
    )
}

export default ArticleCard
