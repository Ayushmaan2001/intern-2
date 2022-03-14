import '../scss/App.scss';
import Navbar from './Navbar';
import SignUp from './Signup';
import ForgetPassword from './forgetPassword';
import Login from './Login';
import {Routes,Route} from 'react-router-dom';

function App() {
  function change(e){e.preventDefault();}
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login change={change}/>}></Route>
        <Route path="/signup" element={<SignUp change={change}/>}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>
    </>
  );
}

export default App;
