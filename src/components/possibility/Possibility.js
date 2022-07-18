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
                <p className='l2'>Get in the waitlist. <br/>Get in early.</p>
            </div>
          </div>

          <div className='flexNone'>
            <div className='p1 gradient__pbl-middle'>
                <a className='step'>Step2</a>
                <h3 className='l1 l11'>Integrate coding platforms</h3>
                <p className='l2'>Link Grammit with your favorite coding platforms</p>
            </div>
          </div>

          <div className='flexNone'>
            <div className='p1 gradient__pbl-bot2'>
                  <a className='step'>Step3</a>
                  <h3 className='l1'>Mint NFT</h3>
                  <p className='l2 m1'>Get your exclusive Programmer NFT, depending on your current coding level</p>
            </div>
          </div>

          <div className='flexNone'>
            <div className='p1 gradient__pbl-right'>
                  <a className='step'>Step4</a>
                  <h3 className='l1'>Practice &amp; earn reward</h3>
                  <p className='l2 m1'>As you practice programming everyday, you keep earning $Gramm tokens</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Possibility