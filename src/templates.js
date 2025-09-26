const magGlassSvg = `
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
  <path 
    d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
    fill="currentColor"
    stroke="currentColor"
    stroke-width="0.5"
    fill-rule="evenodd"
    clip-rule="evenodd"
  />
</svg>`;

const templates = {
    'sidebarSearchWrapper': `
        <div id="ps4ytm-sidebar-wrapper" class="ps4ytm-search-wrapper">
            <span class="search-icon" aria-hidden="true">
                ${magGlassSvg}
            </span>
            <input type="text" class="ps4ytm-search-input" id="sidebar-playlist-search-input" placeholder="Search playlists" autocomplete="off">
        </div>
    `,
    'sidebar-no-playlists-message': `
       <div id="sidebar-no-playlists-message">No playlists found</div>
    `,
    'dialogSearchWrapper': `
        <div id="ps4ytm-dialog-wrapper" class="ps4ytm-search-wrapper">
            <span class="search-icon" aria-hidden="true">
                ${magGlassSvg}
            </span>
            <input type="text" class="ps4ytm-search-input" id="playlist-search-input" placeholder="Search playlists" autocomplete="off">
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