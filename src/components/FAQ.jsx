import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"
import InfoIcon from "../assets/info.svg";
import Benefits from "./Benefits"

function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Toggle the answer visibility
  function toggleAnswer(questionIndex) {
    if (activeQuestion === questionIndex) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(questionIndex);
    }
  }

  return (
    <div>
      <Header />
      <div>
        <p className="text-center bg-red-400 p-4 w-[280px] m-auto mt-4 text-white">
          FAQ - Frequently Asked Questions
        </p>

        <div className="s-full rounded-lg w-[280px] md:w-[750px] m-auto mt-4 mb-4">
          {faqData.map((faq, index) => (
            <div className="p-2 px-4" key={index}>
              <div
                className={`question cursor-pointer flex gap-2 border-b-2 p-2 transition duration-300 ${
                  activeQuestion === index ? "mb-4" : ""
                }`}
                onClick={() => toggleAnswer(index)}
              >
                <img className="w-6" src={InfoIcon} alt="" />
                <p>{faq.question}</p>
              </div>
              {activeQuestion === index && (
                <p
                  className={`ml-6 answer opacity-0 transition-opacity duration-300 ${
                    activeQuestion === index ? "opacity-100" : ""
                  }`}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Benefits />
      <Footer />
    </div>
  );
}

const faqData = [
  {
    question: "What are the benefits of joining the society?",
    answer:
      "There are several benefits of joining the Society; which include obtaining a loan of up to twice of 70% of the amount of savings a member has with the Society; affording members’ access to loan/credit without collateral; competitive low-interest rates; and helping members plan their finances and therefore meet their goals for the future.",
  },
  {
    question: "Who is eligibile to be a member of the Society?",
    answer:
      "A staff member of Honeyland Schools and Ross College, on permanent appointment, can become a member of the Society.",
  },
  {
    question: "How do I become a member?",
    answer: `Make your interest known to representative of your campus, obtain a membership form for the amount stated, fill and you can become a member. 
    (Membership for is to be fill on the website)`,
  },
  {
    question: "Can I see the Bye-Law before joining?",
    answer: (
      <div>
        you can{" "}
        <span className="text-blue-300">
          <Link to="/bye-law">Click here </Link>
        </span>{" "}
        or go to RESOURCES to read more on the bye laws.
      </div>
    ),
  },
  {
    question: "Is there any fee to be paid before joining?",
    answer:
      "Yes, a non-refundable registration fee of One Thousand Naira Only (N1,000) must be paid to the bank after.",
  },
  {
    question: "How do I get to know my balances?",
    answer:
      "Every member is given login details upon registration. All transactions are thereafter recorded on the dashboard of the member on the website.",
  },
  {
    question: "Can I withdraw my membership?",
    answer: `Yes. A person ceases to be a member of the Society if such a person writes formally to the President requesting for ‘withdrawal of membership’ from the Society. 
    However, if the member withdrawing from the membership will still be with the school system, 5% of the member's total savings will be deducted as Administration charges. Subsequently, the school will stop the member’s deductions to the Society
    It will however take 3 - 6 months for such member to join again if interest is made. 

If the member withdrawing will be leaving the school system, the 5% won't be deducted. `,
  },
  {
    question: "When do I qualify for a loan?",
    answer: `A cooperator need to have spent six months in the cooperative to be able to access a loan.

    A co-operator is qualified to access two times his/her savings balance as a loan after six months of joining the society, with consistent deductions.

    Nevertheless, please note that all loan applications are subject to applicant’s ability to pay-back within the maximum repayment period for the specific type of loan being applied for, without taking into consideration overtime payment.
`,
  },
  {
    question: "How do I apply for loan?",
    answer: `After paying the stated amount for a loan form to the cooperative account, you will appropriately fill in the details on the loan form on the website, and also get two financial members of the society to fill their part as sureties. The admin will thereafter approve and your loan after confirming the accuracy of your details, then your loan will be received by you in your account. 

Note that, purchases (equipment loan) can only be obtain in February and October only.`,
  },
  {
    question: "How long does it take for loan applied for to be ready?",
    answer: `It takes approximately ten (10) working days for application for all loan types to be ready. 
(Please, check the loan page for the current loan application form amount.)`,
  },
  {
    question: `Is there interest paid on loan, and what is the interest rate charge?`,
    answer: `Yes, there's interest paid on loan. 
The Society charges 5% interest rate on all normal loans with 12 months and 8% within 18 months. 
A cooperator who applies for  purchases (equipment loan) will pay an interest of 4% within 5 months.
Payment for December edibles too is for 5 months at 4% interest rate`,
  },
  {
    question: `How do I get my money when it is ready?`,
    answer: `Your accounts will be credited through e-payment and you will be notified by your bank through SMS alert.`,
  },
  {
    question: `If I pay up my loan through cash deposit, can I apply immediately?`,
    answer: `Yes, you are allowed to apply for a fresh loan as soon as you offset the former loan collected.`,
  },
  {
    question: `How do I increase my monthly contribution?`,
    answer: `Please, inform your campus representative about your intention; give them your data and amount you intend to increase to and this information will be pass across to the relevant department. `,
  },
  {
    question: `How much dividends will I receive?`,
    answer: `Dividend is dependent on the Surplus declared during the accounting period (August - July). However, dividend due to each member is based on the savings balance of the particular member and the amount of loan repaid during the year under review.`,
  },
  {
    question: `Who do I contact when I have complaint?`,
    answer: `Contact your campus representative. Please, check the contact in our "Contact Us" page.`,
  },
  // Add more FAQ data here
];

export default FAQ;
