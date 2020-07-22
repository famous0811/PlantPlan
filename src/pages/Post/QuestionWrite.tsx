import React from 'react';
import { Helmet } from "react-helmet";
import QuestionWrap from "../../components/Post/question/QuestionWrite"
function QuestionWrite() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon2x.png" />
                <meta name="description" content="UniFarm" />
                <link rel="apple-touch-icon" href="/favicon2x.png" />
                <title>{"QuestionWrite"}</title>
            </Helmet>
            <QuestionWrap></QuestionWrap>
        </>
    );
}

export default QuestionWrite;