import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-12 bg-[url('https://mobilesolutions.pt/wp-content/uploads/2016/02/Silver-Blur-Background-Wallpaper.jpg')] bg-no-repeat">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
          At{" "}
          <span className="font-semibold text-gray-800">
          TruCare Dental
          </span>
          , we are dedicated to providing exceptional dental care to our
          community. With years of experience and a patient-first approach, we
          ensure every visit is comfortable, personalized, and effective.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Mission Section */}

          <div className="text-neutral-800 py-6 relative overflow-hidden flex flex-col justify-around  border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6">
            <div class="before:absolute before:w-32 before:h-20 before:right-2 before:bg-rose-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-purple-300 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
              <span class="font-extrabold text-2xl text-violet-600">
                Our Mission
              </span>
              <p class="text-neutral-700">
                To deliver comprehensive, compassionate, and innovative dental
                care that promotes lifelong oral health. We strive to ensure
                that every patient leaves our office smiling and confident.
              </p>
            </div>
          </div>

          {/* Meet Our Team Section */}
          <div className="text-neutral-800 py-6 relative overflow-hidden flex flex-col justify-around  border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6">
            <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-rose-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-purple-300 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
              <span className="font-extrabold text-2xl text-violet-600">
                Meet Our Team
              </span>
              <p className="text-neutral-700">
                Our skilled and caring team is led by{" "}
                <span className="font-medium text-gray-800">
                  Dr. Vikram Patel
                </span>
                , who has over 14 of experience in dentistry. From our friendly
                front desk staff to our expert hygienists, we’re here to make
                your visit as smooth and stress-free as possible.
              </p>
            </div>
          </div>
        </div>
        {/* Our Services Section */}

        {/* Our Services Section */}
<div className="bg-[url(https://www.realpointdesign.co.uk/wp-content/uploads/2015/02/Silver-Blur-Background.jpg)] shadow-lg rounded-lg p-8 mt-12">
  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
    Our Services
  </h2>
  <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl mx-auto">
    We provide a comprehensive range of dental services designed to help you 
    maintain a healthy, radiant smile. Here’s what we specialize in:
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="text-center">
      <div className="text-5xl text-indigo-600 mb-4">🦷</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Preventive Care
      </h3>
      <p className="text-gray-600">
        Regular cleanings, exams, and sealants to keep your teeth healthy and prevent issues before they start.
      </p>
    </div>
    <div className="text-center">
      <div className="text-5xl text-indigo-600 mb-4">✨</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Cosmetic Dentistry
      </h3>
      <p className="text-gray-600">
        Transform your smile with teeth whitening, veneers, and more.
      </p>
    </div>
    <div className="text-center">
      <div className="text-5xl text-indigo-600 mb-4">🛠️</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Restorative Solutions
      </h3>
      <p className="text-gray-600">
        Fillings, crowns, and dental implants to repair and restore your teeth.
      </p>
    </div>
    <div className="text-center">
      <div className="text-5xl text-indigo-600 mb-4">⚡</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Emergency Care
      </h3>
      <p className="text-gray-600">
        Quick and effective treatment for toothaches, broken teeth, and other urgent issues.
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
