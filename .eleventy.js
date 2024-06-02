module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");

  // Collections
  eleventyConfig.addCollection("maps", (collectionApi) => {
    return collectionApi.getFilteredByGlob("./src/maps/**/*.md").reverse();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "_layouts",
    },
    markdownTemplateEngine: "njk",
  };
};
