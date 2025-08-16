const template = document.createElement('template');
template.innerHTML = `
  <style>
    a {
      text-decoration: none;
      color: #C6C5B9;
    }

    nav {
      display: flex;
      gap: 1rem;
    }

    #logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 36px;
      border-radius: 4px;
      font-weight: bold;
      background-color: #62929E;
      color: #FDFDFF;
    }

    #mobile-header {
      color: #FDFDFF;
    }

    @media(min-width: 768px) {
      aside {
        width: 200px;
      }

      #mobile-header {
        display: none;
      }

      nav {
        flex-direction: column;
      }

      #logo {
        margin-bottom: 3rem;
      }
    }
  </style>

  <aside>
    <a href="/" id="logo">JP</a>
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
