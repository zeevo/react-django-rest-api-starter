const path = require('path');

const forDjango = 'content/';

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../../api', 'content'),
  entryPath: path.resolve(__dirname, '../', 'src/index.jsx'),
  templatePath: path.resolve(__dirname, '../', 'src/index.html'),
  imagesFolder: forDjango + 'images',
  fontsFolder: forDjango + '/fonts',
  cssFolder: forDjango + 'css',
  jsFolder: forDjango + 'js',
};
