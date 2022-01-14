import React, { useEffect, useState } from "react";
import AppRouter from "./components/Router";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Letter from './components/Letter';

function App() {
  return (
    <div>
        <AppRouter/>
    </div>
  );
}

export default App;
