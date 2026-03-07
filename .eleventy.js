const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  // 复制静态文件
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  // 复制 evolution 目录
  eleventyConfig.addPassthroughCopy({ "src/evolution": "evolution" });

  // 生成日记索引 JSON
  eleventyConfig.addCollection("diaries", function(collection) {
    const evolutionDir = path.join(__dirname, 'src', 'evolution');
    if (!fs.existsSync(evolutionDir)) return [];

    const files = fs.readdirSync(evolutionDir).filter(f => f.endsWith('.md'));
    const diaries = files.map(file => {
      const content = fs.readFileSync(path.join(evolutionDir, file), 'utf-8');
      const titleMatch = content.match(/^#\s+(.+)$/m);
      const dateMatch = content.match(/^date:\s*(.+)$/m);
      return {
        title: titleMatch ? titleMatch[1] : file.replace('.md', ''),
        date: dateMatch ? dateMatch[1] : '',
        file: file
      };
    });

    const outputDir = path.join(__dirname, '_site', 'evolution');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(
      path.join(outputDir, 'diary-index.json'),
      JSON.stringify(diaries, null, 2)
    );
    return diaries;
  });

  return {
    dir: { input: "src", output: "_site" },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
