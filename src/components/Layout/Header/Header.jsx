import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Map the current path to a page title
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home Page";
      case "/product":
        return "Product Page";
      case "/profile":
        return "Profile Page";
      case "/information":
        return "Information Page";
      case "/team":
        return "Team Page";
      default:
        return "My React App";
    }
  };

  return (
    <header className="bg-blue-600 text-white py-4 fixed top-0 left-[15%] w-[70%] items-center justify-center z-10 shadow-md flex flex-row ">
      <div className="container mx-auto flex justify-center items-center">
        <h1 className="text-2xl">{getPageTitle()}</h1>
      </div>

      {location.pathname == "/" && (
        <div className="px-8">
          <button className="px-2 py-2 bg-white justify-end text-black">
            {" "}
            English{" "}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
