import { LitElement, html,css } from 'lit';
import { allLocales } from '../../generated/locale-codes';
import { getLocale, localeNames, setLocaleFromUrl } from '../localization/localization.js';
import { msg } from '@lit/localize';

 
class LocalePicker extends LitElement {
    static styles = css `
    #picker-container {
        
        label {
            color: white;
            font-family: 'Open Sans';
        }
    }
    `
  constructor() {
    super();
  }
 
  render() {
    return html`
    <div id="picker-container">
        <label for="change-language" id='text-label'>${msg('Select language : ')}</label>
        <select id="change-language" @change=${this._localeChanged}>
        ${allLocales.map((locale) => {
          return html`
            <option value=${locale} ?selected=${locale === getLocale()}>
              ${localeNames[locale]}
            </option>
          `;
        })}
        </select>
    </div>
    `;
  }
 
  _localeChanged(event) {
    const newLocale = event.target.value;
 
    if (newLocale !== getLocale()) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLocale);
 
      window.history.pushState(null, '', url.toString());
      setLocaleFromUrl();
    }
  }
}
 
customElements.define('locale-picker', LocalePicker);