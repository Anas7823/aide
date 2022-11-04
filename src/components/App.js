import '../style/App.css';
import TestJSX from './TestJSX';
import Condition from './Condition';
import AffichageBoucle from './AffichageBoucle'
import Banner from './Banner'
import PageParent from './PageParent'
import Calculatrice from './Calculatrice'
import { useState } from 'react';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Banner/>
      
      <Routes>
        <Route path="/" element={<TestJSX />}>
        </Route>

        <Route path="/Condition" element={<Condition/>}>
        </Route>

        <Route path="/AffichageBoucle" element={<AffichageBoucle />}>
        </Route>

        <Route path="/PageParent" element={<PageParent />}>
        </Route>

        <Route path="/Calculatrice" element={<Calculatrice />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
