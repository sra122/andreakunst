import React from "react";

const images = [
    {href : "./Impressionen/1.jpeg", caption: ""},
    {href : "./Impressionen/2.jpeg", caption: ""},
    {href : "./Impressionen/3.jpeg", caption: ""},
    {href : "./Impressionen/4.jpeg", caption: ""},
    {href : "./Impressionen/5.jpeg", caption: ""},
    {href : "./Impressionen/6.jpeg", caption: ""},
    {href : "./Impressionen/7.jpeg", caption: ""},
    {href : "./Impressionen/8.jpeg", caption: ""},
    {href : "./Impressionen/9.jpeg", caption: ""},
    {href : "./Impressionen/11.jpeg", caption: ""},
    {href : "./Impressionen/12.jpeg", caption: ""},
    {href : "./Impressionen/13.jpeg", caption: ""},
];

function Impressions() {
    return(
        <div class="uk-container">
        <div class="uk-child-width-1-5@m uk-grid" uk-lightbox="animation: slide">
            {
                // eslint-disable-next-line array-callback-return
                images.map((image) => (
                    <div class="uk-card uk-card-body" style={{display: "flex", alignItems: "center" }}>
                        <div class="uk-display-block">
                            <a class="uk-inline uk-margin-auto uk-cover-container" href={image.href} data-caption={image.caption}>
                                <img class="uk-visible@m" src={image.href} width="1500" height="1200" alt="" uk-cover/>
                                <img class="uk-hidden@m" src={image.href} width="500" height="500" alt="" uk-cover/>
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
        <br></br><br></br>
    </div>
    );
}

export default Impressions;