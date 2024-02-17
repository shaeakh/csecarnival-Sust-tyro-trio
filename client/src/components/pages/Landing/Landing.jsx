import React from 'react';
import Carusl from './Carusl';
import Nav from './Nav';
import FeatureCard from './FeatureCard';
import FeatureCard2 from './FeatureCard2';
import FeatureCard3 from './FeatureCard3';
import FeatureCard4 from './FeatureCard4';
import './Landing.css'
export default function Landing() {
  return (
    <div>
      <Nav/>
      <Carusl  />     

      <hr  style={{ height: '1.5px', backgroundColor: 'grey', margin: '0 auto' }} />
        
        <div className=' flex my-3' >
        <FeatureCard />
        <FeatureCard2 />
        <FeatureCard3 />
        <FeatureCard4 />
        </div>
        <hr  style={{ height: '1.5px', backgroundColor: 'grey', margin: '0 auto' }} />
        <div style={{display:'flex',flexDirection:'row' }} className='my-3  bg-black  text-white' >
          <div  style={{padding:'3rem'}} >
            <h1 className="text-2xl font-bold">Contacts</h1>
            <p >Email</p>
            <p>Phone number</p>          
          </div>
          <div style={{padding:'3rem'}} >
            <h1 className="text-2xl font-bold">Our Services</h1>
            <p>Service 1</p>
            <p>service 2</p>          
          </div>
          <div style={{padding:'3rem'}} >
            <h1 className="text-2xl font-bold">Our works</h1>
            <p>Work 1</p>
            <p>Work 2</p>          
          </div>
          <div style={{padding:'3rem'}} >
            <h1 className="text-2xl font-bold">Our Interests</h1>
            <p>Interest 1</p>
            <p>Interest 2</p>          
          </div>
        </div>

       
    </div>
  )
}
