import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/protected"
                element={
                  <PrivateRoute>
                    <ProtectedComponent />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;