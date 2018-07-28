//import $ from 'jquery';
//import { Greeter } from './greeter.js';

import styles from './styles.scss';
import logo from './car.png';

// const greeter = new Greeter();

// const message = greeter.greet('Hello', 'Webpack');
//
// const app = document.querySelector('#app');

const img = document.createElement('img');
img.className = styles.logo;
img.src = logo;

const h1 = document.createElement('h1');
h1.textContent = 'Знакомство с Webpack';
h1.className = styles.title;

app.appendChild(h1);
app.appendChild(img);

//$('#app').text(message);
console.log(styles);
console.log(logo);