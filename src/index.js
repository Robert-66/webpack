//import $ from 'jquery';
import { Greeter } from './greeter.js';

import './styles.scss';

const greeter = new Greeter();

const message = greeter.greet('Hello', 'Webpack');

const app = document.querySelector('#app');

const h1 = document.createElement('h1');
h1.textContent = 'Знакомство с Webpack';

app.appendChild(h1);

//$('#app').text(message);
console.log(message, 2);