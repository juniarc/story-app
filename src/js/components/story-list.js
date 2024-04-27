import { html } from 'lit';

import LitWithoutShadowDom from './base/LitWithoutShadowDOM';

class StoryList extends LitWithoutShadowDom {
    render() {
        return html`
        <slot></slot>
        `
    }
}

customElements.define('story-list', StoryList);