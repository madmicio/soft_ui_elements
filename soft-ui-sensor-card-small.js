import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";
class SoftUiSensorCard extends LitElement {
  
  static get properties() {
    return {
      hass: {},
      config: {},
      active: {}
    };
  }
  
  constructor() {
    super();
  }
  
  render() {

    
    var innershadow = this.config.innershadow == "enable" ? true : false;
    var iconemboss = this.config.iconemboss == "enable" ? true : false;
    var background = this.config.background ? this.config.background : "transparent";
    
    
    return html`
          <div class="${innershadow ? 'card_shadow' : 'card_no_shadow'}" style="background:${background};">
            <div class="${innershadow ? 'inner-main' : 'inner-main_no_shadow'}">
            ${this.config.entities.map(ent => {
                 const stateObj = this.hass.states[ent.entity];
                return stateObj ? html`
                    <div class="frame_1">
                      <div class="frame_2">
                              <div class="grid-container">
                              <div class="${iconemboss? 'icon icon_shadow' : 'icon'}">
                                  <ha-icon icon="${ent.icon  || stateObj.attributes.icon}" style:"/>
                                </div>
                                <div class="left_row text">${ent.name || stateObj.attributes.friendly_name} ${stateObj.state} °</div>  
                                <div class="left_row">
                                  <div class="back_bar">
                                    <div class="bar_value" style="width:${Math.round(stateObj.state)}%;"></div>
                                  </div>
                                </div>
                              </div>
                `: html``;
            })}
            </div>
        </div>
    `;
  }
    
  
  
  setConfig(config) {
    if (!config.entities) {
      throw new Error("You need to define entities");
    }
    if (!config.title) {
      throw new Error("You need to define a title");
    }
    if (!config.icon) {
      throw new Error("You need to define a icon");
    }
    this.config = config;
  }

  getCardSize() {
    return this.config.entities.length + 1;
  }
  
  static get styles() {
    return css`

        
        .grid-container {
          display: grid;
          grid-template-columns: 55px auto;
          grid-template-rows: 50% 50%;
          grid-template-areas:
            'menu main'
            'menu footer';
          grid-gap: 1px;
          background-color: transparent;
          padding: 1px;
        }
        
        .grid-container > div {
          text-align: left;
          font-size: 14px;
        }

        .main: {
          justify-self: stretch;
          
        }
        .left_row {
          margin-left:15px;
          margin-right:15px;
        }

        .icon {
          grid-area: menu;
          border-radius:10px;
          width: 57px;
          height: 57px;
          margin: 0 auto;
          }

        .icon_shadow {
          box-shadow: -3px -3px 3px 0 rgba(255,255,255,.2),6px 6px 6px 0 rgba(0,0,0,.1);
          border: solid 1px rgba(255,255,255, .2)
        }

        ha-icon {
          width:55px;
          height:35px;
          border-radius:10px;
          display: block;
          padding-top:10px;
          padding-bottom:10px;
          margin-left: auto;
          margin-right: auto;
          color: var(--state-icon-color);
          
        }

       .back_bar {
          grid-area: footer;
          background-color: rgba(0,0,20,0.1);
          width:100%;
          border-radius: 3px;
          
        }
        
       .bar_value {
          background-image: linear-gradient(to right, #74cbf2, #4f8df6);
          border-radius: 15px;
          height: 6px;
          margin-top:10px;
        }

        .text {
          grid-area: main;
          color: var(--primary-text-color);
          display: block;
          padding-top:10px;
          font-size: 12px;
          font-weight: bold;
          font-family: Helvetica;
          letter-spacing: '-0.01em';
          
        }

        .card_shadow {
          height:100%;
          border-radius:20px;
          display:flex;
          flex-direction: row;
          justify-self: stretch;
          box-shadow: inset -6px -6px 6px 0 rgba(255,255,255,.5), inset 6px 6px 6px 0 rgba(0,0,0,.1); 
        }

        .card_no_shadow {
          height:100%;
          border-radius:20px;
          display:flex;
          flex-direction: row;
          justify-self: stretch;
        }

        .inner-main {
            width:100%;
            display:flex;
            flex-direction:column;
            justify-self: stretch;

            margin-left:15px;
            margin-top:10px;
            margin-right:15px;
            margin-bottom:10px;
        }

        .inner-main_no_shadow {
          width:100%;
          display:flex;
          flex-direction:column;
          justify-self: stretch;
          margin-top:10px;
          margin-bottom:10px;
          margin-left:5px;
          }

        .frame_1 {
          
          display:inline-block;
          justify-self: stretch;
          border-radius:20px;
          height: 70px;
        } 

        .frame_2 {
          width: 100%;

          margin-left: 0px;
          margin-top:5px;
          margin-bottom:5px;
          } 

    `;
  }  
  
}

customElements.define('soft-ui-sensor-card-small', SoftUiSensorCard);
