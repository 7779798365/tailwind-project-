export default function ContactPage() {
    return (
      <div className="container mx-auto p-4 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-6 items-center mb-8">
            <h2 className="text-[40px] sm:col-span-2 font-heading font-[500] uppercase">
              contact
            </h2>
            <div className="h-1 ml-10 max-w-[300px] sm:col-span-4 bg-gradient-to-r from-primaryColor to-secondaryColor"></div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Phone Contact */}
            <div className="bg-orange-100 p-4 rounded-lg shadow-md transition-transform hover:scale-105 duration-300 cursor-pointer">
              <h2 className="font-semibold mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-orange-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Phone:
              </h2>
              <p>03332172037</p>
              <p>+254738509151</p>
            </div>
  
            {/* Email Contact */}
            <div className="bg-blue-100 p-4 rounded-lg shadow-md transition-transform hover:scale-105 duration-300 cursor-pointer">
              <h2 className="font-semibold mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email:
              </h2>
              <p className="break-all">moosanoob62@gmail.com</p>
            </div>
          </div>
  
          <p className="mb-8 text-center">
            I am always open to discussing{" "}
            <span className="font-semibold">
              new projects, opportunities in the tech world, partnerships
            </span>{" "}
            and more so <span className="font-semibold">mentorship</span>.
          </p>
  
          <form className="grid gap-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-24 px-4 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }