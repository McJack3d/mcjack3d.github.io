module.exports = function (eleventyConfig) {
  /* Markdown — keep it simple, allow raw HTML inside .md files
     so existing bilingual <div data-lang-block="en|fr"> blocks keep working. */
  const md = require("markdown-it")({
    html: true,
    linkify: true,
    typographer: false
  });
  eleventyConfig.setLibrary("md", md);

  /* Date filter for templates: {{ post.date | dateISO }} → "2026-05-14" */
  eleventyConfig.addFilter("dateISO", (d) => {
    const date = d instanceof Date ? d : new Date(d);
    return date.toISOString().slice(0, 10);
  });

  /* Short date filter: {{ post.date | dateShort }} → "May 2026" */
  eleventyConfig.addFilter("dateShort", (d) => {
    const date = d instanceof Date ? d : new Date(d);
    return date.toLocaleString("en", { month: "short", year: "numeric" });
  });

  /* Collection of all travel posts, sorted newest first */
  eleventyConfig.addCollection("trips", (api) =>
    api.getFilteredByGlob("_src/travel/*.md").sort((a, b) => b.date - a.date)
  );

  return {
    dir: {
      input: "_src",
      output: ".",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
