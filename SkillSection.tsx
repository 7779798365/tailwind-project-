import {
    FaLaptopCode,
    FaMobileAlt,
    FaPalette,
    FaChalkboardTeacher,
  } from "react-icons/fa";
  
  const SkillsSection = () => {
    const skills = [
      {
        title: "Web Development",
        icon: <FaLaptopCode />, // Using react-icons for web development
        description:
          "As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I&apos;m always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.",
      },
      {
        title: "App Development",
        icon: <FaMobileAlt />, // Using react-icons for app development
        description:
          "With a focus on user-centric design and cutting-edge technologies, I thrive on building intuitive and efficient apps that make a positive impact on people&apos;s lives. Let&apos;s turn ideas into reality and shape the future together.",
      },
      {
        title: "UI/UX Designing",
        icon: <FaPalette />, // Using react-icons for UI/UX designing
        description:
          "Crafting visually appealing and intuitive user interfaces that offer a delightful user experience is something I&apos;m truly fanatic about.",
      },
      {
        title: "Mentorship",
        icon: <FaChalkboardTeacher />, // Using react-icons for mentorship
        description:
          "I have also found great joy in sharing my knowledge with others. Being a technical mentor allows me to give back to the community that has supported me throughout my career.",
      },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-6 p-2 lg:p-6 bg-gray-100">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md flex items-center lg:items-start flex-col lg:flex-row space-x-4 transition-transform transform hover:scale-105 duration-300 cursor-pointer ${
              index === 0 || index === skills.length - 1
                ? "bg-[#e1c8c3] shadow-lg"
                : "bg-white"
            }`}
          >
            <div className="text-3xl text-primaryColor">{skill.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {skill.title}
              </h3>
              <p className="text-gray-700">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default SkillsSection;