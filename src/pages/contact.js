import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Us</h1>
      <p>Email: nathen-testing@test.com</p>
      <p>Twitter: <a href='https://twitter.com/Nathen_B' target='_blank' rel='noopener noreferrer'>@Nathen_B</a></p>
      <Footer />
    </div>
  )
}

export default ContactPage