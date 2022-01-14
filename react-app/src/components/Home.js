import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [text, setText] = useState([]);
    
    return (
        <div>
            <h2>
                홈화면임당
            </h2>
        </div>
    );
};

export default Home;