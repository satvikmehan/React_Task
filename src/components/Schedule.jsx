import schedule from "../data/schedule";
import TimelineCard from "./TimelineCard";

function Schedule() {
  return (
    <section id="schedule" className="section">
      <p className="eyebrow">Hackathon Schedule</p>

      <div className="timeline">
        {schedule.map((item) => (
          <TimelineCard key={item.title} title={item.title} date={item.date} />
        ))}
      </div>
    </section>
  );
}

export default Schedule;
