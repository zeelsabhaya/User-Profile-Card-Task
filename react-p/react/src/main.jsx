import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Userprofilecard from './usercard-info/Userprofilecard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Userprofilecard name="zeel" email="jimxugle@mac.com" img="https://www.w3schools.com/howto/img_avatar.png"/>
    <Userprofilecard name="jone" email="oechslin@sbcglobal.net" img="https://www.w3schools.com/howto/img_avatar.png"/>
    <Userprofilecard name="deni" email="crimsane@gmail.com" img="https://www.w3schools.com/howto/img_avatar.png"/>
    <Userprofilecard name="yumpy" email="yumpy@att.net" img="https://www.w3schools.com/howto/img_avatar.png"/>
    <Userprofilecard name="durist" email="durist@comcast.net" img="https://www.w3schools.com/howto/img_avatar.png"/>
    <App />
  </StrictMode>,
)