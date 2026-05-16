
import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Intro from "./pages/IntroPage/Intro";
import PrivateRoute from "./provider/PrivateRoute";
import CreateBiodata from "./pages/BioData/CreateBiodata";
import KabinNama from "./pages/KabinNama/KabinNama";

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
        <Route
          path="/createbiodata"
          element={
            <PrivateRoute>
              <CreateBiodata />
            </PrivateRoute>
          }
        />
        <Route
          path="/kabinnama"
          element={
            <PrivateRoute>
              <KabinNama />
            </PrivateRoute>
          }
        />
        {/* 🔥 Dashboard Route */}
      </Route>
    </Routes>
  );
}

export default App;
