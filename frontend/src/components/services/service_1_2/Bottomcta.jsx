import { ArrowRight } from "lucide-react";

export default function BottomCTA() {
  return (
    <section className="bg-[#1A1A1A] border-t border-[#3D3D3D] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="ppf-heading text-[2.5rem] sm:text-[3.5rem] text-white">
          READY TO PROTECT YOUR PAINT?
        </h2>
        <p className="ppf-sub mt-4 text-[15px] font-light text-[#B8B8B8]">
          Book a free consultation — we'll inspect your car and recommend the right package.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="/contact" className="ppf-cta-btn">
            Book free consultation <ArrowRight size={16} />
          </a>
          <a href="tel:+919876543210" className="ppf-cta-ghost">
            Call us now
          </a>
        </div>
      </div>
    </section>
  );
}