import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-0.5">
      <a href="/">
        <img src="/logo.png" alt="logo" className="w-10 h-auto" />
      </a>
      <h1 className="text-xs font-bold text-primary">Borneo <br /><span className="text-orange-400">Royal Green</span></h1>
    </div>
  );
};

export default Logo;
