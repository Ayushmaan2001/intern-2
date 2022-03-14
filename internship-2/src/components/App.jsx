import '../scss/App.css';
import {useState} from 'react';
import Navbar from './Navbar';
import SignUp from './Signup';
import ForgetPassword from './forgetPassword';
import Login from './Login';
import {Routes,Route} from 'react-router-dom';
import Newpassword from './newpassword';

function App() {
  function change(e){e.preventDefault();}
  const [Email, setEmail] = useState("");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login change={change}/>}></Route>
        <Route path="/signup" element={<SignUp change={change}/>}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword change={change} setEmail={setEmail}/>} />
        <Route path="/newpassword" element={<Newpassword change={change} Email={Email}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
