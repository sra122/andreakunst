import React from "react";

const images = [
    {href : "./Kinderkunst/1.jpeg", caption: ""},
    {href : "./Kinderkunst/2.jpeg", caption: ""},
    {href : "./Kinderkunst/3.jpeg", caption: ""},
    {href : "./Kinderkunst/4.jpeg", caption: ""},
    {href : "./Kinderkunst/5.jpeg", caption: ""},
    {href : "./Kinderkunst/6.jpeg", caption: ""},
    {href : "./Kinderkunst/7.jpeg", caption: ""},
    {href : "./Kinderkunst/8.jpeg", caption: ""},
    {href : "./Kinderkunst/9.jpeg", caption: ""},
    {href : "./Kinderkunst/10.jpeg", caption: ""},
    {href : "./Kinderkunst/11.jpeg", caption: ""},
    {href : "./Kinderkunst/12.jpeg", caption: ""},
    {href : "./Kinderkunst/13.jpeg", caption: ""},
    {href : "./Kinderkunst/14.jpeg", caption: ""},
    {href : "./Kinderkunst/15.jpeg", caption: ""},
    {href : "./Kinderkunst/16.jpeg", caption: ""},
    {href : "./Kinderkunst/17.jpeg", caption: ""},
    {href : "./Kinderkunst/18.jpeg", caption: ""},
    {href : "./Kinderkunst/19.jpeg", caption: ""},
    {href : "./Kinderkunst/20.jpeg", caption: ""},
    {href : "./Kinderkunst/21.jpeg", caption: ""},
    {href : "./Kinderkunst/22.jpeg", caption: ""},
    {href : "./Kinderkunst/23.jpeg", caption: ""},
    {href : "./Kinderkunst/24.jpeg", caption: ""},
    {href : "./Kinderkunst/25.jpeg", caption: ""},
    {href : "./Kinderkunst/27.jpeg", caption: ""},
    {href : "./Kinderkunst/28.jpeg", caption: ""},
    {href : "./Kinderkunst/29.jpeg", caption: ""},
    {href : "./Kinderkunst/30.jpeg", caption: ""},
    {href : "./Kinderkunst/31.jpeg", caption: ""},
];

function Kinderkunst() {
    return (
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

export default Kinderkunst;