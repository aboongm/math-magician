import { Outlet, Link } from 'react-router-dom';

const NavBar = () => (
  <>
    <nav className="mobile d-flex align-items-center justify-content-between m-0 p-5">
      <h1 className="m-0 p-0 text-white pad1">Math Magicians</h1>
      <ul className="w-25 d-flex align-items-center justify-content-center m-0 p-0">
        <li className="border-end border-white border-3 px-2">
          <Link to="/">Home</Link>
        </li>
        <li className="border-end border-white border-3 px-2">
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="px-2">
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
);

export default NavBar;
