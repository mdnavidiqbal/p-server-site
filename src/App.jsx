
// import { Routes } from 'react-router'
// import './App.css'
// import RootLayout from './components/RootLayout'
// import Home from './pages/Home/Home'
// import Login from './pages/Auth/Login'
// import Register from './pages/Auth/Register'
// import Intro from './pages/IntroPage/Intro'
// import Navbar from './pages/shared/Navbar/Navbar'

// function App() {

//   return (
//     <>
//         <Routes>
//           <route path="/" element={<RootLayout></RootLayout>}></route>
//           <route index element={<Intro/>}></route>
//           <route path="navbar"><Navbar/></route>
//           <route path="home" element={<Home/>}></route>
//           <route path="login" element={<Login />}></route>
//           <route path="register" element={<Register />}></route>
//           <route path=""></route>
//         </Routes>
//     </>
//   )
// }

// export default App


import { Routes, Route } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Intro from './pages/IntroPage/Intro'
import AdminDashboard from './pages/Dashboard/AdminDashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>

        {/* Default */}
        <Route index element={<Intro />} />

        {/* Normal Pages */}
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* 🔥 Dashboard Route */}
        <Route path="dashboard" element={<AdminDashboard />} />

      </Route>
    </Routes>
  )
}

export default App