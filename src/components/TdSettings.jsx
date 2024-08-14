
import React from 'react';

const themes = ['light', 'dark', 'blue', 'green'];

function TdSettings({ onThemeChange }) {
  return (
    <div className="flex gap-2 mt-6">
      {themes.map(theme => (
        <button
          key={theme}
          onClick={() => onThemeChange(theme)}
          className={`p-2 rounded-md bg-${theme}-500 text-white`}
        >
          {theme}
        </button>
      ))}
    </div>
  );
}

export default TdSettings;
