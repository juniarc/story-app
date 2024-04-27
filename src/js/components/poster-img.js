import { LitElement, html, css } from 'lit';

class PosterImage extends LitElement {

    static styles = css `
    #imageContent {
        width: 316px;
        height: 335px;

        display: flex;
        flex-direction: flex-column;
        justify-content: center;

        #imgPoster {
            border: 3px solid black;
            border-radius: 10px;
            box-shadow: 7px 8px black;
            background: #F4976C;
        }
    } 
    
    @media (max-width: 575.98px) {
        #imageContent {
            width: 116px;
            height: 135px;
        }
    }
    `
    render() {
        return html `
        <div id="imageContent">
                <img src="illustration.png" alt="ilustration" id="imgPoster">
        </div>
        `
    }
}

customElements.define('poster-image', PosterImage);