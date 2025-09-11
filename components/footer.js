const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <style>
    a {
      text-decoration: none;
      color: #C6C5B9;
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #C6C5B9;
      margin-top: 8rem;
      padding-bottom: 5rem;
    }

    .social-icons {
      display: flex;
      gap: 0.5rem;
    }

    /* Popup (modal) styles */
    .modal {
      display: none; /* hidden by default */
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0,0,0,0.5);
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal-content {
      background: #546A7B;
      padding: 2rem;
      border-radius: 10px;
      max-width: 400px;
      width: 90%;
      color: #C6C5B9;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .modal-content input,
    .modal-content textarea {
      width: 100%;
      padding: 0.5rem;
      border-radius: 5px;
      border: none;
      outline: none;
    }

    .modal-content button {
      padding: 0.5rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background: #C6C5B9;
      color: #1c1c1c;
      font-weight: bold;
    }

    .close-btn {
      background: crimson;
      color: white;
      margin-top: 0.5rem;
    }
  </style>
  
  <footer>
    <div>
      <p>&#169; Josh Peters.</p>
    </div>
    <div class="social-icons">
      <a style="cursor: pointer;" id="email-btn">
        <slot name="email-logo"></slot>
      </a>
      <a href="https://github.com/joshpetersdev">
        <slot name="github-logo"></slot>
      </a>
      <a href="https://www.linkedin.com/in/joshuagpeters/">
        <slot name="linkedin-logo"></slot>
      </a>
    </div>
  </footer>

  <!-- Email Modal -->
  <div class="modal" id="email-modal">
    <div class="modal-content">
      <h3>Send me an Email</h3>
      <input type="text" id="subject" placeholder="Subject" />
      <textarea id="message" rows="4" placeholder="Your message..."></textarea>
      <button id="send-btn">Send</button>
      <button class="close-btn" id="close-btn">Close</button>
    </div>
  </div>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(footerTemplate.content.cloneNode(true))

    // Elements
    const emailBtn = shadow.querySelector("#email-btn");
    const modal = shadow.querySelector("#email-modal");
    const closeBtn = shadow.querySelector("#close-btn");
    const sendBtn = shadow.querySelector("#send-btn");

    // Open modal
    emailBtn.addEventListener("click", () => {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    });

    // Send email via mailto
    sendBtn.addEventListener("click", () => {
      const subject = shadow.querySelector("#subject").value;
      const message = shadow.querySelector("#message").value;
      const mailtoLink = `mailto:joshuagpeters99@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
      modal.style.display = "none";
      document.body.style.overflow = "";
    });
  }
}

customElements.define('my-footer', Footer);
