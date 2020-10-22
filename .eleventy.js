module.exports = function (eleventyConfig) {
    return {
        dir: {
            input: 'src',
        },
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
};
