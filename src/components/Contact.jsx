/**
 * @copyright 2024 shubhamvadkedev
 * @licence Apache-2.0
 */

const socialLinks = [
  {
    href: "https://github.com/ShubhVadke",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
          fill="currentColor"
        />
      </svg>
    ),
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/shubhamvadke/",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
          fill="currentColor"
        />
      </svg>
    ),
    alt: "LinkedIn",
  },
  {
    href: "https://twitter.com/shubhamvadkedev",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"
          fill="currentColor"
        />
      </svg>
    ),
    alt: "Twitter X",
  },
  {
    href: "https://instagram.com/theshubhamvadke",
    icon: (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
          fill="currentColor"
        />
      </svg>
    ),
    alt: "Instagram",
  },
    {
    href: "https://www.threads.net/@theshubhamvadke",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
           d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098c1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015c-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164c1.43 1.783 3.631 2.698 6.54 2.717c2.623-.02 4.358-.631 5.8-2.045c1.647-1.613 1.618-3.593 1.09-4.798c-.31-.71-.873-1.3-1.634-1.75c-.192 1.352-.622 2.446-1.284 3.272c-.886 1.102-2.14 1.704-3.73 1.79c-1.202.065-2.361-.218-3.259-.801c-1.063-.689-1.685-1.74-1.752-2.964c-.065-1.19.408-2.285 1.33-3.082c.88-.76 2.119-1.207 3.583-1.291a14 14 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757c-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32l-1.757-1.18c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388q.163.07.321.142c1.49.7 2.58 1.761 3.154 3.07c.797 1.82.871 4.79-1.548 7.158c-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69q-.362 0-.739.021c-1.836.103-2.98.946-2.916 2.143c.067 1.256 1.452 1.839 2.784 1.767c1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221"
          fill="currentColor"
        />
      </svg>
    ),
    alt: "Threads",
  },
    {
    href: "https://leetcode.com/u/shubhamvadke/",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
          fill="currentColor"
         />
      </svg>
    ),
    alt: "Leetcode",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
            Contact me for collaboration
          </h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            Reach out today to discuss your project needs and start
            collaborating on something amazing!
          </p>

          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map(({ href, icon }, key) => (
              <a key={key} href={href} target="_blank" className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up">
                {icon}
              </a>
            ))}
          </div>
        </div>

        <form action="https://getform.io/f/blljkemb" method="POST" className="xl:pl-10 2xl:pl-20">
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">
                Name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="Enter Name"
                className="text-field reveal-up"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">
                Email
              </label>

              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="Email Address"
                className="text-field reveal-up"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="label reveal-up">
              Message
            </label>

            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              required
              className="text-field resize-y min-h-32 max-h-80 reveal-up"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
