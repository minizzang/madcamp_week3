import React, { useState } from 'react';
import axios from 'axios';

const Letter = () => {
    const [text, setText] = useState([]);
    
    return (
        <div>
            <h2>
                편지들
            </h2>
            <button
                onClick={() => {
                    // axios.get(`/api/letter`)
                    axios.get("http://127.0.0.1:8000/letter/")
                        .then(response => {
                            console.log(response.data);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }}
            >
                편지 확인
            </button>
        </div>
    );
};

export default Letter;