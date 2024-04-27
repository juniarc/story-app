import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDOM';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class ModalDetail extends LitWithoutShadowDom {
    constructor(){
        super();
        updateWhenLocaleChanges(this);
    }
    render() {
        return html `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" id="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="modalTitle">${msg('Story Detail')}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex flex-column align-items-center" id="story-detail">
                        <div id="imgContainer">
                            <img src="" alt="img" id="detail-img">
                        </div>
                        <p class="text-start" id="detail-name"></p>
                        <p class="text-start overflow-y-hidden" id="detail-description"></p>
                        <p class="text-end" id="detail-date"></p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('modal-detail', ModalDetail);