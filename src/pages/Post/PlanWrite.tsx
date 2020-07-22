import React from 'react';
import { Helmet } from "react-helmet";
import PlanWrap from "../../components/Post/Plan/PlanWrite"

function PlanWrite() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon2x.png" />
                <meta name="description" content="UniFarm" />
                <link rel="apple-touch-icon" href="/favicon2x.png" />
                <title>{"planWrite"}</title>
            </Helmet>
            <PlanWrap></PlanWrap>
        </>
    );
}

export default PlanWrite;