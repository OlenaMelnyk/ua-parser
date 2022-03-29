import React from 'react';
import './App.scss';
import UAParser from 'ua-parser-js';

const getDeviceInfo = () => {
  // const { userAgent } = navigator;
  const infoSections = [];
  const parser = new UAParser();

  const userOS = parser.getOS();
  const userDevice = parser.getDevice();
  const userBrowser = parser.getBrowser();

  if (userOS && userOS.name && userOS.version) {
    infoSections.push({ name: 'OS', value: `${userOS.name} ${userOS.version}` });
  }

  if (userDevice && userDevice.vendor && userDevice.model) {
    infoSections.push({ name: 'Device', value: `${userDevice.vendor} ${userDevice.model}` });
  } else {
    infoSections.push({ name: 'Device', value: 'N/A' });
  }

  if (userBrowser && userBrowser.name && userBrowser.version) {
    infoSections.push({ name: 'Browser', value: `${userBrowser.name} ${userBrowser.version}` });
  }

  if (window) {
    if (window.screen) {
      infoSections.push({ name: 'Screen resolution', value: `${window.screen.width} x ${window.screen.height}` });
      infoSections.push({ name: 'Available screen space', value: `${window.screen.availWidth} x ${window.screen.availHeight}` });
    }

    infoSections.push({ name: 'Browser width size', value: `${window.innerWidth} x ${window.innerHeight}` });
    infoSections.push({ name: 'Device pixel ratio', value: window.devicePixelRatio });
  }

  // parser.setUA(userAgent);
  // const result = parser.getResult();

  // eslint-disable-next-line no-console
  console.log('*** infoSections', infoSections);
  // const deviceType = (result.device && result.device.type) || 'desktop';

  // eslint-disable-next-line no-console
  // console.log('*** device type', deviceType);

  return infoSections;
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
