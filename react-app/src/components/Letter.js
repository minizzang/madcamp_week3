import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from './BASE_URL';

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
                    axios.get(BASE_URL+"/letter/getLetters")
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
            <button
                onClick={() => {
                    axios.get(BASE_URL+"/letter/sendEmail")
                        .then(response => {
                            console.log(response.data);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }}
            >
                메일 보내기
            </button>
        </div>
    );
};

export default Letter;