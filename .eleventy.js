const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/images');
    
    eleventyConfig.addFilter('fullDate', (dateStr) =>
        DateTime.fromRFC2822(dateStr).toLocaleString(DateTime.DATE_HUGE)
    );

    eleventyConfig.addFilter('dateDay', (dateStr) =>
        DateTime.fromRFC2822(dateStr).toFormat('dd')
    );

    eleventyConfig.addFilter('dateMonth', (dateStr) =>
        DateTime.fromRFC2822(dateStr).toFormat('MMM')
    );

    eleventyConfig.addFilter('dateYear', (dateStr) =>
        DateTime.fromRFC2822(dateStr).toFormat('yyyy')
    );

    return {
        dir: {
            input: 'src',
        },
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
};
