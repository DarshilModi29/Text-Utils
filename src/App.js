import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { Routes, Route } from "react-router-dom"

function App() {
  const [Mode, setMode] = useState('light'); //Whether dark mode is unable or not
  const [btnClass, setbtnClass] = useState('text-dark');
  const [btnText, setBtnText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if(Mode === 'light'){
      setMode('dark');
      setbtnClass('text-light');
      setBtnText('Disable Dark Mode');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
    }
    else
    {
      setMode('light');
      setbtnClass('text-dark');
      setBtnText('Enable Dark Mode');
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been disabled", "success");
    }
  }
  return (
    <>
    
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} btnText={btnText} btnClass={btnClass} />
    <Alert alertMessage={alert} />
    <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={Mode} toggleMode={toggleMode} btnClass={btnClass}/>}>
        </Route>
        <Route exact path="about" element={<About mode={Mode} />}>
        </Route>
      </Routes>      
    </div>

    </>
  );
}

export default App;
