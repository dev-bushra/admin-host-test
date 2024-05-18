module.exports = {
    siteUrl: "https://find.com/",
    generateRobotsTxt: true,
    sitemapSize: 7000,
    robotsTxtOptions: {
      additionalSitemaps: [
        "https://find.com/products.xml",
      ],
    },
    additionalPaths: async (config) => {
      const result = [];
  
      // required value only
      result.push({
        loc: "/contact",
        changefreq: "daily",
        lastmod: new Date().toISOString(),
        priority: 0.7,
      });
      result.push({
        loc: "/thankyou",
        changefreq: "daily",
        lastmod: new Date().toISOString(),
      });
  
      return result;
    },
  };
  