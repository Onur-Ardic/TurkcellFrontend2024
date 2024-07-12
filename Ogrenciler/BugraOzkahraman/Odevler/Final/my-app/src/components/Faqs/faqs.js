import faqsData from "../Faqs/db.json";

const FAQs = () => {
  return (
    <div className="faqs d-flex text-center row ">
      <div>
        <h3 className="fw-bold">Faqs </h3>{" "}
      </div>
      {faqsData.faqs.map((faq) => (
        <div key={faq.id} className="faq-item">
          <h4>{faq.question}</h4>
          <hr />
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
