let isDialogVisible = false;

function checkDialogState(dialogElement) {
    const isNowVisible = dialogElement && dialogElement.style.display !== 'none';

    // hidden -> visible
    if (isNowVisible && !isDialogVisible) {
        isDialogVisible = true;
        window.dispatchEvent(new CustomEvent('playlistDialogDisplayed'));

    // visible -> hidden
    } else if (!isNowVisible && isDialogVisible) {
        isDialogVisible = false;
        window.dispatchEvent(new CustomEvent('playlistDialogHidden'));
    }
}


const observer = new MutationObserver(() => {
    const dialogElement = document
        .querySelector('ytmusic-add-to-playlist-renderer')
        ?.closest('tp-yt-paper-dialog');

    if (dialogElement) {
        checkDialogState(dialogElement);
    } else if (isDialogVisible) {
        isDialogVisible = false;
        window.dispatchEvent(new CustomEvent('playlistDialogHidden'));
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributeFilter: ['style']
});