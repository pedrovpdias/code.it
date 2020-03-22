import React from 'react'
import Mailto from 'react-protected-mailto'
 
export default () => (
  <p>
    Phone: <Mailto tel='(35) 99864-8555 ' /><br />
    Email: <Mailto
      email='hello@coston.cool'
      headers={
        {subject:'Question from the website'},
        {cc:'friend@coston.cool'}
      }/>
  </p>
)