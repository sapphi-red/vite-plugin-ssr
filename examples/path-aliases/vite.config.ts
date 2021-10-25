import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";

const config: UserConfig = {
  resolve: {
    alias: {
      "#app": __dirname,
    },
  },
  plugins: [react(), ssr()],
};

export default config;