import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDOM';
import { msg, updateWhenLocaleChanges } from '@lit/localize';


class PosterTexts extends LitWithoutShadowDom {
    constructor() {
        super();
        updateWhenLocaleChanges(this);
    }
    render() {
        return html`
        <div class="container-xxl d-flex flex-row justify-content-center align-items-center column-gap-3" id="poster">
            <div class="container" id="textContent">
                <p class="text-1 lh-base text-break">${msg('Write Stories, Share Inspiration: Discover, Share and Be Inspired by Every Story Here!')}</p>
                <p class="text-2 lh-base">${msg('We invite you to explore, immerse and inspire each other through the power of words and images.')} </p>
                <poster-button-create></poster-button-create>
            </div>
            <poster-image></poster-image>
        </div>
        `
    }
}

customElements.define('poster-texts' , PosterTexts);