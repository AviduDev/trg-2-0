import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { imageService } from "@unpic/astro/service";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  image: {
    service: imageService(),
  },
});
