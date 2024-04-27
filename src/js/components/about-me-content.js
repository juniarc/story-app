import { html } from "lit";
import { msg, str, updateWhenLocaleChanges } from '@lit/localize';

import LitWithoutShadowDom from "./base/LitWithoutShadowDOM";

class AboutMeContent extends LitWithoutShadowDom {
    constructor(){
        super();
        updateWhenLocaleChanges(this);

    }
    render(){
        return html`
        <div class="about-me-container container-xl d-flex align-items-center" id="main-container">
            <div class="container" id="img-container">
                <img class="text-center bg-altOrange object-fit-contain" src="about-me.jpg" alt="ilustration" id="image">
            </div>
            <div class="container" id="text-container">
                <div id="about-me-title">
                    <p class="text-start">${msg('About Me')}</p>
                </div>
                <div class="container d-flex justify-content-between" id="about-me-description">
                    <div id="description-left-container">
                        <div id="line"></div>
                        <div id="text">
                            <p>${msg(html`My name is <span class="fw-bold">Cahya Juniar Syam.</span>`)}</p>
                            <p>${msg(html`I was born in <span class="fw-bold">Garut, June 17 2000.<span class="fw-bold"></span>`)}</p>
                        </div>
                    </div>
                    <div id="description-right-container">
                        <p class="text-break"> ${msg('This website was created to fulfill submission on Dicoding Intermediate Front-end Web Developer. Thank you for visiting this website.')}</p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('about-me-content', AboutMeContent);