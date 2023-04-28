function Gallery() {
    return (
        <div class="uk-container uk-padding">
            <h2>Galerie</h2>
            <div class="uk-child-width-1-2@m uk-grid">
                <div>
                    <a class="uk-link-heading" href="/meine-werke">
                        <div class="uk-card uk-card-default">
                            <div class="uk-card-media-top">
                                <img src="./meine_werk.jpeg" width="1800" height="1200" alt="" />
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">Meine Werke</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="uk-hidden@m"><br></br><br></br><br></br></div>
                <div>
                    <a class="uk-link-heading" href="/kinder-kunst">
                        <div class="uk-card uk-card-default">
                            <div class="uk-card-media-top">
                                <img src="./kinderkunst.jpeg" width="1800" height="1200" alt="" />
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">Kinderkunst</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="uk-hidden@m"><br></br><br></br></div>
                <div>
                    <br></br>
                    <br></br>
                    <a class="uk-link-heading" href="/impression">
                        <div class="uk-card uk-card-default">
                            <div class="uk-card-media-top">
                                <img src="./impressionen.jpeg" width="1800" height="1200" alt="" />
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">Impressionen</h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <br></br><br></br>
        </div>
        
    );
}

export default Gallery;