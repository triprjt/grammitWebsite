import React from "react";
// import gpt3Logo from '../../logo.svg';
import "./footer.css";
import discord from "../../assets/discord.svg";
import twitter from "../../assets/twitter.svg";
import whatsapp from "../../assets/whatsappImage.png";
// import insta from '../../assets/insta.png';
import telegram from "../../assets/telegram.svg";

// import linkedin from '../../assets/linkedin.svg';
import MobileStoreButton from "react-mobile-store-button";
import OpenApp from "react-open-app";

const Footer = () => {
  const whatsappUrl = "https://chat.whatsapp.com/EeNv92SqN2yAPnLCN07aKk";
  const telegramUrl = "https://t.me/+nJGi4WKZA3FhZDll";
  const androidUrl =
    "https://play.google.com/store/apps/details?id=club.grammit.grammit";
  return (
    <div className="gpt3__footer service_margin gradient__bg3">
      <div className="gradient__text gpt3__footer__heading">
        <h3 className="gpt3__footer__heading__h1">Get Set GrammIt</h3>
        <h5 className="gpt3__footer__heading-join">
          <a href={telegramUrl}>Join the community</a>
        </h5>
      </div>
      <div id="downloadButton">
        <MobileStoreButton
          store="android"
          url={androidUrl}
          linkProps={{ title: "Download Grammit App" }}
        />
      </div>
      {/* <div > */}

      <div class="gpt3__footer__links__social-container">
        <h1 className="gpt3__footer__logo">GrammIt</h1>
        <ul class="social-icons">
          <li>
            <OpenApp href="https://discord.gg/uJbmBWjJup">
              <img src={discord} />
            </OpenApp>
          </li>
          <li>
            <OpenApp href="https://twitter.com/GrammitClub">
              <img src={twitter} />
            </OpenApp>
          </li>
          <li>
            <OpenApp href="https://t.me/+teem-SHJ1bM3ZjM1">
              <img src={telegram} id="telegram" />
            </OpenApp>
          </li>
          <li>
            <OpenApp href={whatsappUrl}>
              <img src={whatsapp} id="whatsappImage" />
            </OpenApp>
          </li>
        </ul>
      </div>
      <div className="gpt3__footer__links">
        <ul>
          <li>
            <a href="https://www.linkedin.com/company/grammitclub/people/?viewAsMember=true">
              Team
            </a>
          </li>
          <li>
            <a href="">hello@grammit.com</a>
          </li>
          <li>{/* <a href="">Token Contract</a> */}</li>
          <li>
            <a href="https://grammit.gitbook.io/hackmint/privacy">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="gpt3__footer__copyright">
        <p>©GrammIt 2022-23 All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
