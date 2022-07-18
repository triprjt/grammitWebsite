import React from 'react';
// import gpt3Logo from '../../logo.svg';
import './footer.css';
import discord from '../../assets/discord.svg';
import twitter from '../../assets/twitter.svg';
// import insta from '../../assets/insta.png';
import telegram from '../../assets/telegram.svg';
// import linkedin from '../../assets/linkedin.svg';
const Footer = () => {
  return (
    <div className='gpt3__footer service_margin gradient__bg3'>
      <div className="gradient__text gpt3__footer__heading">
        <h3 className='gpt3__footer__heading__h1'>Get Set GrammIt</h3>      
        <h5 className='gpt3__footer__heading-join'><a href="https://discord.gg/uJbmBWjJup">Join the community</a></h5>
      </div>
      {/* <div > */}
      
      <div class="gpt3__footer__links__social-container">
        <h1 className='gpt3__footer__logo'>GrammIt</h1>
        <ul class="social-icons">
            <li><a href="https://discord.gg/uJbmBWjJup"><img src={discord} /></a></li>
            <li><a href="https://twitter.com/GrammitClub"><img src={twitter}/></a></li> 
            <li><a href="https://t.me/+teem-SHJ1bM3ZjM1"><img src={telegram}  id="telegram"/></a></li> 
        </ul>
      </div>
        <div className='gpt3__footer__links'>
          <ul>
            <li><a>Whitepaper</a></li>
            <li><a>hello@grammit.com</a></li>
            <li><a>Token contract</a></li>
          </ul>
        </div>
        <div className='gpt3__footer__copyright'>
          <ul>
            <li>©GrammIt </li>
            <li> ● all rights reserved </li>
            <li> <a id="privacy" href="https://fitmint.io/privacy">  ● privacy policy</a></li>
          </ul>
        </div>
      {/* </div> */}
    </div>
  )
};

export default Footer;
