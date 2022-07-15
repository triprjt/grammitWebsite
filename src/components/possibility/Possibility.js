import React from 'react'
import './possibility.css'

const Possibility = () => {
  return (
    <div className='pbl gradient__bg4'>
      <p className="gradient__text ">How it works?</p>
      <div className='gpt3__pbl service_margin service__padding'>
        <div className='p1 gradient__bg5' >
                  <ul>
                    <li><a className='step'>Step1</a></li>
                    {/* <li><img src="https://fitmint.io/howto/step1.svg"/></li> */}
                    <li><a className='l1 l11'>Download App<br/>  </a></li>
                    <li><a className='l2'>Sign up for waitlist and <br/>Get early access to beta version</a></li>
                  </ul>
          </div>

          <div className='p1 gradient__pbl-middle'>
                  <ul>
                    <li><a className='step'>Step2</a></li>
                    {/* <li><img src="https://fitmint.io/howto/step1.svg"/></li> */}
                    <li><a className='l1 l11'>Mint NFT<br/> </a></li>
                    <li><a className='l2'>Mint your exclusive programmer NFT <br/> Get ready to GrammIt</a></li>
                  </ul>
          </div>

          <div className='p1 gradient__pbl-bot2'>
                  <ul>
                    <li><a className='step'>Step3</a></li>
                    {/* <li><img src="https://fitmint.io/howto/step1.svg"/></li> */}
                    <li><a className='l1'>Integrate code platforms</a></li>
                    <li><a className='l2 m1'>Codechef, Leetcode, HackerRank <br/> Let us know your favorite platform where you code</a></li>
                  </ul>
          </div>

          <div className='p1 gradient__pbl-right'>
                  <ul>
                    <li><a className='step'>Step4</a></li>
                    {/* <li><img src="https://fitmint.io/howto/step1.svg"/></li> */}
                    <li><a className='l1'>Practise and earn reward</a></li>
                    <li><a className='l2 m1'>As you practice programming everyday  <br/>you keep earning $Gramm tokens</a></li>
                  </ul>
          </div>

          <div className='p1 gradient__bg5'>
                  <ul>
                    <li><a className='step'>Step5</a></li>
                    {/* <li><img src="https://fitmint.io/howto/step1.svg"/></li> */}
                    <li><a className='l1'>Play, Network and Earn More</a></li>
                    <li><a className='l2 m2'>Unlock more features, as your NFT upgrades<br/>Enjoy the benefits of the exclusive community</a></li>
                  </ul>
          </div>
      </div>
    </div>
  )
}

export default Possibility