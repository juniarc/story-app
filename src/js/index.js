import '../scss/main.scss';

import * as bootstrap from 'bootstrap';

import './components/index.js';

import Dashboard from './pages/dashboard';
import AboutMe from './pages/about-me.js';
import CreateStory from './pages/create-story.js';

import Localization from './localization/localization.js';

const routes = {
    '/': Dashboard,
    '/about-me.html' : AboutMe,
    '/create-story.html' : CreateStory,
};

const detectRoute = () => routes[window.location.pathname];

window.addEventListener('DOMContentLoaded', async () => {
    const route = detectRoute();
    route.init();
})