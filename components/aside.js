const template = document.createElement('template');
template.innerHTML = `
  <style>
    a {
      text-decoration: none;
    }

    @media(min-width: 768px) {
      #mobile-header {
        display: none;
      }
    }
  </style>

  <aside>
    <a href="/">JP</a>
    <h1 id="mobile-header">Josh Peters</h1>
    <nav>
      <a href="/">About</a>
      <a href="/writing.html">Writing</a>
      <a href="/projects">Projects</a>
  </aside>
`;

class Aside extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(template.content.cloneNode(true))
  }
}

customElements.define('my-aside', Aside);
