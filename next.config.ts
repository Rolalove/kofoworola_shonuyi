import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1kfkS45vN6Z4DeLL4p_RK4DPIlsC3avNq/view?usp=sharing",
        permanent: false, // Set to false so you can change the destination URL in the future if needed
      },
    ];
  },
};

export default nextConfig;
