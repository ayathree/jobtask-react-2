import Slider from "./Slider";
import User from "./User";


const Home = () => {
    return (
        <div>
            <div className="mb-20">
            <Slider></Slider>
            </div>
            <div className="mb-10">
                <h1 className="text-center text-6xl font-bold underline">Users</h1>
            </div>
           <div className="mt-10">
           <User></User>
           </div>
            
        </div>
    );
};

export default Home;