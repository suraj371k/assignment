import React from 'react';
import TabsWidget from './Components/TabWidget';
import GalleryWidget from './Components/GalleryWidget';

const App = () => {
  return (
    <div className="min-h-screen flex bg-[#282828]">
      <div className="w-1/2"></div>

      <div className="w-1/2 p-8 flex flex-col space-y-8">
        <div>
          <TabsWidget />
          <div className="border-b-4 border-[#464444] mt-10 w-[600px] ml-5"></div>
        </div>
        <div>
          <GalleryWidget />
          <div className="border-b-4 border-[#464444] mt-10 w-[600px] ml-5"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
