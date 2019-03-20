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

class InstaGallery extends React.Component {
    state = {
        gallery: [],
    }

    async componentDidMount() {
        const galleryPromise = await fetch(
            `https://api.instagram.com/v1/users/self/media/recent/?access_token=2286603943.7a4623b.d9d4b1b436734bc293c21df23ef4f8d2`
        )
        const { data } = await galleryPromise.json()
        let gallery = data
            .filter(
                image =>
                    image.images.standard_resolution.width === 640 &&
                    image.images.standard_resolution.height === 640
            )
            .slice(0, 8)
            .map(image => ({
                src: image.images.standard_resolution.url,
                url: image.link,
            }))
        this.setState({ gallery })
    }

    render() {
        return (
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
                    {this.state.gallery.map(image => (
                        <a href={image.url} key={image.url} target="_blank">
                            <img
                                src={image.src}
                                alt="instagram gallery image"
                            />
                        </a>
                    ))}
                </StyledGallery>
            </div>
        )
    }
}

export default InstaGallery
