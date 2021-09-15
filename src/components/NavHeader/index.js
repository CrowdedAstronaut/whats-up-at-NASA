import { NavLink } from "react-router-dom";

export default function NavHeader() {
  return (
    <div>
      <h2>
        <NavLink to="/about"> About </NavLink>
      </h2>
    </div>
  );
}
