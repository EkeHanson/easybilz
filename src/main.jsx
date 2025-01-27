import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './Components/Loginpage/Login';
import RegPayment from './Components/RegPayment/RegPayment'
import Heropage from './Components/HeroSection/Heropage'
import LoginAccount from './Components/LoginAccount/LoginAcount'
import Register from './Components/Registration/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/heropage",
    element: <Heropage/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/reg-payment",
    element: <RegPayment/>,
  },
  {
    path: "/login-account",
    element: <LoginAccount/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route path="loginpage" element={<Login />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );