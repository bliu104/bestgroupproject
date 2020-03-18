import React from 'react'

import { Link } from 'react-router-dom'



const Footer = (props) => (
  <footer id='footer-style'>
    <div><Link to="/Subscribe">Subscribe </Link></div>
    <div><Link to="/ContactUs">Contact US </Link></div>
    <p>© Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
  </footer>
)

export default Footer