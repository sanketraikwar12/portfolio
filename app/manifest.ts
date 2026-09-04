import type {MetadataRoute} from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sanket Raikwar Portfolio",
    short_name: "Sanket",
    description:
      "Modern developer portfolio for Sanket Raikwar, AI + Full Stack Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#090f1d",
    theme_color: "#0ea5e9",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-384x384.png",
        sizes: "384x384",
        type: "image/png"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
}
