const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <style>
    a {
      text-decoration: none;
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .social-icons {
      display: flex;
      gap: 0.5rem;
    }
  </style>
  
  <footer>
    <div>
      <p>&#169; Josh Peters.</p>
    </div>
    <div class="social-icons">
      <a href="#">
        <slot name="email-logo"></slot>
      </a>
      <a href="#">
        <slot name="github-logo"></slot>
      </a>
      <a href="#">
        <slot name="linkedin-logo"></slot>
      </a>
    </div>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(footerTemplate.content.cloneNode(true))
  }
}

customElements.define('my-footer', Footer);
