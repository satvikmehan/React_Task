const steps = [
  {
    title: "Register for Hackathon",
    description: "Sign up now to participate in the hackathon.",
    icon: "clipboard",
  },
  {
    title: "Form your Teams",
    description: "Collaborate with like-minded individuals to form teams.",
    icon: "users",
  },
  {
    title: "Choose a Challenge",
    description: "Select from the list of challenges provided.",
    icon: "flag",
  },
  {
    title: "Innovate and Develop",
    description: "Work on your solutions, supported by resources and mentorship.",
    icon: "rocket",
  },
  {
    title: "Submit Your Solution",
    description: "Present your innovative ideas for evaluation.",
    icon: "bulb",
  },
];

function StepIcon({ name }) {
  const paths = {
    clipboard: (
      <>
        <path d="M9 5h6" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
        <path d="M7 3h10v4H7z" />
        <path d="M6 5H4v16h16V5h-2" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-8 0v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M2 21v-2a4 4 0 0 1 3-3.87" />
        <path d="M8 3.13a4 4 0 0 0 0 7.75" />
      </>
    ),
    flag: (
      <>
        <path d="M5 21V4" />
        <path d="M5 4h10l-2 5 2 5H5" />
        <path d="M19 21H3" />
      </>
    ),
    rocket: (
      <>
        <path d="M5 15c-1 1-2 4-2 4s3-1 4-2" />
        <path d="M9 15 5 11l7-7c4-1 7 2 6 6l-7 7-4-4" />
        <circle cx="14" cy="8" r="1.5" />
      </>
    ),
    bulb: (
      <>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.5 14a6 6 0 1 1 7 0c-.9.6-1.5 1.7-1.5 3h-4c0-1.3-.6-2.4-1.5-3z" />
        <path d="M12 2v2" />
        <path d="m4.9 4.9 1.4 1.4" />
        <path d="m19.1 4.9-1.4 1.4" />
      </>
    ),
  };

  return (
    <span className="step-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {paths[name]}
      </svg>
    </span>
  );
}

function Participation() {
  return (
    <section id="participate" className="section why">
      <p className="eyebrow">Why Participate?</p>

      <div className="orbit">
        <div className="benefit-band left">
          <div>
            <h3>Mentorship from Experts</h3>
            <p>
              Gain invaluable insights and guidance from experienced
              technologists and domain experts.
            </p>

            <h3>Networking</h3>
            <p>
              Connect with peers, professionals, and innovation leaders from
              across the nation.
            </p>
          </div>
        </div>

        <img src="/assets/astronaut.png" alt="" />

        <div className="benefit-band right">
          <div>
            <h3>Internship Opportunities</h3>
            <p>
              Stand a chance to secure internships at top institutions and
              innovation labs.
            </p>

            <h3>Real-World Impact</h3>
            <p>
              Contribute to meaningful challenges that aim to improve lives and
              systems at scale.
            </p>
          </div>
        </div>
      </div>

      <p className="eyebrow mt-10">How To Participate?</p>

      <div className="steps-grid">
        {steps.map((step) => (
          <article className="step-card" key={step.title}>
            <StepIcon name={step.icon} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Participation;
