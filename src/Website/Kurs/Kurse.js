import React from "react";

function Kurse() {
    return (
        <div class="uk-container uk-padding">
            <h2>Kurse</h2>
            <div class="uk-text-left">
            <p>In meinen Kursen </p>
            <ul>
                <li>ermögliche ich kreative Auseinandersetzung mit unterschiedlichen Materialien</li>
                <li>biete ich Raum für individuelle Entwicklung  in einer Kleingruppe </li>
                <li>stehen Entdeckung der eigenen schöpferischen Fähigkeiten, Spaß und Freude am Tun im Vordergrund</li>
                <li>gebe ich meine langjährige Erfahrung der Arbeit mit Materialienvielfalt und Gestaltungsmöglichkeiten weiter. </li>
            </ul>
            <br></br>
            <div class="uk-child-width-1-2@m uk-grid">
                <div>
                    <a class="uk-link-heading" href="/kinder">
                        <div class="uk-card uk-card-default">
                            <div class="uk-card-media-top">
                                <img src="kinder.jpeg" width="1800" height="1200" alt="" />
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">Kinder</h3>
                                <p class="uk-text-truncate">Spielerisch und mit viel Experimentierfreude können Kinder nach Lust und Laune, ihre kreativen Ideen zum Ausdruck bringen. 
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="uk-hidden@m"><br></br><br></br><br></br></div>
                <div>
                    <a class="uk-link-heading" href="/erwachsen">
                        <div class="uk-card uk-card-default">
                            <div class="uk-card-media-top">
                                <img src="erwachsen1.jpeg" width="1800" height="1200" alt="" />
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">Erwachsene</h3>
                                <p class="uk-text-truncate">In meinen Kursen habt ihr die Möglichkeit, in einer kleinen Gruppe verschiedene Materialien und unterschiedliche...</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="uk-hidden@m"><br></br><br></br></div>
                <div>
                    <br></br>
                    <br></br>
                    <a class="uk-link-heading" href="/einzelunterricht">
                        <div class="uk-card uk-card-default">
                            <div class="uk-card-media-top">
                                <img src="Titelbild_Einzelunterricht.jpg" width="1800" height="1200" alt="" />
                            </div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">Einzelunterricht</h3>
                                <p class="uk-text-truncate">In meinen Kursen habt ihr die Möglichkeit, in einer kleinen Gruppe verschiedene Materialien und unterschiedliche...</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Kurse;