// Change this to your repository name
var nugtu12gbPATH = '';
 
// Choose a different app prefix name
var APP_PREFIX = 'nugtu12gb_';
 
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_133';
 
// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${nugtu12gbPATH}/`,
  `${nugtu12gbPATH}/index.html`,
  `${nugtu12gbPATH}/gstyle.cs`,
  `${nugtu12gbPATH}/materialIcons.woff2`,
  `${nugtu12gbPATH}/script.js`,
  `${nugtu12gbPATH}/jquery-3.6.0.min.js`
]