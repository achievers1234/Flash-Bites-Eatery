import React from 'react'
import { Fragment } from 'react'

import Header from '../components/my-header/Header';
// import Footer from '../components/footer/Footer'
import ContactMe from '../components/my-contact/ContactMe'
import Footer from '../components/my-footer/Footer';
// import NavBar from '../components/my-header/NavBar';

const Contact = () => {
  return (
    <Fragment>
      {/* <NavBar/> */}
      <Header/>
      <ContactMe/>
      <Footer/>
    </Fragment>
  )
}

export default Contact