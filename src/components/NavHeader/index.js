import { NavLink } from "react-router-dom";

export default function NavHeader() {
  return (
    <div>
      <h4>
        <NavLink to="/about"> About </NavLink>
      </h4>
    </div>
  );
}
