import img from '../src/assets/young-hispanic-woman-wearing-casual-winter-sweater-smiling-cheerful-presenting-pointing-with-palm-hand-looking-camera.jpg'

const Newsletter = () => {
    return (
        <div>
            <section id='news' className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
    <div className="md:flex md:items-center md:justify-center md:w-1/2  md:dark:bg-gray-800">
        <div className="px-6 py-6 md:px-8 md:py-0">
            
           <img  src={img} alt="" />
        </div>
    </div>

    <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
   
        <form>
            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              
                <input className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email"/>

                <button disabled className="px-4 py-3  text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">subscribe</button>
            </div>
        </form>
    </div>
</section>
            
        </div>
    );
};

export default Newsletter;