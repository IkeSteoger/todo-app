import React from 'react';
import Todo from './Components/Todo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SettingsForm from './Components/SettingsForm';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <>
          <BrowserRouter>
            <Header />
              <Routes>
                <Route path="/" element={<Todo />} />
                <Route path="/settings" element={<SettingsForm />} />
              </Routes>
            <Footer />
          </BrowserRouter>
      </>
    );
  }
}
