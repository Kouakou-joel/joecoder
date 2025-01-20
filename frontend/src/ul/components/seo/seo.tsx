import Head from "next/head";

interface props {
title?: string;
description?: string;
}

export const Seo = ({title, description}: props) => {
    return (
        <Head>
            <title>
                {title? `${title} ` : 'joecoder'}
            </title>
            <meta name="joecoder"
             content={description ? description : 'description' } />
            <link rel="icon" href="favicon.ico" />
        </Head>
    );


};