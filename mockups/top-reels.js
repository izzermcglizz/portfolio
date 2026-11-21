// Top-performing reels, from top_reels.md (IG grid view counts, 2026-11-20), sorted by views.
const TOP_REELS = [
  ['izzercreates', 'Replit', 'DdRTRGHEeDO', '624K', 624],
  ['izzercreates', 'Replit', 'DYo6JjipEu8', '596K', 596],
  ['izzercreates', 'Replit', 'DaiFcR2p5mF', '530K', 530],
  ['izzercreates', 'Replit', 'DY07UJDp2qg', '257K', 257],
  ['buildingwizzy', 'Manus', 'DbiqI31Dt6W', '239K', 239],
  ['izzercreates', 'Replit', 'DaflOWqJpdn', '237K', 237],
  ['buildingwizzy', 'Manus', 'DctJPsCFanj', '227K', 227],
  ['izzercreates', 'Replit', 'DZZ2SEUJJUd', '220K', 220],
  ['izzercreates', 'Replit', 'DasPIVBpki1', '183K', 183],
  ['izzercreates', 'Replit', 'De33jotAams', '180K', 180],
  ['izzercreates', 'Replit', 'DaqGXXjJWJ1', '155K', 155],
  ['izzercreates', 'Replit', 'DfMQL9_DyD1', '153K', 153],
  ['buildingwizzy', 'Manus', 'DcgDyNzE9Om', '138K', 138],
  ['buildingwizzy', 'Manus', 'DclbB7MFex8', '100K', 100],
].map(([acct, brand, id, views, n]) => ({ acct, brand, id, views, n, url: `https://www.instagram.com/${acct}/reel/${id}/` }));
