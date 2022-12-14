import React from "react";

// React router component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context import
import StateProvider from "./context/StateContext";
// import AuthProvider from "./context/AuthContext";

//Stylesheet
import "./App.css";

// Pages
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar/Webnavbar";
// import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PaymentStatus from "./pages/Payment";
// import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
// import Shop from "./pages/Shop";
import ForgotPassword from "./pages/ForgotPassword";
// import ProtectedRoute from "./ProtectedRoutes";
// import LoginRoute from "./ProtectedRoutes/LoginRoute";
// import Dashboard from "./pages/Dashboard";

// Admin components
import AdminLayout from "./Layouts/AdminLayout";
import AdminPage from "./components/Admin/Home/Home";
import Orders from "./components/Admin/Orders/Orders";

function App() {
  return (
    <StateProvider>
    <div>
      <Router>
        {/* <AuthProvider> */}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route exact path="/about" element={<About />} />
              <Route exact path="/shop" element={<Shop />} />
              <Route
                exact
                path="/login"
                element={
                  <LoginRoute>
                    <Login />
                  </LoginRoute>
                }
              />*/}
              <Route exact path="/register" element={<Register />} />
              {/*<Route
                exact
                path="/shop/:productId"
                element={<ProductDetails />}
              />*/}
          <Route
            exact
            path="/cart"
            element={
              // <ProtectedRoute>
              <Cart />
              // </ProtectedRoute>
            }
          />
          <Route exact path="/payment-status" element={<PaymentStatus />} />
          <Route
                exact
                path="/forgot-password"
                element={<ForgotPassword />}
              />
             {/*  <Route
                exact
                path="/my-account"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              */}
              <Route
                exact
                path="/admin"
                element={
                  // <ProtectedRoute>
                  <AdminLayout />
                  // </ProtectedRoute>
                }
              >
                <Route path="/admin" index element={<AdminPage />} />
                <Route path="/admin/orders" element={<Orders />} />
              </Route>
        </Routes>
        {/* </AuthProvider> */}
      </Router>
    </div>
    </StateProvider>
  );
}

export default App;
