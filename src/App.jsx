import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './Components/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Loging from './Components/Login';

function App() {

  return (
    <>
      <Router>
        <ToastContainer/>
        <div className='text-blue-800 text-3xl font-semibold w-full items-center justify-center flex p-4 rounded-lg shadow-xl'>
          Firebase Authentication
        </div>
        <Routes>

          <Route path='/' Component={Loging}/>
          <Route path='/register' Component={Register}></Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App