//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import AddDoctorComponent from './components/AddDoctorComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListDoctorComponent from './components/ListDoctorComponent';
import AddPatient from './components/patientComponents/AddPatient';
import ListPatient from './components/patientComponents/ListPatient';

function App() {
  return (
    <div>
      <HeaderComponent />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListDoctorComponent />} />
        <Route path='headd' element={<HeaderComponent />} />
        <Route path='/add-doctor' element={<AddDoctorComponent />} />
        <Route path='/edit-doctor/:id' element={<AddDoctorComponent />} />
        <Route path='/patient' element={<ListPatient />} />
        <Route path='/add-patient' element={<AddPatient />} />
      </Routes>
      </BrowserRouter>
      
      
      <FooterComponent />
    </div>
  );
}

export default App;
