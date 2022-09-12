import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../src/images/abbout.jpeg"
import Common from './Common'
const About = () => {
  return (
    <>
       <Common
       name="Welcome to About page"
       imgsrc={web}
       visit="/contact"
       btname="Contact now"/>
    </>
  )
}

export default About