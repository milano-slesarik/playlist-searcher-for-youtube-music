<p>
  <img src="src/img/logo128x128.png" alt="Extension icon" width="128"/>
</p>

# Playlist Searcher for YouTube Music

**YouTube Music** is a great music streaming service, but it's missing an easy way to search through your playlists. This unofficial extension solves that problem by adding a search bar to the YouTube Music website.

You can use it to search for playlists by name in two places: the main sidebar and the "Add to Playlist" dialog.

**NOTE:** _This is an early version of the extension and may not work as expected. The current method for monitoring page elements could be resource-intensive and will require future optimization._

### Sidebar Search
<table>
  <tr>
    <td valign="top"><img src="media/sidebar_search.gif" alt="Sidebar search demo" width="400"/></td>
    <td valign="top"><img src="media/sidebar_search_screenshot.png" alt="Sidebar search screenshot" width="400"/></td>
  </tr>
</table>

### "Add to Playlist" Dialog Search
<table>
  <tr>
    <td valign="top"><img src="media/add_to_playlist_search.gif" alt="Add to playlist search demo" width="400"/></td>
    <td valign="top"><img src="media/add_to_playlist_search_screenshot.png" alt="Add to playlist search screenshot" width="400"/></td>
  </tr>
</table>

# TODO

- [ ] Optimize the way elements are observed (as it might be too heavy now)
- [ ] Add word-based search that works regardless of word order (e.g. "90s pop" will find "Pop - 90s")
- [ ] Add magnifying glass icon to the search bar