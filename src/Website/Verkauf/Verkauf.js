import React from "react";

function Verkauf() {
    return (
        <div class="uk-container uk-padding">
            <h2>Verkauf</h2>
            <div class="uk-text-left">
            <br></br>
            <div class="uk-child-width-1-2@m uk-grid">
                <div>
                    <a class="uk-link-heading" href="/kunsthandwerk">
                        <div class="uk-card uk-card-default">
                            <div class="uk-card-media-top">
                                <img src="./kunsthandwerk.jpeg" width="1800" height="1200" alt="" />
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">Kunsthandwerkverkauf</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="uk-hidden@m"><br></br><br></br><br></br></div>
                <div>
                    <a class="uk-link-heading" href="/offene-werkstatt">
                        <div class="uk-card uk-card-default">
                            <div class="uk-card-media-top">
                                <img src="./offene.jpeg" width="1800" height="1200" alt="" />
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">Offene Werkstatt</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <br></br>
                    <br></br>
                    <a class="uk-link-heading" href="/gutschein">
                        <div class="uk-card uk-card-default">
                            <div class="uk-card-media-top">
                                <img src="./gutschein.jpg" width="1800" height="1200" alt="" />
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">Geschenkgutschein</h3>
                            </div>
                        </div>
                    </a>
                </div>
                
            </div>
            </div>
        </div>
    );
}

export default Verkauf;