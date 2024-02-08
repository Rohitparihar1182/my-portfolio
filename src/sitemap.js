
const sitemap = require('sitemap');
const hostname = 'https://master--rohit-parihar-1182-portfolio.netlify.app/';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

const fs = require('fs');

// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());

