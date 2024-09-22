/**
 * @copyright 2024 shubhamvadkedev
 * @licence Apache-2.0
 */

const aboutItems = [
  // {
  //   label: "Project done",
  //   number: 25,
  // },
  // {
  //   label: "Years of experience",
  //   number: 3,
  // },
];

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I'm Shubham, a professional software developer with a knack for
            crafting visually stunning and highly functional softwares.
            Combining creativity and technical expertise.
            I transform your vision into a digital masterpiece that excels in both appearance and performance.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/icon.png"
              alt="Logo"
              width={45}
              height={45}
              className="ml-auto md:w-[45px] md:h-[45px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;