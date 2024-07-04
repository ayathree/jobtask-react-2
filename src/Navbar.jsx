
import { Link as ScrollLink } from "react-scroll";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">ATG Users Profile</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <ScrollLink to={'user'} smooth={true} duration={500}><li><a>user</a></li></ScrollLink>
      
    </ul>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;