import { html } from 'lit';
import Utils from '../utils/utils';
import LitWithoutShadowDom from './base/LitWithoutShadowDOM';

class StoryItem extends LitWithoutShadowDom {

    _story = {
        id: null,
        name: null,
        description: null,
        photoUrl: null,
        createdAt: null,
    }

    _color = null;

    constructor() {
        super();
        this.detailName = document.querySelector('#detail-name');
        this.detailDecription = document.querySelector('#detail-description')
        this.detailImg = document.querySelector('#detail-img');
        this.detailColor = document.querySelector('#modal-content');
        this.detailDate = document.querySelector('#detail-date');
    }

    set story(value) {
        this._story = value;
        this._convertDate = Utils.convertCreatedAtFromJSON(value.createdAt);
        this.render();
    }

    get story() {
        return this._story;
    }

    set color(value) {
        this._color = value;
    }

    get color() {
        return this._color;
    }

    static get shadowRootMode() {
        return 'open';
    }

    _aplyToDetailModal(){
        this.detailImg.setAttribute('src', this._story.photoUrl);
        this.detailName.textContent = this._story.name;
        this.detailDecription.textContent = this._story.description;
        this.detailDate.textContent = this._convertDate;
        this.detailColor.setAttribute('style', `background-color: ${this._color};`);
    }

    

    render() {
        return html `
        <div class="d-flex flex-column align-items-center" 
            id="story-item" 
            style="background-color: ${this._color};"
            data-bs-toggle="modal"
            data-bs-target="#modalDetail"
            @click=${this._aplyToDetailModal}>
            <div id="imgContainer">
                <img src="${this._story.photoUrl}" alt="img">
            </div>                        
            <p class="text-start" id="name">${this._story.name}</p>
            <p class="text-start overflow-x-hidden text-truncate" id="description">${this._story.description}</p>
        </div>
        `
    }
}

customElements.define('story-item', StoryItem);