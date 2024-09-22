/**
 * @copyright 2024 shubhamvadkedev
 * @licence Apache-2.0
 */

/**
 * COMPONENTS
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/Java.png",
    label: "Java",
    desc: "Backend",
  },
  {
    imgSrc: "/images/spring-boot.png",
    label: "Spring Boot",
    desc: "Java Framework",
  },
  {
    imgSrc: "/images/JavaScript.jpg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/React.png",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/HTMLCSS.png",
    label: "HTML5 & CSS3",
    desc: "Web Design",
  },
  {
    imgSrc: "/images/tailwind-css.png",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/MySQL.png",
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/Mongo.png",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/Git.png",
    label: "Git",
    desc: "Version Control",
  },
  {
    imgSrc: "/images/Postman.png",
    label: "Postman",
    desc: "API Testing",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;