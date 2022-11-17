import React, { useState } from "react";
import "./header.css";
import PlayStoreImage from "./playStoreButton.png";
// import WhatsappImage from "./WhatsApp.svg";
// import WhatsappImage from "./iconmonstr-whatsapp-1.svg";
import WhatsappImage from "./whatsappImage.png";
import MobileStoreButton from "react-mobile-store-button";
import OpenApp from "react-open-app";

const storeEmail = (email) => [];
const path = "../../assets/file1.txt";
var EmailContact = [];
// function EmailSubmit(){
//   <div className="gpt3__header-content__input">
//       email: <input type="email" id="email" name="email" placeholder="your email address"/>
//       <button type = "button" onClick={
//         ()=>saveEmail()
//         }> Get Started</button>
//   </div>
// }

const emailSender = (email) => {
  const sendEmailUrl = "https://api.emailjs.com/api/v1.0/email/send";
  const serviceId = "service_n31e39k";
  const templateId = "template_cmmts0a";
  const userId = "QdGbyrySeY-8Io4bq";

  var partsArray = email.split("@");
  var emailName = partsArray[0];

  var jsonData = {
    service_id: serviceId,
    template_id: templateId,
    user_id: userId,
    template_params: {
      to_name: emailName,
      to_email: email,
      user_email: "hello@grammit.club",
    },
  };

  fetch(sendEmailUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(jsonData), // body data type must match "Content-Type" header
  });
};
const Header = () => {
  const [toggleEmail, setToggleEmail] = useState(true);
  const androidUrl =
    "https://play.google.com/store/apps/details?id=club.grammit.grammit";
  const whatsappUrl = "https://chat.whatsapp.com/EeNv92SqN2yAPnLCN07aKk";
  const saveEmail = function () {
    setToggleEmail(false);
    var email = document.getElementById("email").value;
    EmailContact.push(email);
    if (EmailContact) {
      console.log(EmailContact);
    }
    var jsonData = {
      id: email,
    };
    emailSender(email);
    // cancelCourse();
    // e.target.reset;
    fetch(
      "https://grammitlanding-default-rtdb.firebaseio.com/emailList.json?auth=9pE1NZKUebW974Yp1pEXE4OBxd8G3hgSZH2XpQFD",
      {
        // Enter your IP address here

        method: "POST",
        mode: "cors",
        body: JSON.stringify(jsonData), // body data type must match "Content-Type" header
      }
    );
  };
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Looking for someone to code with?</h1>
        <a>
          Now get rewarded for your coding practice, skills and achievements
          across any platform in the world
          <br />
          Learn and earn
        </a>
        <div className="gpt3__header__user-input">
          {toggleEmail ? (
            <div className="gpt3__header-content__input">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your email address"
              />
              <button type="button" onClick={() => saveEmail()}>
                {" "}
                Get Started
              </button>
              <a id="betaWaitlist">Beta version waitlist closing soon</a>
            </div>
          ) : (
            <div className="gpt3__header-content__input-after ">
              <span className="gradient__text">
                Please check that a confirmation email might have arrived
                <br /> and Welcome!
              </span>{" "}
              <span>😍</span>
            </div>
          )}
        </div>
      </div>
      <div className="downloadButton">
        <a href={androidUrl} target="_blank">
          <img src={PlayStoreImage} id="playStoreImage" />
        </a>
        <div className="whatsapp">
          {/* <a href={whatsappUrl} target="_blank">
            <img src={WhatsappImage} id="whatsappImage" />
          </a> */}
          <OpenApp href={whatsappUrl}>
            <img src={WhatsappImage} id="whatsappImage" />
          </OpenApp>
          <p>Join the tribe that drives you</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
