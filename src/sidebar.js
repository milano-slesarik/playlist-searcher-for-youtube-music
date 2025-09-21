// Manages search functionality in the sidebar playlists

function initializeSidebarPlaylistFilter() {
    const playlistSection = document.querySelector(
        'ytmusic-guide-section-renderer:nth-of-type(2)' // the first one is Home/Explore/Library...
    );

    if (!playlistSection || playlistSection.querySelector(
        '#sidebar-playlist-search-input')) {
        return;
    }

    const playlistsContainer = playlistSection.querySelector('#items');
    const newPlaylistButton = playlistSection.querySelector('#buttons');

    if (!playlistsContainer || !newPlaylistButton) {
        return;
    }

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'sidebar-playlist-search-input';
    searchInput.placeholder = 'Search playlists';

    const wrapper = document.createElement('div');
    wrapper.className = 'sidebar-search-wrapper';
    wrapper.appendChild(searchInput);

    const noResultsMessage = document.createElement('div');
    noResultsMessage.id = 'sidebar-no-playlists-message';
    noResultsMessage.textContent = 'No playlists found';

    newPlaylistButton.insertAdjacentElement('afterend', wrapper);
    playlistsContainer.insertAdjacentElement('afterend', noResultsMessage);

    const handleFilter = (event) => {
        const searchTerm = event.target.value.toLowerCase().trim();

        const playlistItems = playlistsContainer.querySelectorAll(
            'ytmusic-guide-entry-renderer');
        let visibleCount = 0;

        playlistItems.forEach(item => {
            const titleElement = item.querySelector('.title');

            if (titleElement) {
                const title = titleElement.textContent.toLowerCase();
                const isVisible = title.includes(searchTerm);
                item.style.display = isVisible ? '' : 'none';
                if (isVisible) visibleCount++;
            }
        });

        if (searchTerm && visibleCount === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    };

    searchInput.addEventListener('input', handleFilter);
}


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeSidebarPlaylistFilter, 1000);
});

const sidebarObserver = new MutationObserver(() => {
    initializeSidebarPlaylistFilter();  // this is probably too heavy
});

sidebarObserver.observe(document.body, {
    childList: true,
    subtree: true
});