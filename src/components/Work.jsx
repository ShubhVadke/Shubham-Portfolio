/**
 * @copyright 2024 shubhamvadkedev
 * @licence Apache-2.0
 */

/**
 * COMPONENTS
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/QR.jpg",
    title: "QR Code Scanner",
    tags: ["API", "Development"],
    projectLink: "https://shubhamvadkeqr.blogspot.com/",
  },
  {
    imgSrc: "/images/CS.jpg",
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://pixstock-official.vercel.app/",
  },
  {
    imgSrc: "/images/CS.jpg",
    title: "Weather app",
    tags: ["Development", "API"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-3.png",
    title: "Hamburger Effect",
    tags: ["Web-design", "Development"],
    projectLink: "https://shubhvadke.github.io/Hamburger-Effects/",
  },
  {
    imgSrc: "/images/CS.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  },
  {
    imgSrc: "/images/CS.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Project Highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;