import React from 'react';
import { Helmet } from "react-helmet";

function PostRead() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon2x.png" />
                <meta name="description" content="UniFarm" />
                <link rel="apple-touch-icon" href="/favicon2x.png" />
                <title>{"PostRead"}</title>
            </Helmet>
        </>
    );
}

export default PostRead;