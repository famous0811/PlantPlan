import React from 'react';
import { Helmet } from "react-helmet";
import SignUpWrap from "../components/SiginUp/index";
function SignUp() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon2x.png" />
                <meta name="description" content="UniFarm" />
                <link rel="apple-touch-icon" href="/favicon2x.png" />
                <title>{"SignUp"}</title>
            </Helmet>
            <SignUpWrap></SignUpWrap>
        </>
    );
}

export default SignUp;