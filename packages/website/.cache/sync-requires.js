const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/slav/projects/portfolio/packages/website/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/slav/projects/portfolio/packages/website/src/pages/index.js")))
}

