# Archive Notes

## What Was Done

Complete offline archive of occupyinter.net created on 2025-11-10.

### Assets Downloaded

1. **Avatar GIFs** (70 files, ~26MB)
   - All protest avatars from `/avatars/` directory
   - Includes work by Evan Roth and community contributors
   - Randomized display in the widget

2. **Exhibition Artwork** (8 files, ~2.8MB)
   - Special exhibition pieces from November 2011
   - Artists: Constant Dullaart, Olia Lialina, Charlie Todd, UBERMORGEN, Brad Downey, La Quadrature Du Net, Mark Jenkins, Dragan Espenschied, Jonah & Chelsea Peretti, Ryder Ripps, Aram Bartholl, Telecomix, Rafael Rozendaal, moot

3. **Audio** (287KB)
   - `crowd.mp3` - Crowd protest sounds

4. **Browser Extensions**
   - Chrome extension
   - Firefox extension
   - Safari extension (zipped)

5. **Images**
   - Mute/unmute icons
   - Net protester header image

### Code Modifications

- **embed.js**: All remote URLs converted to local paths
  - Changed `http://occupyinter.net/avatars/` → `avatars/`
  - Changed `http://occupyinter.net/exhibition/` → `exhibition/`
  - Changed `http://occupyinter.net/crowd.mp3` → `crowd.mp3`
  - Changed `http://occupyinter.net/images/` → `images/`

- **index.html**: Tracking disabled for offline use
  - Google Analytics commented out
  - Facebook/Twitter widgets commented out

### Testing

The archive can be opened directly from the filesystem (`file://`) or served via:
- `python -m http.server 8000`
- Any static web server
- GitHub Pages

The animated GIF protest widget should work with all local assets.

## Deployment to GitHub Pages

1. Create a new GitHub repository
2. Push this archive:
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. Enable GitHub Pages in repo settings
4. Site will be live at `https://<username>.github.io/<repo-name>/`

## Notes

- Some features that required server-side processing (like /stats, /sites) returned 500 errors and couldn't be archived
- External links to fffff.at and artist websites remain unchanged
- The protest widget animation still works exactly as the original
- Total archive size: ~30MB
