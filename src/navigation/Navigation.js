import "./Navigation.css"
import React  from 'react';


function Navigation() {
  return (
    <div style={{backgroundColor: "whitesmoke"}}>
    <nav class="uk-navbar-container uk-container" uk-navbar="mode: click">
            <div class="uk-navbar-left">
                <a class="uk-navbar-item uk-logo uk-visible@m" href="/" aria-label="Back to Home">HandWerk</a>
                <a class="uk-navbar-item uk-logo uk-hidden@m" href="/" aria-label="Back to Home">HandWerk</a>
            </div>
            <div class="uk-navbar-right uk-visible@l">
                <ul class="uk-navbar-nav">
                    <li><a href="/kurse">Kurs</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><a href="/kinder">Kinder</a></li>
                                <li><a href="/erwachsen">Erwachsene</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="/verkauf">Verkauf</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><a href="/kunsthandwerk">Kunsthandwerkverkauf</a></li>
                                <li><a href="/offene-werkstatt">Offene Werkstatt</a></li>
                                <li><a href="/werkstattbesuch">Werkstattbesuch</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="/gallery">Galarie</a></li>
                    <li><a href="/contact">Kontakt</a></li>
                    <li><a href="/about">Über mich</a></li>
                    <li><a href="/zimmer-vermietung">Zimmervermietung</a></li>
                </ul>
            </div>
            <div class="uk-navbar-right uk-hidden@l">
                <ul class="uk-navbar-nav">
                    <li>
                        <a href="#">
                            <span uk-navbar-toggle-icon uk-icon="menu"></span> <span class="uk-margin-small-left">Menu</span>
                        </a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><a href="/kurse">Kurz</a></li>
                                <li><a href="/verkauf">Verkauf</a></li>
                                <li><a href="/gallery">Galarie</a></li>
                                <li><a href="/contact">Kontakt</a></li>
                                <li><a href="/about">Über mich</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default Navigation;
