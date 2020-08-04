import React from 'react';
import { Helmet } from "react-helmet";
import Postwrap from "../../components/Post/index"
function Post() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon2x.png" />
                <meta name="description" content="UniFarm" />
                <link rel="apple-touch-icon" href="/favicon2x.png" />
                <title>{"게시판"}</title>
            </Helmet>
            <Postwrap expansion={true}></Postwrap>
        </>
    );
}

export default Post;