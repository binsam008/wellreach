# Restoring the staff profile pages

On 18 Nov 2026 the two staff profile pages were taken off the website:

| Profile | Address it lived at |
|---|---|
| Sajid | `/portfolio/sajid` |
| Visakh P V | `/portfolio/visakh-pv` |

Both now show "User not found". The profile page itself (`src/portfolio/Portfolio.jsx`) and its route were
kept, so restoring a profile only means putting its data and photo back.

Commit `9496f29` is the last version that has both profiles complete. Git can copy files back from it.

## 1. Bring back the photos

Run in the project folder (Git Bash or PowerShell):

```
git checkout 9496f29 -- public/sajid.png public/optimized/sajid-160.jpg public/optimized/sajid-160.webp
git checkout 9496f29 -- public/visakh.jpeg public/optimized/visakh-160.jpg public/optimized/visakh-160.webp
```

Leave out the line for anyone you are not restoring.

## 2. Bring back the profile details

See the old entries with:

```
git show 9496f29:src/portfolio/data.js
```

Copy the entry for each person back into the `users` list in `src/portfolio/data.js`.
Check the phone numbers first: Sajid's entry has +973 3311 3858, which the Contact page no longer uses.

## 3. Bring back the photo sizes

See the old entries with:

```
git show 9496f29:src/imageManifest.json
```

Copy the `"/sajid.png"` and/or `"/visakh.jpeg"` blocks back into `src/imageManifest.json`.
Do not replace the whole file: it has changed since that commit.

## 4. Check, then publish

Run `npm run dev`, open `/portfolio/sajid` or `/portfolio/visakh-pv` and check the page,
then commit and push.
