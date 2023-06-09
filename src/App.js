import React from 'react';
import './App.css';
import Home from './Website/Home';
import About from './Website/About';
import {Route, Routes, Navigate} from 'react-router-dom';
import ContactForm from './email/contactForm';
import Impressum from './footer/impressum';
import Datenschutz from './footer/Datenschutz';
import Kurse from './Website/Kurs/Kurse';
import Kunsthandwerk from './Website/Verkauf/Kunsthandwerk';
import OffeneWerkstat from './Website/Verkauf/Offenewerkstatt';
import WerkstattBesuch from './Website/Verkauf/Werkstattbesuch';
import Kinder from './Website/Kurs/Kinder';
import Erwachsene from './Website/Kurs/Erwachsene';
import Zimmervermietung from './Website/Zimmer/ZimmerVermietung';
import Gallery from './Website/Gallery/Gallery';
import Verkauf from './Website/Verkauf/Verkauf';
import MyWork from './Website/Gallery/MyWork';
import Kinderkunst from './Website/Gallery/Kinderkunst';
import Einzelunterricht from './Website/Kurs/Einzelunterricht';
import Gutschein from './Website/Verkauf/Gutschein';
import Impressions from './Website/Gallery/Impressions';

const App = () => (
  <div className='App' style={{backgroundColor: "#FFF9BA", minHeight: "90vh"}}>
    
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/home" element={<Navigate replace to="/" />} />
    <Route path="/about" element={<About />}/>
    <Route path="/gallery" element={<Gallery />}/>
    <Route path="/contact" element={<ContactForm />} />
    <Route path="/impressum" element={<Impressum />} />
    <Route path="/datenschutz" element={<Datenschutz />} />
    <Route path="/kurse" element={<Kurse />} />
    <Route path="/kunsthandwerk" element={<Kunsthandwerk />} />
    <Route path="/offene-werkstatt" element={<OffeneWerkstat />} />
    <Route path="/werkstattbesuch" element={<WerkstattBesuch />} />
    <Route path="/kinder" element={<Kinder />} />
    <Route path="/erwachsen" element={<Erwachsene />} />
    <Route path="/einzelunterricht" element={<Einzelunterricht />} />
    <Route path="/zimmer-vermietung" element={<Zimmervermietung />} />
    <Route path="/verkauf" element={<Verkauf />} />
    <Route path="/meine-werke" element={<MyWork />} />
    <Route path="/kinder-kunst" element={<Kinderkunst />} />
    <Route path="/impression" element={<Impressions/>} />
    <Route path="/gutschein" element={<Gutschein />} />
    </Routes>
  </div>
);

export default App;

