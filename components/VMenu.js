import React from 'react'
import Link from 'next/link'
function VMenu() {
    return (
        <div class="v-menu d-flex flex-column justify-content-center align-items-center">
            <Link href="/">
                <a>
                    <div class="logo mb-5">
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

                <span class="line" />

                <a href="https://github.com/kingRayhan" target="_blank">
                    Github
                </a>

                <span class="line" />

                <a href="https://www.facebook.com/kingrayhan2" target="_blank">
                    Facebook
                </a>

                <span class="line" />
                <a href="https://medium.com/@kingrayhan" target="_blank">
                    My Blog
                </a>
            </nav>
        </div>
    )
}

export default VMenu
