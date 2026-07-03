import { ArrowRight } from "lucide-react";

export default function BottomCTA({
  title,
  description,
  buttonText,
  buttonLink,
  phone,
}) {
  return (
    <section className="bg-[#1A1A1A] border-t border-[#3D3D3D] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[2.5rem] sm:text-[3.5rem] text-white">{title}</h2>

        <p className="mt-4 text-[15px] text-[#B8B8B8]">{description}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={buttonLink}
            className="inline-flex items-center gap-2 rounded-full bg-[#8C8C8C] px-6 py-3 font-semibold text-[#0B0B0B] transition hover:bg-white"
          >
            {buttonText}
            <ArrowRight size={16} />
          </a>

          <a
            href={`tel:${phone}`}
            className="inline-flex items-center rounded-full border border-[#3D3D3D] px-6 py-3 text-[#B8B8B8] transition hover:border-[#8C8C8C] hover:text-white"
          >
            Call us now
          </a>
        </div>
      </div>
    </section>
  );
}
