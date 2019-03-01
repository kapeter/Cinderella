// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
    // 控制页面在内存`buffer`中缓存的时间，单位是 ms
    onDemandEntries: {
        // Make sure entries are not getting disposed.
        maxInactiveAge: 1000 * 60 * 60
    }        
})