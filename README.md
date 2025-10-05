<p>
  <img src="src/img/logo128x128.png" alt="Playlist Searcher for YouTube Music" width="128"/>
</p>

# Playlist Searcher for YouTube Music

**YouTube Music** is a great music streaming service, but it's missing an easy way to search through your playlists. This unofficial extension solves that problem by adding a search bar to the YouTube Music website.

You can use it to search for playlists by name in two places: the main sidebar and the "Add to Playlist" dialog.

## Installation

[Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/playlist-searcher-for-yt-music/)  
[Chrome Extension](https://chromewebstore.google.com/detail/playlist-searcher-for-you/hjjeeipclnojcnapbmpkokmhejhklflk)

**NOTE:** _This is an early version of the extension and may not work as expected. The current method for monitoring page elements could be resource-intensive and will require future optimization._

## Video

<table>
  <tr>
    <td><img src="media/showcase.gif" alt="Sidebar search demo" width="400"/></td>
  </tr>
</table>

## Screenshots
<table>
  <tr>
    <td><img src="media/screenshot_sidebar.png" alt="Search in sidebar" width="400"/></td>
    <td><img src="media/screenshot_add_to_playlist.png" alt="Search in dialog" width="400"/></td>

  </tr>
</table>

## Changelog

#### 1.0.0 (2025-09-21)

- Initial release

#### 1.1.0 (2025-09-27)

- Added search icons to inputs
- Simplified and unified HTML generation and CSS
- Updated logo ("YTMPS" > "PSYTM")
- Various refactorings
- README.md updates

# TODO

- [ ] Optimize the way elements are observed (as it might be too heavy now)
- [ ] Add word-based search that works regardless of word order (e.g. "90s pop" will find "Pop - 90s")
- [ ] Edge support
- [ ] Add search on the "Playlists" page