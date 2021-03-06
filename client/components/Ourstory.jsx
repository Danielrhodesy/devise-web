import React, { Component } from "react";
import group1 from "../../public/os-images/group1.png"
import group2 from "../../public/os-images/group2.png"


class Ourstory extends Component {
  render() {
    return (
      <>
        <section className="os-container bl ct sa fdv">
          <article className="os-title-container fdv ct">
            <div className="os-title title-font">
              <p>Our Story</p>
            </div>
            <h3>Founding a creative network</h3>
          </article>
          <section className="story-content fdv ct">
            <article className="story-top sb">
              <div className="top-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed neque sit amet sapien dictum venenatis. Phasellus efficitur lacus et neque iaculis bibendum. Ut fermentum scelerisque lectus ac fringilla. Suspendisse.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed neque sit amet sapien dictum venenatis. Phasellus efficitur lacus et neque iaculis bibendum. Ut fermentum scelerisque lectus ac fringilla. Suspendisse
              </div>
              <div className="top-img">
                <img src={group1} alt=""/>
              </div>
            </article>
            <article className="story-bot sb">
              <div className="bot-img">
                <img src={group2} alt=""/>
              </div>
              <div className="bot-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed neque sit amet sapien dictum venenatis. Phasellus efficitur lacus et neque iaculis bibendum. Ut fermentum scelerisque lectus ac fringilla. Suspendisse.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed neque sit amet sapien dictum venenatis. Phasellus efficitur lacus et neque iaculis bibendum. Ut fermentum scelerisque lectus ac fringilla. Suspendisse.
              </div>
            </article>
          </section>
        </section>
      </>
    );
  }
}

export default (Ourstory)