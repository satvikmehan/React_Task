import faqData from "../data/faq";
import FAQItem from "./FAQItem";

function FAQ() {
  return (
    <section id="faq" className="section faq-section">
      <div className="faq-visual" aria-hidden="true" />
      <p className="eyebrow">Frequently Asked Question</p>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <FAQItem key={item.question} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default FAQ;
