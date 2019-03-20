import React from 'react'
import Link from 'next/link'
function VMenu() {
    return (
        <div className="v-menu d-flex flex-column justify-content-center align-items-center">
            <Link href="/">
                <a>
                    <div className="logo mb-5">
                        <span>R</span>
                    </div>
                </a>
            </Link>
            <nav>
                <a
                    href="https://www.youtube.com/channel/UCxFDOHULIH3z-wDsR77-_0Q"
                    target="_blank"
                >
                    Youtube
                </a>

                <span className="line" />

                <a href="https://github.com/kingRayhan" target="_blank">
                    Github
                </a>

                <span className="line" />

                <a href="https://www.facebook.com/kingrayhan2" target="_blank">
                    Facebook
                </a>

                <span className="line" />
                <Link href="/BlogList" as="/blog">
                    <a>My Blog</a>
                </Link>
            </nav>
        </div>
    )
}

export default VMenu
