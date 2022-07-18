import React from 'react'
import './possibility.css'

const Possibility = () => {
  return (
    <div className='pbl gradient__bg4'>
      <h2 className="gradient__text ">How it works?</h2>
      <div className='gpt3__pbl service_margin service__padding'>
          <div className='flexNone'>
            <div className='p1 gradient__bg5' >
                <a className='step'>Step1</a>
                <h3 className='l1 l11'>Download App<br/>  </h3>
                <p className='l2'>Sign up for waitlist and Get early access to beta version</p>
            </div>
          </div>

          <div className='flexNone'>
            <div className='p1 gradient__pbl-middle'>
                <a className='step'>Step2</a>
                <h3 className='l1 l11'>Mint NFT<br/> </h3>
                <p className='l2'>Mint your exclusive programmer NFT. Get ready to GrammIt</p>
            </div>
          </div>

          <div className='flexNone'>
            <div className='p1 gradient__pbl-bot2'>
                  <a className='step'>Step3</a>
                  <h3 className='l1'>Integrate code platforms</h3>
                  <p className='l2 m1'>Let us know your favorite platform where you code</p>
            </div>
          </div>

          <div className='flexNone'>
            <div className='p1 gradient__pbl-right'>
                  <a className='step'>Step4</a>
                  <h3 className='l1'>Practise and earn reward</h3>
                  <p className='l2 m1'>As you practice programming everyday, you keep earning $Gramm tokens</p>
            </div>
          </div>

          {/* <div className='flexNone'>
            <div className='p1 gradient__bg5'>
                  <a className='step'>Step5</a>
                  <h4 className='l1'>Play, Network &amp; Earn More</h4>
                  <p className='l2 m2'>Unlock more features, as your NFT upgrades. Enjoy the benefits of the exclusive community</p>
            </div>
          </div> */}
      </div>
    </div>
  )
}

export default Possibility