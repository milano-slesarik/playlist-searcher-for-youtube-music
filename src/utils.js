const getUrl = (path) => {
    // returns the URL of the extension's resources
    const _getUrl = typeof chrome !== 'undefined' ? chrome.runtime.getURL : browser.runtime.getURL;
    return _getUrl(path);
}
