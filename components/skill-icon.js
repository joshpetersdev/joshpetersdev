const skillTemplate = document.createElement('template');
skillTemplate.innerHTML = `
  <style>

  </style>

  <div class="icon-wrapper">
    <i></i>
  </div>
`

class SkillIcon extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(skillTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    const iconClass = this.getAttribute('icon') || '';
    this.shadowRoot.querySelector('i').className = iconClass;
  }

  static get observedAttributes() {
    return ['icon'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'icon') {
      this.shadowRoot.querySelector('i').className = newValue;
    }
  }
}

customElements.define('skill-icon', SkillIcon);
