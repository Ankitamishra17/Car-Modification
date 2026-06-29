import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-32"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
        <span className="text-[#D4AF37] uppercase tracking-[4px] text-sm font-semibold">
          We Are Here To Help
        </span>

        <h2
          className="mt-4 text-4xl md:text-6xl font-bold text-white leading-tight"
          style={{ fontFamily: "serif" }}
        >
         Please Feel Free To Contact Us 
          <span className="block text-[#D4AF37]">If You Have Any Question!</span>
        </h2>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Get a free consultation from our design experts and create interiors
          that blend luxury, functionality, and elegance.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 bg-[#D4AF37] text-black px-8 py-4 font-semibold hover:bg-white transition-all duration-300"
          >
            Get Free Consultation
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition"
            />
          </a>
        </div>
      </div>

      {/* Bottom Contact Strip */}
      <div className="relative z-10 mt-24 border-t border-[#D4AF37]/30 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-[#D4AF37] font-semibold">Call Us</h4>
              <p className="text-white mt-2">+91 98765 43210</p>
            </div>

            <div>
              <h4 className="text-[#D4AF37] font-semibold">Email Us</h4>
              <p className="text-white mt-2">info@yourdomain.com</p>
            </div>

            <div>
              <h4 className="text-[#D4AF37] font-semibold">Visit Us</h4>
              <p className="text-white mt-2">Delhi NCR, India</p>
            </div>

            <div>
              <h4 className="text-[#D4AF37] font-semibold">Working Hours</h4>
              <p className="text-white mt-2">Mon - Sat : 9AM - 7PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
