import Head from "next/head";

interface props {
title: string;
description: string;
}

export const Seo = ({title, description}:props) => {
    return (
        <Head>
            <title>JOE CODERS</title>
            <meta name="joecoder" content="description..." />
            <link rel="icon" href="favicon.ico" />
        </Head>
    );


};