//import React from 'react';

const Logo = ({ className = "h-12" }: { className?: string }) => (
  <img
    src="/logo.svg"
    alt="BAAZ Clearance & Forwarding Group"
    className={className}
  />
);

export default Logo;