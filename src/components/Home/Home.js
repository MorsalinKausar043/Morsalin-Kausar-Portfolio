import "./Home.css";
import Typical from 'react-typical'

const Home = () => {

  return (
    <div className="relative main_home_div overflow-hidden pb-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 left_side sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-5xl xl:inline">I am</span>{' '} <br />
                <span className="block text-indigo-600 text-5xl xl:inline">Morsalin Kausar</span>
              </h1>
              <div className="flex">
                <p className="mt-3 text-base text-black-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-4xl lg:mx-2"> And I'm a
                </p>
                <Typical
                      className="mt-3 text-base text-red-500 font-bold sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-4xl mx-2 lg:mx-0"
                      steps={['Designer!', 1500, 'Developer!', 1500, "Freelancer", 1500]}
                      loop={Infinity}
                      wrapper="p"
                    />
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://drive.google.com/file/d/1yB7pfhzDmV5CtDzuacNRPlGvv7T7v8wQ/view?usp=sharing"
                    target="blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 md:py-4 md:text-lg md:px-10"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full drop-shadow-2xl"
          src="https://i.ibb.co/xLc4frY/christopher-gower-m-HRf-Lhg-ABo-unsplash.jpg"
          alt="banner-img"
        />
      </div>
    </div>
  )
};

export default Home;