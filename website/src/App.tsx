import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="w-screen h-screen">
      <nav className="bg-primary w-screen h-[7vh] flex items-center pl-10 pr-10">
        <Link
          className="text-foreground hover:bg-primary-light transition ease-in-out duration-300 h-full items-center flex pl-8 pr-8"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="text-foreground hover:bg-primary-light transition ease-in-out duration-300 h-full items-center flex pl-8 pr-8"
          to={"/6443/"}
        >
          6443
        </Link>
      </nav>
      <div className="bg-background w-screen h-[93vh] flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
