import "./Navigation.css"
import React  from 'react';


function Navigation() {
  return (
    <div style={{backgroundColor: "#297873"}}>
    <nav class="uk-navbar-container uk-container" uk-navbar="mode: click" style={{background: "#297873", color: "white"}}>
            <div class="uk-navbar-left">
                <a class="uk-navbar-item uk-logo uk-visible@m" href="/" aria-label="Back to Home" style={{color: "white"}}>HandWerk</a>
                <a class="uk-navbar-item uk-logo uk-hidden@m" href="/" aria-label="Back to Home" style={{color: "white"}}>HandWerk</a>
            </div>
            <div class="uk-navbar-right uk-visible@l">
                <ul class="uk-navbar-nav">
                    <li><a href="/kurse">Kurse</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><a href="/kinder">Kinder</a></li>
                                <li><a href="/erwachsen">Erwachsene</a></li>
                                <li><a href="/einzelunterricht">Einzelunterricht</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="/verkauf">Verkauf</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><a href="/kunsthandwerk">Kunsthandwerkverkauf</a></li>
                                <li><a href="/offene-werkstatt">Offene Werkstatt</a></li>
                                <li><a href="/gutschein">Geschenkgutschein</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="/gallery">Galerie</a></li>
                    <li><a href="/about">Über mich</a></li>
                    <li><a href="/zimmer-vermietung">Zimmervermietung</a></li>
                    <li><a href="/contact">Kontakt</a></li>
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
                                <li><a href="/kurse">Kurse</a></li>
                                <li><a href="/verkauf">Verkauf</a></li>
                                <li><a href="/gallery">Galerie</a></li>
                                <li><a href="/about">Über mich</a></li>
                                <li><a href="/zimmer-vermietung">Zimmervermietung</a></li>
                                <li><a href="/contact">Kontakt</a></li>
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
