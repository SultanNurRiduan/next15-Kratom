// components/GlobalLoader.jsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { OrbitProgress } from "react-loading-indicators";


const GlobalLoader = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 300); // Simulasi delay

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-white flex items-center justify-center">
      <OrbitProgress variant="track-disc" speedPlus="1" easing="ease-in-out" />
    </div>
  ) : null;
};

export default GlobalLoader;
