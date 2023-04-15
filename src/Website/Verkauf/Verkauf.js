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
                        <div class="uk-card uk-card-default uk-card-hover">
                            <div class="uk-card-media-top">
                                <img src="sale.jpg" width="1800" height="1200" alt="" />
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">Kunsthandwerkverkauf</h3>
                                <p class="uk-text-truncate">....... 
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="uk-hidden@m"><br></br><br></br><br></br></div>
                <div>
                    <a class="uk-link-heading" href="/werkstattbesuch">
                        <div class="uk-card uk-card-default uk-card-hover">
                            <div class="uk-card-media-top">
                                <img src="werkstatt.jpg" width="1800" height="1200" alt="" />
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">Werkstattbesuch</h3>
                                <p class="uk-text-truncate">.........</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="uk-hidden@m"><br></br><br></br></div>
                <div>
                    <br></br>
                    <br></br>
                    <a class="uk-link-heading" href="/offene-werkstatt">
                        <div class="uk-card uk-card-default uk-card-hover">
                            <div class="uk-card-media-top">
                                <img src="open.jpg" width="1800" height="1200" alt="" />
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">Offene Werkstatt</h3>
                                <p class="uk-text-truncate">.........</p>
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