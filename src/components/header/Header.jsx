import React, { useState } from 'react'
import './header.css'

const storeEmail=(email)=>[
]
const path = '../../assets/file1.txt'
var EmailContact = []
// function EmailSubmit(){
//   <div className="gpt3__header-content__input">
//       email: <input type="email" id="email" name="email" placeholder="your email address"/>
//       <button type = "button" onClick={
//         ()=>saveEmail()
//         }> Get Started</button>
//   </div>
// }
const Header = () => {
  const [toggleEmail, setToggleEmail] = useState(true)
  const saveEmail = function(){
    setToggleEmail(false)
    var email = document.getElementById('email').value
    EmailContact.push(email)
    if(EmailContact){
      console.log(EmailContact)
    }
    var jsonData = {
      "id": email,
    }
    // cancelCourse();
    // e.target.reset;
    fetch('https://grammitlanding-default-rtdb.firebaseio.com/emailList.json?auth=9pE1NZKUebW974Yp1pEXE4OBxd8G3hgSZH2XpQFD', {  // Enter your IP address here
  
    method: 'POST', 
    mode: 'cors', 
    body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
  
    }
  )
  }
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Practice Programming, Earn $Gramm</h1>
        <a>Now get rewarded for your coding practice, skills and achievements across any platform in the world<br/>Learn and earn</a>
        <div className='gpt3__header__user-input'>
          {toggleEmail
            ? <div className="gpt3__header-content__input">
                <input type="email" id="email" name="email" placeholder="your email address"/>
                <button type = "button" onClick={
                ()=>saveEmail()
                }> Get Started</button>
               <a id="betaWaitlist">Beta version waitlist closing soon</a>
              </div>
            : <div className="gpt3__header-content__input-after "><span className='gradient__text'>Please check that a confirmation email might have arrived<br/> and Welcome!</span> <span>😍</span></div>
              }
        </div>
      </div>
      
      {/* <div className="gpt3__header-image">
        <img src={ai} alt="ai"/>
      </div>      */}
    </div>
  )
}

export default Header