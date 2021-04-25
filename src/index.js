import dom from './components/dom';

let ele = dom.createElement('div');
ele.innerHTML = "Hello World";

dom.appendElement('body', ele);