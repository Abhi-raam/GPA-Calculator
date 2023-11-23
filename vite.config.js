import { defineConfig } from "vite";
// import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),VitePWA(manifestForPlugin)],
  server: {
    host: "0.0.0.0",
  },
});
