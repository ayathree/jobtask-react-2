import Newsletter from "./Newsletter";
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
           <div className="m-10">
                <h1 className="text-center text-6xl font-bold underline">News Letter</h1>
           <p className='text-center mt-5 font-bold text-xl'>For any queries please subscribe</p>
            </div>
           <div className="mt-10">
           <Newsletter></Newsletter>
           </div>
            
        </div>
    );
};

export default Home;