function FAQItem({ item, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="faq-row">
      <span className="faq-index">{number}</span>
      <h3>{item.question}</h3>
      <p>{item.answer}</p>
    </article>
  );
}

export default FAQItem;
