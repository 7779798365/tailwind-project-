
import SkillsSection from "@/components/SkillSection";

export default function Home() {
  return (
    <section>
      <div className="grid sm:grid-cols-6 items-center ">
        <h2 className="text-[40px] sm:col-span-2 font-heading font-[500] uppercase">
          about me
        </h2>
        <div className="h-1 ml-10 max-w-[300px] sm:col-span-4 bg-gradient-to-r from-primaryColor to-secondaryColor"></div>
      </div>
      <p className="font-body text-[16px] mt-5 font-medium">
        Hello there! Im thrilled to welcome you to my portfolio. I am a
        passionate and versatile full-stack developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating, and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </p>
      <h2 className="text-[30px] my-4 font-heading font-[500] capitalize">
        what i do!
      </h2>
      <SkillsSection />
    </section>
  );
}
