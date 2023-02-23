/* eslint-disable no-unused-vars */
import React from 'react';

function Banner({ bannerType, children }) {
  return <div className={`${bannerType} banner`}>{children}</div>;
  // const message = status === 'win' ? happyMessage : sadMessage;
  // const className = status === 'win' ? 'happy banner' : 'sad banner';

  // return <div className={className}>{message}</div>;
}

export default Banner;
