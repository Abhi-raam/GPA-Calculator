import { defineConfig } from "vite";
// import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";
import { VitePWA  } from "vite-plugin-pwa";
// https://vitejs.dev/config/

const manifestForPlugin = {
	registerType: "prompt",
	includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
	manifest: {
		"name": "ScoreMatevite",
    "short_name": "ScoreMatevite",
		// description: "An app that can show weather forecast for your city.",
		"icons": [
      {
          "src": "maskable.png",
          "sizes": "114x114",
          "type": "image/png",
          "purpose": "any maskable"
        },
      {
          "src" : "logo192.png",
          "sizes" : "192x192",
          "type" : "image/png"
      },
      {
          "src" : "logo256.png",
          "sizes" : "256x256",
          "type" : "image/png"
      },
      {
          "src" : "logo384.png",
          "sizes" : "384x384",
          "type" : "image/png"
      },
      {
          "src" : "logo512.png",
          "sizes" : "512x512",
          "type" : "image/png"
      }
  ],
		theme_color: "#171717",
		background_color: "#e8ebf2",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "portrait",
	},
};
export default defineConfig({
  base: "./",
  plugins: [react(),VitePWA(manifestForPlugin)],
  server: {
    host: "0.0.0.0",
  },
});
