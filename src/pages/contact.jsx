import React from "react";
import { User } from "phosphor-react";
import { InstagramLogo } from "phosphor-react";
import { Envelope } from "phosphor-react";
import { TwitterLogo } from "phosphor-react";
import './contact.css'
export const Contact = () => {
  return <>
  
  <h2><User/> Contact no. 1234567890</h2>

  <h2><Envelope size={32} />Email-mobilemarvels@gmail.com</h2>
  <h2><InstagramLogo size={32} />Instagram - MobileMarvels</h2>
  <h2><TwitterLogo size={32} />Twitter- mobilemarvls</h2>
  
  </>;
};

