const images = [
    {href : "./MyWerk/1.png", caption: "Pfostenabdeckung"},
    {href : "./MyWerk/2.jpeg", caption: ""},
    {href : "./MyWerk/3.jpeg", caption: "Pfostenbdeckung"},
    {href : "./MyWerk/4.jpeg", caption: ""},
    {href : "./MyWerk/5.jpeg", caption: ""},
    {href : "./MyWerk/6.jpeg", caption: "Sprechstein"},
    {href : "./MyWerk/7.jpeg", caption: "Sprechstein"},
    {href : "./MyWerk/8.jpeg", caption: "Sprechstein"},
    {href : "./MyWerk/9.jpeg", caption: "Sprechstein"},
    {href : "./MyWerk/10.jpeg", caption: "Pflasterstein"},
    {href : "./MyWerk/11.jpeg", caption: "Pflasterstein"},
    {href : "./MyWerk/12.jpg", caption: "Pflasterstein"},
    {href : "./MyWerk/13.png", caption: "Pflasterstein"},
    {href : "./MyWerk/14.jpeg", caption: "Pflasterstein"},
    {href : "./MyWerk/15.jpeg", caption: ""},
    {href : "./MyWerk/16.jpeg", caption: "Fahrradvase"},
    {href : "./MyWerk/17.jpeg", caption: "Fahrradvase"},
    {href : "./MyWerk/18.jpeg", caption: "Fahrradvase"},
    {href : "./MyWerk/19.jpeg", caption: "Seifenschale"},
    {href : "./MyWerk/20.jpeg", caption: "Kette"},
    {href : "./MyWerk/21.jpeg", caption: "Übertopf"},
    {href : "./MyWerk/22.jpeg", caption: "Übertopf"},
    {href : "./MyWerk/23.jpeg", caption: "Übertopf"},
    {href : "./MyWerk/24.jpeg", caption: ""},
    {href : "./MyWerk/25.jpeg", caption: ""},
    {href : "./MyWerk/26.jpeg", caption: ""},
    {href : "./MyWerk/28.jpeg", caption: ""},
    {href : "./MyWerk/29.jpeg", caption: ""},
    {href : "./MyWerk/30.jpeg", caption: ""},
    {href : "./MyWerk/31.jpeg", caption: ""},
    {href : "./MyWerk/32.jpeg", caption: ""},
    {href : "./MyWerk/33.jpeg", caption: ""},
    {href : "./MyWerk/34.jpeg", caption: ""},
    {href : "./MyWerk/35.jpeg", caption: ""},
    {href : "./MyWerk/36.jpeg", caption: ""},
    {href : "./MyWerk/37.jpeg", caption: ""},
    {href : "./MyWerk/38.jpeg", caption: ""},
    {href : "./MyWerk/39.jpeg", caption: "Deckelgefäß"},
    {href : "./MyWerk/40.jpeg", caption: "Mosaikteile"},
    {href : "./MyWerk/41.jpeg", caption: "Engel"},
    {href : "./MyWerk/42.jpeg", caption: ""},
    {href : "./MyWerk/43.jpeg", caption: "Buchhülle"},
    {href : "./MyWerk/44.jpeg", caption: "Buchhülle Rückseite"},
    {href : "./MyWerk/45.jpeg", caption: "Buchhülle"},
    {href : "./MyWerk/46.jpeg", caption: "Buchhülle Rückseite"},
    {href : "./MyWerk/47.jpeg", caption: "Wandbild"},
    {href : "./MyWerk/48.jpeg", caption: ""},
    {href : "./MyWerk/49.jpeg", caption: ""},
    {href : "./MyWerk/50.jpeg", caption: ""},
    {href : "./MyWerk/51.jpeg", caption: ""},
    {href : "./MyWerk/52.jpeg", caption: ""},
    {href : "./MyWerk/53.jpeg", caption: "Spiegeltisch"},
    {href : "./MyWerk/54.jpeg", caption: "Separiert (Corona)"},
    {href : "./MyWerk/55.jpeg", caption: ""},
    {href : "./MyWerk/56.jpeg", caption: ""},
    {href : "./MyWerk/57.jpeg", caption: ""},
    {href : "./MyWerk/58.jpeg", caption: "Collage"},
];

function MyWork() {
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

export default MyWork;