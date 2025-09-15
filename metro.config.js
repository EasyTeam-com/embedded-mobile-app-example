const { getDefaultConfig } = require('expo/metro-config');
// const path = require('path');

const config = getDefaultConfig(__dirname);

// Enable symlinks for local development
config.resolver.enableSymlinks = true;

// Add the local UI library to the watch folders
config.watchFolders = [
  // path.resolve(__dirname, '../frontend/packages/ui'),
];

// Configure resolver to handle the local package
config.resolver.nodeModulesPaths = [
  // path.resolve(__dirname, 'node_modules'),
  // path.resolve(__dirname, '../frontend/packages/ui/node_modules'),
];

module.exports = config; 