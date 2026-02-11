import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Flower Card";
    this.image = ""
    this.description = ""
    this.link = ""
    this.body = ""
    this.fancy = false
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card{
  width: 400px;
  border: 5px solid black;
  margin: 20px auto;
  background-color : white;
  text-align: center;
}
.card-image{
  width: 100%;
  height: auto;
}
.card-title{
  text-align: center;
  padding: 12px 0;
  background-color: var(--my-card-title-background-color, #eeeeee);
  color: var(--my-card-title-color, black);
  font-size: 24px;
}
.card-text {
  padding: 16px;
}
.card-details {
  margin-top: 10px;
}
.btn{
  display:block;
  margin: 16px auto;
  color: white;
}
.fancy{
  background-color: orange;
}
  `;
}

  render() {
    return html`
  <div class="card">
    <img class="card-image" description="${this.description}" src="${this.image}"/>
      <div class="card-text">
        <div class="card-title">${this.title}</div>
      <div class = "card-details">
        <p>${this.description}</p>
  </div>
      <a href = "${this.link}">
        <button class="btn">Details</button>
      </a>
  </div>
  </div>
  `
  ;
  }


  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      link: { type: String},
      body: {type: String},
      fancy: { type: Boolean, reflect: true}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
