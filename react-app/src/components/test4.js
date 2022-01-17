import React from 'react'
import Confetti from 'react-confetti'

import 'styles/test4.css';

const Test4 = () => {

    
    return (
        <div>
      <Confetti
        width={window.innerWidth || 300}
        height={window.innerHeight || 200}
        gravity = {0.28}
      />
         
          <div className="eff_box"/>
          </div>

    )
}

export default Test4;