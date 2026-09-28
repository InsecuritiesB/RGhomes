/* ============================================================
   R&G HOMES GH — PHOTO LIST
   To add a photo:
   1. Upload the image into the  images/full  folder
   2. Add ONE new line below (copy an existing line and edit it)

   f = file name inside images/full
   t = caption shown under the photo
   c = category key (must match a key in CATEGORIES below)
   s = true to ALSO show it in the homepage slideshow (optional)
   ============================================================ */

window.RG_CATEGORIES = {
  living: "Living Rooms",
  dining: "Dining",
  bed: "Bedrooms",
  kit: "Kitchen & Entryway"
};

window.RG_PHOTOS = [
  { f: "living.jpg",         t: "Luxury Living Room — Full Fit-Out",          c: "living" },
  { f: "tvunit.jpg",         t: "TV Unit & Wall Panelling",                   c: "living", s: true },
  { f: "marbletv.jpg",       t: "Marble TV Unit with Built-In Fireplace",     c: "living" },
  { f: "shelving.jpg",       t: "Gold Console & Feature Mirror with LED Lighting", c: "kit", s: true },
  { f: "dining_wood.jpg",    t: "Premium Dining Room — Wood Panelled",        c: "dining" },
  { f: "dining_formal.jpg",  t: "Formal Dining Room Installation",            c: "dining", s: true },
  { f: "dining_navy.jpg",    t: "Custom Dining Set — Black & Navy",           c: "dining" },
  { f: "dining_mustard.jpg", t: "Dining Set — Mustard & Marble",              c: "dining" },
  { f: "master.jpg",         t: "Master Bedroom — Arched Headboard Suite",    c: "bed", s: true },
  { f: "navybed.jpg",        t: "Navy Headboard Bedroom Suite",               c: "bed" },
  { f: "boutique.jpg",       t: "Boutique Bedroom Installation",              c: "bed" },
  { f: "greygold.jpg",       t: "Bedroom — Grey & Gold",                      c: "bed" },
  { f: "bedroomdetail.jpg",  t: "Custom Sculptural Coffee Table",             c: "living", s: true },
  { f: "kitchen.jpg",        t: "Modern Kitchen with Island",                 c: "kit", s: true },
  { f: "sideboard.jpg",      t: "Sideboard & Feature Mirror Wall",            c: "kit", s: true },
  { f: "entryway.jpg",       t: "Illuminated Display Shelving Unit",          c: "living", s: true },
  { f: "console.jpg",        t: "Console Table & Mirror Styling",             c: "kit" }
];
