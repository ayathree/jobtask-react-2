
import { Link as ScrollLink } from "react-scroll";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 ">
  <div className="flex-1 ">
    <a className=" lg:text-2xl font-bold hidden lg:block ">ATG Users Profile</a>
    <a className=" lg:text-2xl font-bold block lg:hidden ">ATG</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 flex lg:gap-7 gap-3">
    <ScrollLink className="lg:font-bold lg:text-lg" to={'user'} smooth={true} duration={500}><a>User</a></ScrollLink>
    <ScrollLink className="lg:font-bold lg:text-lg" to={'news'} smooth={true} duration={500}><a>News Letter</a></ScrollLink>
      
    </ul>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;