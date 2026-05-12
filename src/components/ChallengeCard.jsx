function ChallengeCard({ id, image, title, tone, featured }) {
  return (
    <article className="challenge-row">
      <span className="challenge-number">{id}</span>
      <span className={`challenge-thumb ${tone}`}>
        <img src={image} alt="" />
      </span>

      <div>
        <p>{title}</p>
        {featured && (
          <a className="learn-more" href="#home">
            Learn More
          </a>
        )}
      </div>

      <a className="challenge-arrow" href="#home" aria-label={`Open challenge ${id}`}>
        &#8599;
      </a>
    </article>
  );
}

export default ChallengeCard;
