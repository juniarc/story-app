import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDOM';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class CustomNavigationCreate extends LitWithoutShadowDom {
    constructor() {
        super();
        updateWhenLocaleChanges(this);
    }
    render() {
        return html`
        <nav class="navbar navbar-expand-md bg-primary">
        <div class="container">
                <div class="nav-item" id="aboutMe">
                    <a class="nav nav-link" aria-current="page" href="/about-me.html">${msg('About Me')}</a>
                </div>
                <p class="navbar-brand text-black user-select-none" id="title">Story App</p>
                <div class="nav-item" id="createStory">
                    <a class="nav nav-link" aria-current="page" href="/">Dashboard</a>
                </div>
            </div>
        </nav>
        `
    }
}

customElements.define('custom-navigation-create', CustomNavigationCreate);