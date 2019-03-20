import VMenu from '../components/VMenu'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import InstaGallery from '../components/InstaGallery'
import Head from '../components/head'

import { get } from 'axios'

const Home = ({ gallery }) => (
    <div className="home-page">
        <Head title="I'm Rayhan | Fullstack web developer" />
        <VMenu />
        <Hero />
        <AboutMe />
        <InstaGallery gallery={gallery} />
    </div>
)
Home.getInitialProps = async () => {
    const {
        data: { data },
    } = await get(
        `https://api.instagram.com/v1/users/self/media/recent/?access_token=2286603943.7a4623b.d9d4b1b436734bc293c21df23ef4f8d2`
    )

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

    return { gallery }
}

export default Home
