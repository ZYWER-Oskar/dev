import React from "react";
import { Helmet } from "react-helmet-async";
import { AboutMeData } from "./types";

const MetaTags: React.FC<{ info: AboutMeData }> = ({ info }) => {
    return (
        <Helmet>
            <title>{info.name}'s Portfolio</title>
            <meta name="description" content={info.introduction} />
            <meta property="og:image" content={`${process.env.PUBLIC_URL}/faviconNew.ico`} />
        </Helmet>
    );
};

export default MetaTags;
