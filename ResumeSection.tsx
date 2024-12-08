const ResumeSection = () => {
    const education = [
      {
        year: "2020-2021",
        title: "Software Development",
        institution: "Moringa School",
      },
      {
        year: "2012-2016",
        title: "Disaster Management",
        institution: "Masinde Muliro University",
      },
    ];
  
    const experience = [
      {
        year: "2022 - Present",
        title: "Technical Mentor",
        company: "Moringa School",
      },
      {
        year: "2021-2022",
        title: "Website Development",
        company: "Village 2 Nation",
      },
    ];
  
    const workSkills = [
      "NEXT.js",
      "React.js",
      "HTML 5",
      "CSS 3",
      "Tailwind CSS",
      "Figma",
      "JavaScript",
      "Mongo DB",
      "SQL",
      "Angular",
      "Android",
      "Git",
    ];
  
    const softSkills = [
      "Time Management",
      "Mentorship",
      "Impeccable Communication",
      "Flexibility",
      "Research",
      "Writing",
    ];
  
    return (
      <div className="container mx-auto p-6">
        {/* Resume Heading Section */}
        <div className="grid sm:grid-cols-6 items-center mb-12">
          <h2 className="text-[40px] sm:col-span-2 font-heading font-[500] uppercase text-gray-800">
            resume
          </h2>
          <div className="h-1 max-w-[300px] sm:col-span-4 bg-gradient-to-r from-primaryColor to-secondaryColor"></div>
        </div>
  
        {/* Education and Experience Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Education */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              🎓 Education
            </h2>
            {education.map((item, index) => (
              <div
                key={index}
                className="bg-[#ffe3be] p-6 rounded-md shadow-lg mb-6 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer"
              >
                <p className="text-lg font-semibold text-[#1A1003] opacity-70 mb-2">
                  {item.year}
                </p>
                <p className="text-xl font-bold text-gray-800">{item.title}</p>
                <p className="text-gray-600">{item.institution}</p>
              </div>
            ))}
          </div>
  
          {/* Experience */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              💼 Experience
            </h2>
            {experience.map((item, index) => (
              <div
                key={index}
                className="bg-[#ffe3be] p-6 rounded-md shadow-lg mb-6 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 cursor-pointer"
              >
                <p className="text-lg font-semibold text-[#1A1003] opacity-70 mb-2">
                  {item.year}
                </p>
                <p className="text-xl font-bold text-gray-800">{item.title}</p>
                <p className="text-gray-600">{item.company}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Work Skills and Soft Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Work Skills */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Work Skills</h2>
            <div className="flex flex-wrap gap-4">
              {workSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-110 hover:shadow-lg duration-200 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
  
          {/* Soft Skills */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Soft Skills</h2>
            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-110 hover:shadow-lg duration-200 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ResumeSection;