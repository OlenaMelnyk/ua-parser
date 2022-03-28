import React from 'react';
import './App.scss';
import UAParser from 'ua-parser-js';

const getDeviceInfo = () => {
  const { userAgent } = navigator;

  const parser = new UAParser();

  parser.setUA(userAgent);
  const result = parser.getResult();

  // eslint-disable-next-line no-console
  console.log('*** result', result);
  const deviceType = (result.device && result.device.type) || 'desktop';

  // eslint-disable-next-line no-console
  console.log('*** device type', deviceType);

  return { deviceType };
};

export const App: React.FC = () => {
  return (
    <div className="starter">
      <header className="starter-header">
        <p>Get device Info</p>
        <button onClick={getDeviceInfo} type="button">Get</button>
      </header>
    </div>
  );
};
