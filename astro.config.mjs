// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Canonical production URL of the site.
 * Used for canonical URLs, Open Graph tags, sitemap, and RSS feed.
 */
const site = process.env.SITE_URL ?? 'https://mitce.my';

/**
 * Sub-path prefix if deployed to a subfolder; root ('/') by default.
 */
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter(page) {
        return !page.includes('/404') && !page.includes('/draft') && !page.includes('/test');
      },
      serialize(item) {
        item.lastmod = new Date().toISOString();
        item.changefreq = 'daily';
        return item;
      },
    }),
  ],
});
