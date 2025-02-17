/* eslint-disable no-unused-vars */
import './App.scss'
import Heart from './assets/heart.png'
import Baymax from './assets/Baymax1-1.png'
import Us1 from './assets/Us-1.png'
import Us2 from './assets/Us-2.png'
import Us3 from './assets/Us-3.png'
import Chat from './assets/chats.png'
import Chat2 from './assets/chat-2.png'
import Chat3 from './assets/chat-3.png'
import Gallery1 from './assets/gallery-1.png';
import Gallery2 from './assets/gallery-2.png';
import Gallery3 from './assets/gallery-3.png';
import Gallery4 from './assets/gallery-4.png';
import Gallery5 from './assets/gallery-5.png';
import Gallery6 from './assets/gallery-6.png';
import Gallery7 from './assets/gallery-7.png';
import Gallery8 from './assets/gallery-8.png';
import Gallery9 from './assets/gallery-9.png';
import FinalPage from "./assets/Final_Page.png"
import Hug from './assets/Hug.mp4';
import BackgroundMusic from './assets/background-music.mp3';
import { useEffect, useState, useRef } from 'react'
import CustomAudioPlayer from './components/CustomAudioPlayer'
import CustomVideoPlayer from './components/CustomVideoPlayer'
import Hug2 from "./assets/Hug2.mp4";
import UsVideo from "./assets/Us_Video.mp4"

function App() {
  const [display, setDisplay] = useState("100%");

  return (
    <>
      {/* Landing Page */}
      <div className="landing-page">
        <div className='page-text'>
          <h1>Happy Valentine&apos;s Day Princess!</h1>
          <p>
            I dedicate this to my little princess who&apos;s always
            been by my side. For all the moments we&apos;ve shared
            and all the moments we will be making in the future
            this is my love letter to you.
          </p>

          <CustomAudioPlayer src={BackgroundMusic} sx={{
            mt: "5rem",
            width: "50%"
          }}/>
        </div>
        <div className='page-image'>
          <img src={Heart} alt="heart" id='heartImg'/>
          <img src={Baymax} alt="Baymax" id='baymaxImg'/>
        </div>
      </div>
      {/* Star Crossed Lovers */}
      <div className="star-crossed-lovers">
        <div className='page2-images'>
          <img src={Us1} alt="Us1" id='us1' style={{ opacity: 1}}/>
          {/* <img src={Us2} alt="Us2" id='us2' style={{ opacity: 1}}/> */}
        </div>
        <div className='page2-text'>
          <h1>Star Crossed Lovers</h1>
          <p>
            I truly believe we were meant for each other. It may sound absolutely
            insane, but I truly believe that the red string of fate pulled us 
            together. Everything from the day we first met each other in the library,
            to the first time we went on a walk together, has felt natural.
            Everything felt like it was meant to happen, every time we held hands, 
            hugged, kissed, talked, sat in silence, everything just felt right.
            It is all thanks to my little princess who makes me feel at ease and 
            comforted. Standing next to you always felt like home, holding you in 
            my arms only reinforced that sentiment even more.
          </p>
          <br />
          <p>
            I truly think we have such an amazing story to tell.
            I truly believe that I was destined to meet you. Every single
            event in my life, leading upto this one moment, the moment where I give 
            my heart to someone so important to me. I look back at our story, and 
            it is nothing short of beautiful. We have such a beautiful love for each
            other and it is very evident in the way we act with each other. I have never
            once felt loved by someone else, and I can whole heartedly say this: 
            <br />
          </p>
            <span style={{
              fontWeight: 700,
              marginTop: "2rem",
              fontSize: "20px"
            }}>
              I feel very loved when I&apos;m around you my dear princess.
            </span>
        </div>
      </div>
      {/* How It All Started */}
      <div className="how-it-all-started">
        <div className='page3-text'>
          <h1>How It All Started</h1>
          <p style={{
            marginTop: "1rem"
          }}>
            What started as a normal conversation on instagram on 22nd September 
            ended up being the most important and significant day of my life.
            Never in a million years would I have imagined, that I would come 
            across someone so bright, as bright as the sun itself. 
          </p>
          <br />
          <p style={{
            marginTop: "1rem"
          }}>
            Truth be told I could see myelf falling hopelessly for you by the end 
            of day 3 itself. Insane right? But that just speaks volumes about who you
            are. A me who always has his guard up, who is completely closed off was 
            caught off guard by your mere presence. You really really have always
            took my breath away. Everytime I learn something more about you, I only 
            fall for you more. My cold heart has completely melted. You thawed the 
            ice in my chest princess. I will never forget the first few days I spent with
            you, they will forever remain dear to my heart. 
          </p>
          <br />
          <p>
            At a moment in time when I was ready to give up on love, you 
            showed me that it really never is too late to find that special someone. 
            You are that special someone for me. You are the one for me princess.
            No words will ever truly come close to expressing how thankful I am to have
            fallen in love with someone as amazing as you.
          </p>
        </div>
        <div className='page3-images'>
          <img src={Chat} alt="Chat1" />
          {/* <img src={Chat2} alt="Chat2" />
          <img src={Chat3} alt="Chat3" /> */}
        </div>
      </div>
      {/* Poem */}
      <div className="poem">
        <div className='page4-video'>
          {/* <video src={Hug} controls playsInline></video> */}
          <CustomVideoPlayer src={Hug} />
          <CustomVideoPlayer src={Hug2} />
        </div>
        <div className='page4-text'>
          <h1>Here&apos;s A Poem I Wrote For You</h1>
          <p>
            How long has it been?, <br/>
            Oh how long has it been, <br/>
            Since I last embraced you, <br/>
            My heart keeps yearning for your love, <br/>
            I long for your presence, <br/>
            But, on this day, the day of the dove, <br/>
            I hope to pour my heart out, <br/>
            Leaving nothing behind, <br/>
            My love, <br/>
            You have captured my heart, <br/>
            My days spent with you on my mind, <br/>
            As my mind takes me back to the days, <br/>
            The golden days that are now behind us, <br/>
            The days we spent walking towards love, <br/>
            The days we spent embracing our love, <br/>
            The days that made my heart race, <br/>
            Sitting under the starry sky, <br/>
            Counting the stars, <br/>
            Holding onto you by the river, <br/>
            As the fresh breeze caressed us, <br/>
            Sitting in our sacred garden, <br/>
            As we held hands together, <br/>
            How long has it been?, <br/>
            Oh how long has it been, <br/>
            You who&apos;s love is as bright as sunshine, <br/>
            I have fallen helplessly in love with, <br/>
            My days don&apos;t feel the same without you, <br/>
            For you bring me something that is so rare, <br/>
            A smile so precious, it makes my heart melt, <br/>
            A smile so precious, it makes me wanna protect it and hold onto that moment forever, <br/>
            A dark and desolate world, <br/>
            Now seems so vibrant and full of colour, <br/>
            For that is the power of love, <br/>
            The power of your love, <br/>
            I ache for your gentle touch, <br/>
            Your soft lips on mine, <br/>
            Your arms wrapped around me, <br/>
            As time and space fade around us, <br/>
            Leaving behind two doves, <br/>
            Hopelessly in love with each other, <br/>
            How long has it been?, <br/>
            Oh how truly long has it been, <br/>
            A ray of hope, <br/>
            That pulled me out of my dark destiny, <br/>
            For i had lost all hope, <br/>
            All hope of finding love, <br/>
            A love so beautiful and strong, <br/>
            But here I am, <br/>
            With the love of my life, <br/>
            I am ever so grateful, <br/>
            Grateful to you and everything you do, <br/>
            For i am in truly and hopelessly in love with you, <br/>
          </p>
        </div>
      </div>
      {/* Gallery */}
      <div className="gallery">
        <div className='page5-text'>
          <h1>My Favourite Moments of Us Together </h1>
        </div>
        <div className='page5-images'>
          <div>
            <img src={Gallery1} alt="Gallery1" />
            <img src={Gallery2} alt="Gallery2" />
            <img src={Gallery3} alt="Gallery3" />
            <img src={Gallery4} alt="Gallery4" />
            <img src={Gallery5} alt="Gallery5" />
            <img src={Gallery6} alt="Gallery6" />
            <img src={Gallery7} alt="Gallery7" />
            <img src={Gallery8} alt="Gallery8" />
            <img src={Gallery9} alt="Gallery9" />
          </div>
        </div>
      </div>
      {/* Proposal */}
      <div className="proposal">
        <div className='page6-text'>
          <h1>My dear princess</h1>
        </div>
        <div className='page6-image'>
          <div>
            <img src={FinalPage} alt="Final Page" />
          </div>
        </div>
        <div className='page6-text'>
          <h1>Will You Be My Valentine?</h1>
          <p>Now and Forver</p>
        </div>
      </div>
    </>
  );
}

export default App
