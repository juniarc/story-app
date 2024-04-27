import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDOM';

class CustomFooter extends LitWithoutShadowDom {
    render() {
        return html`
        <div class="container-xl">
            <p>Created by Juniarc.</p>
        </div>
        `
    }
}

customElements.define('custom-footer', CustomFooter);