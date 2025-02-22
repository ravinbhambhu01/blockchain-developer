// About.js
import React from "react";
import "../styles/about.css";

const About = () => (
  <section className="about" id="about">
    <div className="about-container">
      <div className="about-text">
        <h2 className="about-title">Who Am I?</h2>
        <p className="about-description">
          I am a passionate Blockchain Developer with expertise in designing and implementing secure, decentralized solutions. 
          With experience in Ethereum, Hyperledger, and smart contract development, I help businesses leverage blockchain 
          to optimize their operations, enhance security, and drive innovation.
        </p>
        <h3 className="skills-title">My Skills</h3>
        <div className="skills-grid">
          <div className="skill">🚀 Smart Contract Development (Solidity, Rust)</div>
          <div className="skill">🔗 Hyperledger Fabric & Corda Expertise</div>
          <div className="skill">📱 dApp Development & Tokenization</div>
          <div className="skill">💰 DeFi & NFT Development</div>
          <div className="skill">🔒 Secure & Scalable Blockchain Architecture</div>
          <div className="skill">📊 Blockchain Consulting & Strategy</div>
        </div>
        <button className="cta-button">Know More</button>
      </div>
    </div>
  </section>
);
export default About;
