import { useTranslations } from "next-intl";
import { AccordionBody, AccordionButton } from "../styles";

const Faqs = () => {
  const t = useTranslations("ProductDetail");
  const faqs = [
    { id: 1, question: t("question1"), answer: t("answer1") },
    { id: 2, question: t("question2"), answer: t("answer2") },
    { id: 3, question: t("question3"), answer: t("answer3") },
    { id: 4, question: t("question4"), answer: t("answer4") },
    { id: 5, question: t("question5"), answer: t("answer5") },
  ];

  return (
    <div className="accordion" id="faqsAccordion">
      {faqs.map((faq) => (
        <div key={faq.id} className="accordion-item">
          <h2 className="accordion-header">
            <AccordionButton
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${faq.id}`}
              aria-expanded="false"
              aria-controls={`collapse${faq.id}`}
            >
              {faq.question}
            </AccordionButton>
          </h2>
          <div
            id={`collapse${faq.id}`}
            className="accordion-collapse collapse"
            data-bs-parent="#faqsAccordion"
          >
            <AccordionBody className="accordion-body">
              {faq.answer}
            </AccordionBody>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
