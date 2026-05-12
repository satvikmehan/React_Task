import ParticipantCard from "./ParticipantCard";

function About() {
  return (
    <section id="about" className="section">
      <div className="checker checker-left" aria-hidden="true" />
      <div className="checker checker-right" aria-hidden="true" />

      <p className="eyebrow">About Hackathon</p>
      <h2 className="section-heading">
        Who Can
        <br />
        Participate?
      </h2>

      <p className="section-copy">
        Welcome to the Lorem Ipsum Innovation Hackathon, an exhilarating
        platform designed to foster innovation and creativity in advanced
        technology and futuristic solutions. Organized by the National Center
        for Applied Research and supported by Hack2Skill, this hackathon
        invites students and researchers to collaborate and solve critical
        challenges.
      </p>

      <div className="mt-12 flex justify-center">
        <a className="rounded-full bg-[#7c3aed] px-7 py-3 text-sm text-white" href="#participate">
          Apply Now
        </a>
      </div>

      <div className="mt-24">
        <p className="eyebrow">Who Can Participate?</p>

        <div className="participant-grid">
          <ParticipantCard title="Undergraduate Students" />
          <ParticipantCard title="Graduate/Postgraduate Students" />
          <ParticipantCard title="PhD Students/Research Scholars" />
        </div>

        <p className="note">
          Note: Working Professionals are not eligible to participate in the
          hackathon.
        </p>
      </div>

      <div className="overview">
        <div>
          <h2>
            What Is The
            <br />
            Hackathon?
          </h2>

          <p>
            The Lorem Ipsum Innovation Hackathon is a flagship event crafted to
            uncover pioneering ideas in science, technology, and system design.
            As technological advancements accelerate globally, this initiative
            aims to bridge academic knowledge with practical implementation.
          </p>

          <p className="mt-7">
            Participants will work on challenge statements designed by leading
            R&amp;D units, applying theoretical expertise to build innovative
            prototypes and solutions with potential real-world application.
          </p>

          <div className="countdown-row">
            <span className="countdown-label">Submission Closing In:</span>
            <span className="time-box">16d 12h 42m 31s</span>
            <a className="glass-button" href="#home">
              Register Now
            </a>
          </div>
        </div>

        <div className="collage" aria-hidden="true">
          <span className="collage-card one">
            <img src="/assets/1.jpg" alt="" />
          </span>
          <span className="collage-card two">
            <img src="/assets/3.jpg" alt="" />
          </span>
          <span className="collage-card three">
            <img src="/assets/4.jpg" alt="" />
          </span>
          <span className="collage-card four">
            <img src="/assets/5.jpg" alt="" />
          </span>
          <span className="collage-card five">
            <img src="/assets/6.jpg" alt="" />
          </span>
          <span className="collage-line horizontal" />
          <span className="collage-line vertical" />
        </div>
      </div>
    </section>
  );
}

export default About;
