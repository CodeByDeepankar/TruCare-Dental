import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen ">
      {/* Hero Section */}
      <header className="   bg-[url('https://files.123freevectors.com/wp-content/original/110497-blue-blurred-background-vector.jpg')]  bg-no-repeat  bg-cover bg-center">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-white text-4xl  md:text-6xl font-bold text-">
            Welcome to TruCare Dental
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-800 font-bold ">
            Providing high-quality, compassionate dental care for every smile.
          </p>
          <div className="relative group">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 mt-4">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                <div className="relative z-10 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    Book Appointment
                  </span>
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      cliprule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[url('https://mobilesolutions.pt/wp-content/uploads/2016/02/Silver-Blur-Background-Wallpaper.jpg')] bg-cover bg-no-repeat ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 ">
            <div className="p-6 border rounded-lg shadow-lg text-center bg-gray-300">
              <img
                src="https://www.evansondds.com/wp-content/uploads/Screen-Shot-2018-06-26-at-2.52.58-PM.png"
                alt="Advanced Technology"
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-4">
                Advanced Technology
              </h3>
              <p>
                We use state-of-the-art equipment for precise, gentle, and
                effective treatments.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg text-center bg-gray-300">
              <img
                src="https://keystone.health/images/resources/in-home-care-elderly-woman.jpg"
                alt="Personalized Care"
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-4">Personalized Care</h3>
              <p>
                Every treatment plan is tailored to your unique dental needs and
                goals.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg text-center bg-gray-300">
              <img
                src="https://i0.wp.com/smilesonharrogateroad.com/wp-content/uploads/2021/11/Dental-Clinics-In-Vientiane.jpg?resize=900%2C450&ssl=1"
                alt="Comfort First"
                className="mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-4">Comfort First</h3>
              <p>
                Our team prioritizes your comfort, making every visit
                stress-free and relaxing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[url('https://files.123freevectors.com/wp-content/original/110497-blue-blurred-background-vector.jpg')] bg-cover bg-no-repeat">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Preventive Care",
                img: "https://www.woosterhospital.org/wp-content/uploads/sites/229/2023/11/iStock-1406691824-1.jpg",
              },
              {
                name: "Cosmetic Dentistry",
                img: "https://www.dentalworldindia.com/wp-content/uploads/2024/09/Boost-your-confidence-with-a-smile-transformation.png",
              },
              {
                name: "Restorative Solutions",
                img: "https://restorativesolutionsdental.wordpress.com/wp-content/uploads/2019/02/cropped-rsdl-2-01.jpg",
              },
              {
                name: "Emergency Care",
                img: "https://duggaldentalclinic.com/wp-content/uploads/2022/02/Emergency-Dental-Care.jpg",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-300 text-gray-500 hover:bg-gray-400 hover:text-gray-300 p-6 border rounded-lg shadow-lg text-center cursor-pointer"
              >
                <img
                  src={service.img}
                  alt={service.name}
                  className="mx-auto mb-4 rounded-full"
                />
                <h3 className="text-lg font-semibold">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16  bg-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Brighten Your Smile?
          </h2>
          <p className="mt-4 text-lg">
            Contact us today to schedule your next appointment.
          </p>

          <button className="relative mt-6   px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-cyan-700"></span>
            </span>
            <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-cyan-700 "></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            Schedule Online
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
