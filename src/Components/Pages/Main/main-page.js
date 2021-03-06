import React from "react";

import './main-content.css';

import Slider from "./Slider/slider";
import RatingBlocks from "./Rating/rating-blocks";
import NewsCards from "./News/news-cards";

const MainPage = () => {
    return (
        <div className="width-control">
            <div className="content-wrapper">
                <div className="main-content">
                    <Slider/>
                    <NewsCards/>
                </div>
                <RatingBlocks/>
            </div>
        </div>

    )
};

export default MainPage;

