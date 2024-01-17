import Head from 'next/head'
import userInfo from "../../data/usersInfo.json"

export default function DomHead() {

    return (
        <Head>
            <title>Subhra Sekhar Mukherjee </title>
            {/* meta tags begins */}
            {/* Primary Meta Tags */}
            <meta name="title" content="Personal Portfolio." />
            <meta name="description" content="Generated using BaayMax." />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://github.com/qsekhar" />
            <meta property="og:title" content="Personal Portfolio" />
            <meta property="og:description" content="" />
            <meta property="og:image" content="https://github.com/qsekhar" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io/" />
            <meta property="twitter:title" content="Benrobo- Personal Portfolio" />
            <meta property="twitter:description" content="" />
            <meta property="twitter:image" content="https://github.com/qsekhar" />

            {/* meta tags end */}
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </Head>
    )
}

