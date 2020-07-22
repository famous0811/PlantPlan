import React from 'react';
import { Helmet } from "react-helmet";
import MainWrap from "../components/Main/index"

function Home() {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon2x.png" />
                <meta name="description" content="UniFarm" />
                <link rel="apple-touch-icon" href="/favicon2x.png" />
                <title>{"PlantPlan"}</title>
            </Helmet>
            <MainWrap></MainWrap>
        </>
    );
}

export default Home;