
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light')//whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('Dark');
      document.body.style.backgroundColor='#240808';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = 'MyNotepad-Dark Mode';
      setInterval(() => {
        document.title = 'Download MyNotepad Now !';
      }, 1000);
      setInterval(() => {
        document.title = 'Install Now !';
      }, 2000);
    }
    else{
        setmode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light Mode has been Enabled", "success");
        document.title = 'MyNotepad-Light Mode';
      }
    }
  
  return (
    <>
    {/* <Navbar/> */}
    
    {/* <Navbar title ="eTails" aboutText="About"/> */}
    <Navbar title ="MyNotepad" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    
    <TextForms showAlert={showAlert} heading = "ENTER THE TEXT TO ANALYZE" mode={mode}/>
     
     {/* <About></About> */}
    </div>
    
    </>
  );
    }


export default App;
