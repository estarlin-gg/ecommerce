import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Products } from "./pages/Products";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={
              <ProtectedRoute redirectTo="/" authRequired={false}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute redirectTo="/" authRequired={false}>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute redirectTo="/login" authRequired={true}>
                <Products />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
