import { Routes, Route } from 'react-router-dom';
import LayOut from './Pages/Layout';
import  Home from './Pages/Home';
// import About from './Pages/About';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
// import './index.css'
import MySignUp from './components/my-forms/form1';
import MyLogin1 from './components/my-forms/LogIn2';
import { AuthProvider } from './authConttext';

function App() {

  return (
    <AuthProvider>
      <Routes>
        
        <Route path='/' elements ={<LayOut/>} >
          <Route index element={<Home />}/>
          <Route path='/menu' element={<Menu/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/form1' element={<MySignUp/>}/>
          <Route path='/login1' element={<MyLogin1/>}/>
        </Route>
        
      </Routes>

    </AuthProvider>

      
    
  )
}

export default App; 


