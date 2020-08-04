import React from 'react';
import { Helmet } from "react-helmet";
import PostReadWrap from "../../components/Post/PostRead";

function PostRead() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon2x.png" />
                <meta name="description" content="UniFarm" />
                <link rel="apple-touch-icon" href="/favicon2x.png" />
                <title>{"질문"}</title>
            </Helmet>
            <PostReadWrap></PostReadWrap>
        </>
    );
}

export default PostRead;