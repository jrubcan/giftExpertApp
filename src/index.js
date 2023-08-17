import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GifExpertApp from "./GifExpertApp";

//import './index.ccs';
import { createRoot } from 'react-dom/client'; // Para evitar warning react18
import './index.css';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
    <GifExpertApp />,
    //document.getElementById('root')
);
