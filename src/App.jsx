import "./App.css";
import { Button } from "@mantine/core";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import NavLanding from "./components/layout/nav-landing";
import { FaCarSide } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { SiTransmission } from "react-icons/si";
import { MdPhoneAndroid } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { TextInput, Textarea } from "@mantine/core";
import { TbSend } from "react-icons/tb";
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
              <p className="mt-3 text-gray-400 text-[.9rem] font-semibold">
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
          <div className="about-services mt-8 w-[85%] m-auto">
            <div className="flex-vertical">
              <img src="/iconbox-image_01.png" alt="Select Car" />
              <h1 className="text-[1.6rem] benner">Select Car</h1>
              <p className="text-center text-gray-500 text-[.9rem] max-w-[300px] ">
                Choose the perfect vehicle that fits your needs from our wide
                range of available cars.
              </p>
            </div>
            <div className="w-[80px] border border-dashed border-gray-400 -mt-[130px] hidden lg:block"></div>
            <div className="flex-vertical">
              <img src="/iconbox-image_02.png" alt="Contact Operator" />
              <h1 className="text-[1.6rem] benner">Contact Operator</h1>
              <p className="text-center text-gray-500 text-[.9rem] max-w-[300px] ">
                Reach out to our operator for further assistance or detailed
                information about our services.
              </p>
            </div>
            <div className="w-[80px] border border-dashed border-gray-400 -mt-[130px] hidden lg:block"></div>

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
      <section className="w-full h-max mt-32" id="vehicle">
        <div className="text-center">
          <h2 className="text-[1.4rem]">Vehicle Models</h2>
          <h1 className="text-[2.2rem] lg:text-[2.5rem] benner">
            Our rental fleet
          </h1>
          <p className="max-w-[90%] text-[.9rem] lg:max-w-[550px] text-gray-500 text-center m-auto">
            To contribute to positive change and achieve our sustainability
            goals with many extraordinary
          </p>
        </div>
        <div className="w-[86%] h-max  m-auto mt-7 flex-horizontal">
          <div className="w-full overflow-x-scroll flex items-center  gap-6  p-6  ">
            {Array.from({ length: 10 }, (_, index) => (
              <div className="min-w-[170px]" key={index}>
                <div className="w-[180px] h-[70px] btn-scroll rounded-sm flex-horizontal">
                  <p>Avanza 2019</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full h-max mt-8 ">
          <img
            src="/banner_image.png"
            alt="banner"
            className="hidden lg:block w-[600px] h-[400px] object-cover transform scale-x-[-1]"
          />
          <div className="w-full  absolute top-0 left-0">
            <div className="w-[86%] h-[400px] m-auto vehicle-content">
              <img src="/vehicle-1.png" alt="car" />
              <div className="w-[35%] h-[400px] ">
                <div className="border-b border-gray-400 pb-4">
                  <h1 className="text-[1.3rem] benner">
                    Rp. <span className="benner text-[2rem]">250.000.000</span>
                  </h1>
                  <p className="text-[.9rem] text-gray-500 mt-2">
                    rent per day
                  </p>
                </div>
                <div className="flex flex-col gap-6 mt-6">
                  <div className="flex-horizontal gap-2 text-gray-500 w-max">
                    <FaCar size={20} color="black" />
                    <p>Model:</p>
                    <p>Sedan</p>
                  </div>
                  <div className="flex-horizontal gap-2 text-gray-500 w-max">
                    <GiCarDoor size={20} color="black" />
                    <p>Doors:</p>
                    <p>4</p>
                  </div>
                  <div className="flex-horizontal gap-2 text-gray-500 w-max">
                    <MdAirlineSeatReclineExtra size={20} color="black" />
                    <p>Seats:</p>
                    <p>6</p>
                  </div>
                  <div className="flex-horizontal gap-2 text-gray-500 w-max">
                    <SiTransmission size={20} color="black" />
                    <p>Transmission:</p>
                    <p>Manual</p>
                  </div>
                </div>
                <div className="flex-horizontal gap-1 mt-7 w-max lg:gap-6 pb-4">
                  <button className="glow-button w-full lg:w-max">
                    <div className="w-max flex-horizontal gap-4 m-auto">
                      <p className="text-[.9rem]">Book Ride</p>
                      <IoIosCheckmarkCircle size={20} color="white" />
                    </div>
                  </button>
                  <div className="flex-horizontal">
                    <MdPhoneAndroid size={25} color={"black"} />
                    <h1 className="text-[1.1rem]">081375875623</h1>
                    <p>(ryan)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-max mt-[700px] lg:mt-32 " id="contact">
        <div className="w-full lg:w-[86%] h-max m-auto px-4  flex flex-col justify-between py-4 lg:flex-row lg:px-0">
          <div className="w-full lg:w-[35%]">
            <>
              <h1 className="benner text-[2.5rem]">Need additional</h1>
              <h1 className="benner text-[2.5rem] -mt-4">information?</h1>
            </>
            <p className="my-8 text-gray-500">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <>
              <div className="flex items-center gap-4 w-[300px]">
                <GiRotaryPhone size={22} color="black" />
                <p>081375875623</p>
              </div>
              <div className="flex items-center gap-4 w-[300px]  my-4">
                <MdOutlineAttachEmail size={22} color="black" />
                <p>smartrental@gmail.com</p>
              </div>
              <div className="flex items-center gap-4 w-[300px] ">
                <MdOutlineMapsHomeWork size={22} color="black" />
                <p>Level 1, 121 King Street Melbourne, 3000, Australia</p>
              </div>
            </>
          </div>
          <div className="w-full mt-8 lg:w-[50%] flex flex-col gap-6 lg:mt-0">
            <TextInput
              size="xl"
              label={
                <p className="text-[.9rem] font-semibold">
                  Full Name <span className="text-red-500">*</span>
                </p>
              }
              variant="filled"
              placeholder="E.G.: John Doe"
              error=""
            />
            <TextInput
              size="xl"
              label={
                <p className="text-[.9rem] font-semibold">
                  Email Address <span className="text-red-500">*</span>
                </p>
              }
              variant="filled"
              placeholder="mail@example.com"
              error=""
            />
            <Textarea
              size="xl"
              label={
                <p className="text-[.9rem] font-semibold">
                  Tell me about it <span className="text-red-500">*</span>
                </p>
              }
              variant="filled"
              placeholder="write here..."
              error=""
              autosize
              minRows={5}
            />
            <button className="glow-button w-max lg:w-max">
              <div className="w-max flex-horizontal gap-4 m-auto">
                <TbSend size={20} color="white" />
                <p className="text-[.9rem]">Send Message</p>
              </div>
            </button>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}

export default App;
``;
