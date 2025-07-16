// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" 
          element={  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
