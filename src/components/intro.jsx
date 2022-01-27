
import React from 'react';
import "./intro.css";
import Ridh from "../../src/ridh.png";


const intro = () => {
  return <div>  <div className="i">
        <div className="i-left">
          <div className='i-left-wrapper'>
            <h2 className='i-intro'>Hey,My Name is </h2>
          <h1 className='i-name'>Ridhima</h1>
            <div className='i-desc'>I am Second year Engineering Student at Netaji Subhas
             University Of Technology,Persuing Computer Science Engineering Specialisation
              in Data Science.</div>
         </div>
       </div>
       <div className="i-right">
         <div className='i-bg'>
          <img src={Ridh} alt=" " className='i-img'></img>
   
          </div>
         </div>
     </div></div>;
};

export default intro;

