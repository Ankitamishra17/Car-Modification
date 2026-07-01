import { ArrowRight } from "lucide-react";

export default function BottomCTA() {
  return (
    <section className="bg-[#1A1A1A] border-t border-[#3D3D3D] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="rr-heading text-[2.5rem] sm:text-[3.5rem] text-white">
          READY TO RESTORE YOUR VEHICLE?
        </h2>
        <p className="rr-sub mt-4 text-[15px] font-light text-[#B8B8B8]">
          Book a free consultation — we'll inspect your vehicle and recommend the right package.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="/contact" className="rr-cta-btn">
            Book free consultation <ArrowRight size={16} />
          </a>
          <a href="tel:+919876543210" className="rr-cta-ghost">
            Call us now
          </a>
        </div>
      </div>
    </section>
  );
}