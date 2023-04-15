
const images = [
    {href : "./MyWork/1.jpeg", caption: "Caption 1"},
    {href : "./MyWork/2.jpeg", caption: "Caption 2"},
    {href : "./MyWork/3.jpeg", caption: ""},
    {href : "./MyWork/4.jpeg", caption: ""},
    {href : "./MyWork/5.jpeg", caption: ""},
    {href : "./MyWork/6.jpeg", caption: ""},
    {href : "./MyWork/7.jpeg", caption: ""},
    {href : "./MyWork/8.jpeg", caption: ""},
    {href : "./MyWork/9.jpeg", caption: ""},
    {href : "./MyWork/10.jpeg", caption: ""},
    {href : "./MyWork/11.jpeg", caption: ""},
    {href : "./MyWork/12.jpeg", caption: ""},
    {href : "./MyWork/13.jpeg", caption: ""},
    {href : "./MyWork/14.jpeg", caption: ""},
    {href : "./MyWork/15.jpeg", caption: ""},
    {href : "./MyWork/16.jpeg", caption: ""},
    {href : "./MyWork/17.jpeg", caption: ""},
    {href : "./MyWork/18.jpeg", caption: ""},
    {href : "./MyWork/19.jpeg", caption: ""},
    {href : "./MyWork/20.jpeg", caption: ""},
    {href : "./MyWork/21.jpeg", caption: ""},
    {href : "./MyWork/22.jpeg", caption: ""},
    {href : "./MyWork/23.jpeg", caption: ""},
    {href : "./MyWork/24.jpeg", caption: ""},
    {href : "./MyWork/25.jpeg", caption: ""},
    {href : "./MyWork/26.jpeg", caption: ""},
];

function Gallery() {
    return (
        <div class="uk-container">
            <div class="uk-child-width-1-5@m uk-grid" uk-lightbox="animation: slide">
                {
                    // eslint-disable-next-line array-callback-return
                    images.map((image) => (
                        <div class="uk-card uk-card-hover uk-card-body" style={{display: "flex", alignItems: "center" }}>
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

export default Gallery;