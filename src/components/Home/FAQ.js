import React, { useState } from "react";
import "./FAQ.css"; // Assuming you have some custom CSS for styling

function FAQ() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>FAQs</h2>
      <div className="accordion" id="faq">
        {faqData.map((item, index) => (
          <div className="card" key={index}>
            <div
              className="card-header"
              id={`faqhead${index + 1}`}
              onClick={() => handleItemClick(index)}
            >
              <button
                className={`btn btn-header-link ${
                  openItem === index ? "" : "collapsed"
                }`}
                aria-expanded={openItem === index ? "true" : "false"}
                aria-controls={`faq${index + 1}`}
              >
                {item.question}
              </button>
            </div>
            <div
              id={`faq${index + 1}`}
              className={`collapse ${openItem === index ? "show" : ""}`}
              aria-labelledby={`faqhead${index + 1}`}
              data-parent="#faq"
            >
              <div className="card-body">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const faqData = [
  {
    question:
      "How is Application Management System useful in Education Industry?",
    answer: [
      <p key="1">
        An application management system digitizes application forms,
        streamlining the process for both applicants and administrators.
        Applicants can save progress, upload documents, and receive instant
        confirmation. Real-time updates on application status and dynamic fee
        collection enhance transparency and convenience. Administrators benefit
        from easy application tracking, reducing errors and delays.
      </p>,
      // Add more paragraphs as needed
    ],
  },
  {
    question:
      "How can ExtraaEdge Application Management System benefit education institutes?",
    answer: [
      <ul>
        <p key="1">
          ExtraaEdge Application Management System can help you with the
          following:
        </p>
        <li key="2">It customises forms to meet your institute's needs.</li>
        <li key="2">
          It provides a better interface for a better user experience, resulting
          in higher prospect engagement.
        </li>
        <li key="2">
          The system is mobile-friendly, allowing candidates to complete it on
          the go.
        </li>
      </ul>,
    ],
  },
  {
    question:
      "When should educational institutes opt for an Application Management System?",
    answer: [
      <p>
        Educational institutions should use Application Management Software if
        they are experiencing any of the following problems:
      </p>,
      <ul>
        <li>
          If you have an ineffective real-time application form tracking and
          management, which results in lead leakages.
        </li>
        <li>If you don't have any system to track student dropout rates.</li>
      </ul>,
    ],
  },
  {
    question:
      " How are students assessed and shortlisted using Application Management System?",
    answer: [
      <p>
        Our student application management system simplifies the evaluation and
        shortlisting process for educational institutions. Customized online
        forms gather all necessary documents, facilitating efficient candidate
        selection based on predefined criteria. Additionally, our system
        minimizes errors and ensures data security through features like OTP
        authentication.
      </p>,
    ],
  },
  {
    question:
      "How to choose the right & best education CRM for your institute?",
    answer: [
      <p>
        Education CRM software to help you get deeper insights into prospects
        journey, automate the tasks you hate, and close more admissions faster.
      </p>,
    ],
  },
  // Add more FAQ items as needed
];

export default FAQ;
