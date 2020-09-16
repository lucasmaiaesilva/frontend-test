import React from 'react';

const Display = ({ data }) => {
  return (
    <div className="max-w-4xl p-4 mt-12 lg:mt-24 mx-auto">
      <div className="bg-fonts-lighter rounded p-5 text-2xl text-fonts-displaycolor">
        <div>VALOR DO FORM:</div>
        { data }
      </div>
    </div>
  );
};

export default Display;
