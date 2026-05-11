function TimelineCard({ title, date }) {
  return (
    <article className="timeline-card">
      <h3>{title}</h3>
      <div className="timeline-bar" aria-hidden="true" />
      <p>{date}</p>
    </article>
  );
}

export default TimelineCard;
