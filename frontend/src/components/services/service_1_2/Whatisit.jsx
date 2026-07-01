import { useState } from "react";
import { PPF_FEATURES, CERAMIC_FEATURES } from "./data";

export default function WhatIsIt() {
  const [activeTab, setActiveTab] = useState("ppf");

  return (
    <section className="bg-[#0B0B0B] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="ppf-title mb-3 flex items-center gap-3">
          <span className="h-px w-10 bg-[#8C8C8C]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B8B8B8]">
            What's the difference
          </span>
        </div>
        <h2 className="ppf-heading text-[2.2rem] sm:text-[2.8rem] text-white mb-8">
          PPF OR CERAMIC — OR BOTH?
        </h2>

        {/* Tabs */}
        <div className="flex gap-3 mb-10">
          <button
            className={`ppf-tab${activeTab === "ppf" ? " active" : ""}`}
            onClick={() => setActiveTab("ppf")}
          >
            Paint Protection Film
          </button>
          <button
            className={`ppf-tab${activeTab === "ceramic" ? " active" : ""}`}
            onClick={() => setActiveTab("ceramic")}
          >
            Ceramic Coating
          </button>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {(activeTab === "ppf" ? PPF_FEATURES : CERAMIC_FEATURES).map(
            ({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#3D3D3D] bg-[#1A1A1A] p-6 transition-all hover:border-[#8C8C8C]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#3D3D3D] bg-[#2A2A2A]">
                  <Icon size={18} className="text-[#8C8C8C]" strokeWidth={1.75} />
                </div>
                <h3 className="ppf-title text-[15px] font-semibold text-white mb-2">
                  {title}
                </h3>
                <p className="ppf-sub text-[13px] font-light leading-relaxed text-[#B8B8B8]">
                  {desc}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}