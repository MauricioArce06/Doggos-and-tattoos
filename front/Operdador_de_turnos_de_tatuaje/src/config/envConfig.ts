import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";

export default defineConfig({
  plugins: [react()],
});
