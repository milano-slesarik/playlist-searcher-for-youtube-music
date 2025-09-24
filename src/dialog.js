// Manages search functionality in the "Add to playlist" dialog

const initializePlaylistFilter = () => {
    const dialog = document.querySelector('ytmusic-add-to-playlist-renderer');
    if (!dialog || dialog.querySelector('#playlist-search-input')) {
        return;
    }

    const heading = dialog.querySelector('.section-heading');
    const playlistsContainer = dialog.querySelector('#playlists');

    if (!heading || !playlistsContainer) {
        return;
    }

    const wrapper = loadTemplate('dialog-search-wrapper');
    const searchInput = wrapper.querySelector('#playlist-search-input');
    const noResultsMessage = loadTemplate('dialog-no-playlists-message');

    heading.insertAdjacentElement('afterend', wrapper);
    playlistsContainer.insertAdjacentElement('afterend', noResultsMessage);

    const handleFilter = (event) => {
        const searchTerm = event.target.value.toLowerCase().trim();

        const playlistItems = playlistsContainer.querySelectorAll(
            'ytmusic-playlist-add-to-option-renderer');
        let visibleCount = 0;

        playlistItems.forEach(item => {
            // yes, there are multiple tags with the same ID
            const titleElem = item.querySelector('#title');
            if (titleElem) {
                const title = titleElem.getAttribute('title').toLowerCase();
                const isVisible = title.includes(searchTerm);
                item.style.display = isVisible ? '' : 'none';
                if (isVisible) visibleCount++;
            }
        });

        if (searchTerm && visibleCount === 0) {
            noResultsMessage.style.display = 'block';
            playlistsContainer.style.display = 'none';
        } else {
            noResultsMessage.style.display = 'none';
            playlistsContainer.style.display = '';
        }
    };

    searchInput.addEventListener('input', handleFilter);
    searchInput.focus();
}

window.addEventListener('playlistDialogDisplayed', initializePlaylistFilter);

const resetFilter = () => {
    // clear the input, hide the "no results" message, and unhide the playlists container
    const searchInput = document.getElementById('playlist-search-input');
    if (searchInput) {
        searchInput.value = '';
    }
    const noResultsMessage = document.getElementById('no-playlists-message');
    if (noResultsMessage) {
        noResultsMessage.style.display = 'none';
    }
    const playlistsContainer = document.getElementById('playlists');
    if (playlistsContainer) {
        playlistsContainer.style.display = '';
    }
}

window.addEventListener('playlistDialogHidden', () => {
    resetFilter()
})