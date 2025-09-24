const templates = {
    'sidebar-search-wrapper': `
        <div class="sidebar-search-wrapper">
            <input type="text" id="sidebar-playlist-search-input" placeholder="Search playlists">
        </div>
    `,
    'sidebar-no-playlists-message': `
       <div id="sidebar-no-playlists-message">No playlists found</div>
    `,
    'dialog-search-wrapper': `
        <div class="search-wrapper">
            <input type="text" id="playlist-search-input" placeholder="Search playlists">
        </div>
    `,
    'dialog-no-playlists-message': `
        <div id="no-playlists-message">No playlists found</div>
    `,
};

const loadTemplate = (templateName) => {
    const template = document.createElement('template');
    template.innerHTML = templates[templateName].trim();
    return template.content.firstElementChild;
};