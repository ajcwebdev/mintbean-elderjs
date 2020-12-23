const { hookInterface, hookEntityDefinitions } = require('@elderjs/elderjs');

module.exports = {
  all: () => [{ slug: '/' }],
  permalink: ({ request }) => request.slug,
  data: ({ data }) => {
    data.hookInterface = hookInterface;
    data.hookEntityDefinitions = hookEntityDefinitions;
    return data;
  },
};
