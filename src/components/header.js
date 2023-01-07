class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
          <nav>
            <ul>
              <a href="/index.html">Home</a>
              <a href="/src/routes/about.html">About</a>
              <a href="/src/routes/recipes.html">Recipes</a>
            </ul>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);