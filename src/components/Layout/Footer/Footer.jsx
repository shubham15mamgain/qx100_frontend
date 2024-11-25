import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* Fixed Bottom Navigation Tabs */}
      <nav className="fixed bottom-0 left-[15%] w-[70%] bg-white text-blue-600 py-3 shadow-lg z-10">
        <div className="flex justify-around">
          <Link to="/" className="flex flex-col items-center">
            <span>Home</span>
          </Link>
          <Link to="/information" className="flex flex-col items-center">
            <span>Information</span>
          </Link>
          <Link to="/product" className="flex flex-col items-center">
            <span>Product</span>
          </Link>

          <Link to="/team" className="flex flex-col items-center">
            <span>Team</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center">
            <span>Profile</span>
          </Link>

          <Link to="/login" className="flex flex-col items-center">
            <span>Login</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
