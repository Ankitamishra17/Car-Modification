import { useState } from "react";
import { FAQS } from "./data";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="bg-[#0B0B0B] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="rr-title mb-3 flex items-center gap-3">
          <span className="h-px w-10 bg-[#8C8C8C]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B8B8B8]">
            FAQs
          </span>
        </div>
        <h2 className="rr-heading text-[2.2rem] sm:text-[2.8rem] text-white mb-10">
          COMMON QUESTIONS.
        </h2>

        <div className="flex flex-col">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-[#2A2A2A]">
              <button
                className="rr-faq-btn"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.q}
                <div className="rr-faq-icon">
                  {openFaq === i ? "−" : "+"}
                </div>
              </button>
              {openFaq === i && (
                <p className="rr-sub pb-5 text-[14px] font-light leading-relaxed text-[#B8B8B8]">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}