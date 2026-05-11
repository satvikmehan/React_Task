import challenges from "../data/challenges";
import ChallengeCard from "./ChallengeCard";

function Challenges() {
  return (
    <section id="challenges" className="section">
      <p className="eyebrow">Challenges</p>

      <div className="challenge-list mt-12">
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            id={challenge.id}
            title={challenge.title}
            tone={challenge.tone}
            featured={challenge.featured}
          />
        ))}
      </div>
    </section>
  );
}

export default Challenges;
