import { Button } from 'bootstrap';
import { LitElement, html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';


class PosterButtonCreate extends LitElement {
    constructor() {
        super();
        updateWhenLocaleChanges(this);
    }
    static properties = {
        type : Button,
    }

    static styles = css`
        #btnCreateStory {
            border: 3px solid black;
            border-radius: 10px;
            box-shadow: 7px 8px black;

            font-family: "Playfair Display";
            font-size: 1.25rem;
            font-weight: 700;
            color: white;

            background-color: #303C6C;

            padding: 15px 24px;

            cursor: pointer;


            &:hover {
                background-color: #F4976C;
            }
            a {
                color: white;
                text-decoration: none;
            }
        }
        @media (max-width: 575.98px) {
            #btnCreateStory {
                font-size: 0.75rem;
                padding: 10px;
            }
        }
    `

    render() {
        return html`
        <button id="btnCreateStory">
            <a href="/create-story.html">${msg('Create Story')}</a>
        </button>
        `
    }
    
}

customElements.define('poster-button-create', PosterButtonCreate);