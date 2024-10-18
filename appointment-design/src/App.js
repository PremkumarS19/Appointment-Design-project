import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react';
import { DoctorProvider } from './components/DoctorContext';
import Home from './components/Home'
import FindDoctors from './components/FindDoctors'
import BookAppointment from './components/BookAppointment'
import AboutUs from './components/AboutUs'
import Header from './components/Header'
import ProfileDetails from './components/ProfileDetails'
import NotFound from './components/NotFound';




const App = () => (
  <DoctorProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<AboutUs/>} />
        <Route exact path="/finddoctors" element={<FindDoctors/>} />
        <Route exact path="/finddoctors/:id" element={<ProfileDetails/>} />
        <Route exact path="/finddoctors/:id/bookappointment" element={<BookAppointment/>} />
        <Route element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </DoctorProvider>
)

export default App;
