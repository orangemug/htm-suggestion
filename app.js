import {h, render} from 'https://cdn.skypack.dev/preact@10.5.14';
import htm from 'https://cdn.skypack.dev/htm@3.1.0';

const html = htm.bind(h);

function Avatar (props) {
  console.log(props);
  const {username} = props;
  return html`<img src=${`http://github.com/${username}.png?size=40`} />`;
}

function ComponentWithoutError () {
  return html`<${Avatar} username="orangemug" />`;
}

function ComponentWithError () {
  return html`<Avatar username="orangemug" />`;
}

function ComponentWithAttrError () {
  return html`<${Avatar} username={"orangemug"} />`;
}

render(html`<${ComponentWithoutError} />`, document.querySelector('.target-a'));
render(html`<${ComponentWithError} />`, document.querySelector('.target-b'));
render(html`<${ComponentWithAttrError} />`, document.querySelector('.target-c'));
