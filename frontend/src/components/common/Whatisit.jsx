import { useState } from "react";
import { SERVICES } from "../../data/services";


export default function WhatIsIt({
  subtitle,
  heading,
  tabs,
}) {
  const [activeTab, setActiveTab] = useState(
    tabs?.[0]?.id
  );

  const currentTab = tabs?.find(
    (tab) => tab.id === activeTab
  );

  return (
    <section className="bg-[#0B0B0B] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-10 bg-[#8C8C8C]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B8B8B8]">
            {subtitle}
          </span>
        </div>

        <h2 className="text-[2.2rem] sm:text-[2.8rem] text-white mb-8 font-heading">
          {heading}
        </h2>

        {/* Tabs */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {tabs?.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full border text-sm font-medium transition-all
              ${
                activeTab === tab.id
                  ? "bg-[#8C8C8C] border-[#8C8C8C] text-[#0B0B0B]"
                  : "border-[#3D3D3D] text-[#B8B8B8] hover:border-[#8C8C8C] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {currentTab?.features?.map(
            ({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#3D3D3D] bg-[#1A1A1A] p-6 hover:border-[#8C8C8C]"
              >
                {Icon && (
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#3D3D3D] bg-[#2A2A2A]">
                    <Icon
                      size={18}
                      className="text-[#8C8C8C]"
                    />
                  </div>
                )}

                <h3 className="text-white text-[15px] font-semibold mb-2">
                  {title}
                </h3>

                <p className="text-[#B8B8B8] text-[13px] leading-relaxed">
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