import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://xxxxxuan.github.io",
  integrations: [sitemap()],
});