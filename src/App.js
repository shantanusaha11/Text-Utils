import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, sealert] = useState(null);

  const showAlert = (message,type)=>{
    sealert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      sealert(null);
    }, 1200);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042745';
      showAlert("Dark mode enabled","success");
      document.title = "TextUtils - Dark Mode"
      setInterval(() => {
        document.title = "Textutils is amazing"
      }, 1200);
      setInterval(() => {
        document.title = "Textutils is good"
      }, 2200);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success");
      document.title = "TextUtils - Light Mode"
    }
  }

  return (
  <>
    <Router>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>  
      <Alert alert={alert}/>
      <div className="container my-3">
       <Switch>
          <Route exact path="/">
           <TextForm showAlert={showAlert} heading= 'Enter the text to analyze' mode={mode}/>
          </Route>
       </Switch>
      </div>
    </Router>
  </>
  );
}

export default App;