const path = require('path');

module.exports= {
  process(src, config, options) {
    return 'module.exports = ' + JSON.stringify(path.basename(src)) + ';';
  },
};
