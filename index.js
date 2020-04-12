'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/BinHeap.min.js');
} else {
  module.exports = require('./lib/BinHeap.js');
}
