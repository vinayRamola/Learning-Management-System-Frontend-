import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'
import Signup from './Pages/signup'
import Login from './Pages/Login'
import CourseList from './Pages/Course/CourseList'
import Contact from './Pages/Contact'
import Denied from './Pages/Denied'
import CourseDescription from './Components/CourseDescription'
import RequireAuth from './Components/Auth/RequireAuth'
import CreateCourse from './Pages/Course/createCourse'
import Profile from './Pages/User/Profile'

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<Home />}  ></Route>
        
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path='/courses' element={<CourseList />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/denied' element={<Denied />}></Route>

        <Route path='/course/description' element={<CourseDescription />}></Route>
        
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        
        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path='/course/create' element={<CreateCourse />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path='/user/profile' element={<Profile />} />
        </Route>

        <Route path='*' element={<NotFound/>}></Route>
     </Routes>
    </>
  )
}

export default App
