import React from 'react'
import styled from 'styled-components'

const StyledGallery = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media all and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
    @media all and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

const InstaGallery = ({ gallery }) => (
    <div className="pt-5 insta-gallery">
        <div className="pb-5 text-center">
            <a
                href="https://www.instagram.com/king_rayhan/"
                target="_blank"
                className="insta-url"
            >
                <img src="/static/images/insta-logo.png" />
                &nbsp; king_rayhan
            </a>
        </div>
        <StyledGallery>
            {gallery.map(image => (
                <a href={image.url} key={image.url} target="_blank">
                    <img src={image.src} alt="instagram gallery image" />
                </a>
            ))}
        </StyledGallery>
    </div>
)

export default InstaGallery
