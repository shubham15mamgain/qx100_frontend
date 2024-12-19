import {
  BrowserRouter as Router,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Layout/Header/Header";
import Team from "./pages/Team/Team";
import Profile from "./pages/Profile/Profile";
import Information from "./pages/Information/Information";
import Product from "./pages/Product/Product";
import Footer from "./components/Layout/Footer/Footer";
import SubscriptionComponent from "./components/SubscriptionComponent/SubscriptionComponent";
import LoginPage from "./pages/Login/Login";
import RegisterForm from "./pages/Register/Register";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* <RouterProvider router={Routes} /> */}
      <Router>
        <div className="flex flex-col h-full bg-blue-500/30">
          {/* Fixed Header */}
          {/* <header className="bg-blue-600 text-white py-4 fixed top-0 left-[15%] w-[70%] items-center justify-center z-10 shadow-md">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl">My React App</h1>
            <div className="flex space-x-4">
              <Link to="/" className="text-lg">
                Home
              </Link>

              <Link to="/product" className="text-lg">
                Product
              </Link>

              <Link to="/team" className="text-lg">
                Team
              </Link>

              <Link to="/information" className="text-lg">
                Information
              </Link>
              <Link to="/profile" className="text-lg">
                Profile
              </Link>
            </div>
          </div>
        </header> */}

          <Header />

          {/* Main Content */}
          <main className="flex-1 mt-20 px-4 py-6 flex items-center justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/information" element={<Information />} />
              <Route path="/product" element={<Product />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterForm />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
