class FlipSensorCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.currentIndex = 0;
  }

  setConfig(config) {
    if (!config.entities || config.entities.length < 2) {
      throw new Error("Je moet minstens twee entities opgeven.");
    }
    this.config = config;
  }

  set hass(hass) {
    this.hassInstance = hass;
    if (!this.rendered) {
      this.renderCard();
      this.startFlipping();
      this.rendered = true;
    }
    this.updateCard();
  }

  renderCard() {
    const card = document.createElement('ha-card');
    card.style.textAlign = 'center';
    card.style.padding = '16px';
    card.style.transition = 'transform 0.6s';
    card.style.transformStyle = 'preserve-3d';
    card.style.backfaceVisibility = 'hidden';
    card.innerHTML = `
      <div id="content" style="font-size: 2em; font-weight: bold;"></div>
      <div id="label" style="opacity: 0.7; font-size: 1em;"></div>
    `;
    this.shadowRoot.appendChild(card);
    this.card = card;
  }

  updateCard() {
    if (!this.hassInstance) return;
    const entityId = this.config.entities[this.currentIndex];
    const stateObj = this.hassInstance.states[entityId];
    const content = this.card.querySelector('#content');
    const label = this.card.querySelector('#label');

    if (stateObj) {
      content.innerHTML = `${stateObj.state} ${stateObj.attributes.unit_of_measurement || ''}`;
      label.innerHTML = this.config.names?.[this.currentIndex] || stateObj.attributes.friendly_name || entityId;
    }
  }

  startFlipping() {
    const interval = this.config.interval || 3000;
    this.flipTimer = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.config.entities.length;
      this.card.style.transform = 'rotateY(180deg)';
      setTimeout(() => {
        this.updateCard();
        this.card.style.transform = 'rotateY(0deg)';
      }, 300);
    }, interval);
  }

  disconnectedCallback() {
    if (this.flipTimer) clearInterval(this.flipTimer);
  }

  getCardSize() {
    return 2;
  }
}

customElements.define('flip-sensor-card', FlipSensorCard);
