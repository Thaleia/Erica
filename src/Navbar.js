import { Link } from "react-router-dom";
import EWModal from "./EWModal";

const Navbar = () => {
  return (
    <nav className="navbar">
        <EWModal/>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#9955bb',
          borderRadius: '8px'
        }}>New Entry</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;