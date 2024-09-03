import React, { useState } from 'react';

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabList = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'recommended', label: 'Recommended' },
  ];

  const getTabIndex = (tabId) => tabList.findIndex(tab => tab.id === tabId);

  return (
    <div className="w-[75%] p-4 shadow-2xl shadow-black text-xl rounded-lg bg-[#2d2d2d] text-white mt-12 relative">
      <div className="flex space-x-10 h-16 py-2 rounded-full bg-[black] justify-center relative">
        
        <div
          className="absolute top-0 left-0 h-full w-1/3 rounded-xl transition-all
           duration-300 ease-in-out bg-[#353434] shadow-lg"
          style={{
            transform: `translateX(${getTabIndex(activeTab) * 100}%)`,
            boxShadow: `0 4px 15px rgba(0, 0, 0, 0.5)`
          }}
        ></div>

        {tabList.map((tab) => (
          <button
            key={tab.id}
            className={`relative z-10 px-10 py-3 rounded-2xl whitespace-nowrap ${
              activeTab === tab.id ? 'text-white' : ''
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="mt-4 text-[#b6b3b3]">
        {activeTab === 'about' && (
          <div>
            <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</p>
            <p className="pt-5">
              I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them have just started school, so my calendar is usually blocked between 9-10 AM. This is...
            </p>
          </div>
        )}
        {activeTab === 'experience' && (
          <div>
            <p>As a dedicated frontend developer with 4 years of experience, I have honed my skills in crafting intuitive and responsive user interfaces.</p>
            <p className="pt-5">
              My expertise spans across a variety of technologies including HTML, CSS, JavaScript, React, and Tailwind CSS...
            </p>
          </div>
        )}
        {activeTab === 'recommended' && (
          <div>
            <p>Over the course of my 4-year journey as a frontend developer, I’ve worked on a variety of projects that have been highly recommended.</p>
            <p className="pt-5">
              By clients and peers alike. My focus on creating efficient, visually appealing, and user-friendly web applications has garnered positive feedback and referrals. Whether it's building responsive layouts or optimizing performance...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsWidget;
