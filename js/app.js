import _join from 'lodash/join'
import printMe from './print.js'
import 'core-js/fn/string/includes'
import 'core-js/fn/string/repeat'

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

let k = '12$4'.includes('')
// debugger
console.log({k: k})
