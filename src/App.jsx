import "./App.css";
import { Button } from "@mantine/core";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import NavLanding from "./components/layout/nav-landing";
import { FaCarSide } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";

function App() {
  return (
    <main className="">
      <section className="w-full h-[100vh] bg-[#F8F8F8] relative" id="home">
        <NavLanding />
        <div className="home-content ">
          <div className="w-full lg:w-[40%] h-[400px] ">
            <div className="">
              <h2 className="text-[1.4rem]">Plan your trip now</h2>
              <h1 className="text-[2.5rem] lg:text-[3.2rem] benner tracking-[-.1rem]">
                Save <span className="color-primary benner">big</span> with our
                car rental
              </h1>
              <p className="mt-3 text-gray-400 text-[.9rem]">
                To contribute to positive change and achieve our sustainability
                goals with many extraordinary
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 mt-8 lg:flex-row lg:justify-normal">
              <button className="glow-button w-full lg:w-max">
                <div className="w-max flex-horizontal gap-4 m-auto">
                  <p className="text-[.9rem]">Book Ride</p>
                  <IoIosCheckmarkCircle size={20} color="white" />
                </div>
              </button>
              <div className="w-full lg:w-[170px]">
                <Button
                  variant="outline"
                  color="rgb(255, 76, 49)"
                  fullWidth
                  size="lg"
                  radius="sm"
                  justify="center"
                  rightSection={
                    <MdKeyboardArrowRight size={20} color="black" />
                  }
                  leftSection={<p className="text-[.9rem] ml-2">Learn More</p>}
                ></Button>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[57%] h-[100vh] hidden lg:block">
            <div className="absolute top-0 right-0 w-[75%] h-full">
              <img src="/banner_image.png" alt="banner" className="w-full" />
            </div>
            <div className="absolute top-[150px] w-[850px] right-0  h-[400px] ">
              <img src="/banner_car.png" alt="banner-car" className="w-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-max mt-5 lg:mt-20" id="about">
        <div className="w-full  h-max m-auto px-4 flex flex-col  justify-between gap-10 lg:px-6 lg:flex-row lg:w-[90%]">
          <img
            src="/about_image.jpg"
            alt="about-img"
            loading="lazy"
            className="w-full lg:w-[35%] h-full object-cover lg:ml-10"
          />
          <div className="w-full lg:w-[55%] h-full">
            <h2 className="text-[1.4rem]">About Company</h2>
            <div className="mt-2">
              <h1 className="text-[2.2rem] lg:text-[3rem] benner  lg:max-w-[80%]">
                You start the engine
              </h1>
              <h1 className="text-[2.2rem] lg:text-[3rem] benner -mt-3  lg:max-w-[80%]  lg:-mt-4">
                and your adventure
              </h1>
              <h1 className="text-[2.2rem] lg:text-[3rem] benner -mt-3  lg:max-w-[80%]  lg:-mt-4">
                begins
              </h1>
            </div>
            <p className="text-[.9rem] lg:text-[.9rem] text-gray-500 mt-4 pb-6 border-b ">
              Our car rental company is committed to providing quality services
              with a customer-first approach. Whether for business or leisure,
              we ensure reliability and convenience. With well-maintained cars
              and competitive prices, we aim to make your travel experience
              smooth and enjoyable. Trust us for a hassle-free journey that
              meets your transportation needs.
            </p>
            <div className="flex items-center gap-14 mt-8">
              <div className="">
                <FaCarSide size={60} color="rgb(255, 101, 48)" />
                <div className="flex-horizontal gap-3">
                  <h1 className="text-[3rem] benner">19</h1>
                  <p className="w-[60px] text-[.9rem] text-gray-500">
                    Car Types
                  </p>
                </div>
              </div>
              <div className="">
                <FaUsersLine size={60} color="rgb(255, 101, 48)" />
                <div className="flex-horizontal gap-3">
                  <h1 className="text-[3rem] benner">30</h1>
                  <p className="w-[60px] text-[.9rem] text-gray-500 capitalize">
                    total customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-14">
          <div className="text-center">
            <h2 className="text-[1.4rem]">How It Works</h2>
            <h1 className="text-[2.2rem] lg:text-[2.5rem] benner">
              Quick & easy car rental
            </h1>
          </div>
          <div className="flex-horizontal gap-12 mt-8 w-[85%] m-auto">
            <div className="flex-vertical">
              <img src="/iconbox-image_01.png" alt="Select Car" />
              <h1 className="text-[1.6rem] benner">Select Car</h1>
              <p className="text-center text-gray-500 text-[.9rem] max-w-[300px] ">
                Choose the perfect vehicle that fits your needs from our wide
                range of available cars.
              </p>
            </div>
            <div className="flex-vertical">
              <img src="/iconbox-image_02.png" alt="Contact Operator" />
              <h1 className="text-[1.6rem] benner">Contact Operator</h1>
              <p className="text-center text-gray-500 text-[.9rem] max-w-[300px] ">
                Reach out to our operator for further assistance or detailed
                information about our services.
              </p>
            </div>
            <div className="flex-vertical">
              <img src="/iconbox-image_03.png" alt="Let's Drive" />
              <h1 className="text-[1.6rem] benner">Let&apos;s Drive</h1>
              <p className="text-center text-gray-500 text-[.9rem] max-w-[300px] ">
                Begin your journey with comfort and safety when you travel with
                us.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[300px] mt-8 border-rr"></section>
    </main>
  );
}

export default App;
