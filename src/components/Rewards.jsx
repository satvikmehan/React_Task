import RewardCard from "./RewardCard";

function Rewards() {
  return (
    <section id="rewards" className="section">
      <p className="eyebrow">Rewards and Benefits</p>

      <div className="rewards-grid">
        <RewardCard
          title="Mentorship from Experts"
          description="Work under the guidance of domain professionals and technology mentors."
        />

        <RewardCard
          title="Recognition and Internship Opportunities"
          description="Outstanding performers may receive offers for internships or collaboration opportunities."
        />
      </div>
    </section>
  );
}

export default Rewards;
