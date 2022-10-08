dataSetVersion = "2022-10-07"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Generation",
    key: "gen",
    tooltip: "Check this to restrict to certain generations.",
    checked: false,
    sub: [
      { name: "Generation 1", key: "G1" },
      { name: "Generation 2", key: "G2" },
      { name: "Generation 3", key: "G3" },
      { name: "Generation 3.5", key: "G3.5" },
      { name: "Generation 4", key: "G4" },
      { name: "Pony Life", key: "G4.5" },
      { name: "Generation 5", key: "G5" },
      { name: "My Pretty Pony", key: "G0" }
    ]
  },
  {
    name: "Filter by Race",
    key: "race",
    tooltip: "Check this to restrict to certain races.",
    checked: false,
    sub: [
      { name: "Earth Pony", key: "ep" },
      { name: "Pegasus", key: "pg" },
      { name: "Unicorn", key: "uc" },
      { name: "Alicorn", key: "ac" },
      { name: "Sea Pony", key: "sp" }
    ]
  },
  {
    name: "Filter by Toy Type",
    key: "type",
    tooltip: "Check this to restrict to certain types of toy.",
    checked: false,
    sub: [
      { name: "Brushable", key: "br" },
      { name: "Mini Figure", key: "bl" },
      { name: "Molded Figure", tooltip: "Figures that are the size of a brushable, but with molded hair.", key: "mf" }
    ]
  },
  {
    name: "Remove Nirvana",
    key: "nirvana",
    tooltip: "Check this to remove foreign exclusive characters and variants.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "My Pretty Pony",
    img: "C2KG9Bc/My-Pretty-Pony.jpg",
    opts: { 
      gen: ["G0"], 
      race: ["ep"], 
      type: ["br"] 
    }
  },
  {
    name: "MPP Peachy",
    img: "VYQgcLs/My-Pretty-Pony-Peachy.jpg",
    opts: {
      gen: ["G0"],
      race: ["ep"],
      type: ["br"]
    }
  },
  {
    name: "G1 Blue Belle",
    img: "rGmCrYh/FF-Blue-Belle.jpg",
    opts: {
      gen: ["G1"],
      race: ["ep"],
      type: ["br"]
    }
  },
  {
    name: "G1 Minty",
    img: "2gXjB2L/FF-Minty.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G1 Snuzzle",
    img: "kxcQ2dF/FF-Snuzzle.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G1 Cotton Candy",
    img: "xJYbKzv/FF-Cotton-Candy.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G1 Blossom",
    img: "nQM7Ws3/FF-Blossom.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G1 Applejack",
    img: "RzxZ9BS/Collector-Pose-Applejack.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G1 Bow Tie",
    img: "gg5hqdL/1200px-Straight-Haired-Bow-Tie.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G1 Bubbles",
    img: "XFDYs2D/Bubbles.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G1 Seashell",
    img: "Q93d2tg/Seashell-Earth-Ponies-Year-3-MLP-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G1 Firefly",
    img: "FwN40zr/Firefly-Unicorn-and-Pegasus-Ponies-Year-2-MLP-G1-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["pg"],
      type: ["br"] }
  },
  {
    name: "G1 Medley",
    img: "kG1wZN5/Medley-Unicorn-and-Pegasus-Ponies-Year-2-MLP-G1-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["pg"],
      type: ["br"] }
  },
  {
    name: "G1 Glory",
    img: "Xjp6sMt/Glory-Unicorn-and-Pegasus-Ponies-Year-2-MLP-G1-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["uc"],
      type: ["br"] }
  },
  {
    name: "G1 Moondancer",
    img: "bbb4d6G/Moondancer-Unicorn-and-Pegasus-Ponies-Year-2-MLP-G1-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["uc"],
      type: ["br"] }
  },
  {
    name: "G1 Sunbeam",
    img: "zb8RpvV/Sunbeam-Unicorn-and-Pegasus-Ponies-Year-2-MLP-G1-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["uc"],
      type: ["br"] }
  },
  {
    name: "G1 Twilight",
    img: "k1z09rK/Twilight-Unicorn-and-Pegasus-Ponies-Year-2-MLP-G1-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["uc"],
      type: ["br"] }
  },
  {
    name: "G1 Sealight",
    img: "6gFjsTQ/Sealight-Sea-Ponies-Year-2-MLP-G1-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["sp"],
      type: ["br"] }
  },
  {
    name: "G1 Seawinkle",
    img: "R3ncNkn/Sea-Winkle-Sea-Ponies-Year-2-MLP-G1-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["sp"],
      type: ["br"] }
  },
  {
    name: "G1 Wavedancer",
    img: "JR4zBG3/Wavedancer-Sea-Ponies-Year-2-MLP-G1-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["sp"],
      type: ["br"] }
  },
  {
    name: "G1 Moonstone",
    img: "ym2dvtq/Moonstone-Rainbow-Ponies-Year-3-MLP-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["uc"],
      type: ["br"] }
  },
  {
    name: "G1 Parasol",
    img: "Pcg1TqP/Parasol-Rainbow-Ponies-Year-3-MLP-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G1 Skydancer",
    img: "QkWfVty/Skydancer-Rainbow-Ponies-Year-3-MLP-1.png",
    opts: { 
      gen: ["G1"], 
      race: ["pg"],
      type: ["br"] }
  },
  {
    name: "G1 Starshine",
    img: "YWtd0vx/Starshine-Rainbow-Ponies-Year-3-MLP-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["pg"],
      type: ["br"] }
  },
  {
    name: "G1 Sunlight",
    img: "bzQdH6y/Sunlight-Rainbow-Ponies-Year-3-MLP-1.png",
    opts: { 
      gen: ["G1"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G1 Windy",
    img: "t8FJwwG/Windy-Rainbow-Ponies-Year-3-MLP-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["uc"],
      type: ["br"] }
  },
  {
    name: "G1 Peachy",
    img: "RQ22WYx/Peachy-Pretty-Parlour-Playset-MLP-G1-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G1 Lemon Drop",
    img: "h7hMsqL/Lemondrop-Show-Stable-Year-2-MLP-G1-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G1 Sprinkles",
    img: "Wct80zG/Sprinkles-Waterfall-Playset-MLP-G1-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["pg"],
      type: ["br"] }
  },
  {
    name: "G1 Majesty",
    img: "QJfBcGn/Majesty-Dream-Castle-Year-2-MLP-G1-1.jpg",
    opts: { 
      gen: ["G1"], 
      race: ["uc"],
      type: ["br"] }
  },
  {
    name: "G2 Berry Bright",
    img: "Wn3BQCp/Berry-Bright-Secret-Surprise-Friends-1997-MLP-G2-1.jpg",
    opts: { 
      gen: ["G2"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G2 Clever Clover",
    img: "mJ5ZjN3/Clever-Clover-Secret-Surprise-Friends-1997-MLP-G2-1.jpg",
    opts: { 
      gen: ["G2"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G2 Morning Glory",
    img: "tMSbMLQ/Morning-Glory-Secret-Surprise-Friends-1997-MLP-G2-1.jpg",
    opts: { 
      gen: ["G2"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G2 Petal Blossom",
    img: "r2GxhB1/Petal-Blossom-Secret-Surprise-Friends-1997-MLP-G2-1.jpg",
    opts: { 
      gen: ["G2"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G2 Sky Skimmer",
    img: "3SP2g4q/Sky-Skimmer-Secret-Surprise-Friends-1997-MLP-G2-1.jpg",
    opts: { 
      gen: ["G2"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G2 Ivy",
    img: "hRZrg2s/Ivy-Magic-Motion-Friends-1997-MLP-G2-1.jpg",
    opts: { 
      gen: ["G2"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G2 Sundance",
    img: "McSDvFP/Sundance-Magic-Motion-Friends-1997-MLP-G2-1.jpg",
    opts: { 
      gen: ["G2"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G2 Light Heart",
    img: "vqjQxtW/Light-Heart-Canopy-Bed-1997-MLP-G2-1.jpg",
    opts: { 
      gen: ["G2"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G2 Cupcake",
    img: "sFVphhj/Cupcake-Secret-Surprise-Friends-1998-MLP-G2-1.jpg",
    opts: { 
      gen: ["G2"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G2 Secret Tale",
    img: "SXfyNJr/Secret-Tale-Secret-Surprise-Friends-1998-MLP-G2-1.jpg",
    opts: { 
      gen: ["G2"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G2 Sugar Belle",
    img: "w0BzWnd/Sugar-Belle-Secret-Surprise-Friends-1997-MLP-G2-1.jpg",
    opts: { 
      gen: ["G2"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G2 Wingsong",
    img: "M5XTRCm/Wingsong-Secret-Surprise-Friends-1997-MLP-G2-1.jpg",
    opts: { 
      gen: ["G2"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Kimono",
    img: "jRzqG0J/Kimono-Glitter-Celebration-2003-MLP-G3-1.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Minty",
    img: "KDbwnqV/Minty-Glitter-Celebration-2003-MLP-G3-1.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Pinkie Pie",
    img: "gdpfQ8F/Pinkie-Pie-Wave-1-Glitter-Celebration-2003-MLP-G3-1.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Sparkleworks",
    img: "tXymQZV/Sparkleworks-Wave-1-Glitter-Celebration-2003-MLP-G3-1.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Daisyjo",
    img: "qx2HynR/Daisyjo-Glitter-Celebration-2003-MLP-G3-1.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Strawberry Swirl",
    img: "Q66pcHw/Strawberry-Swirl-Glitter-Celebration-2003-MLP-G3-1.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Rainbow Dash",
    img: "NrND3WP/Rainbow-Dash-Wave-2-Rainbow-Celebration-2003-MLP-G3-1.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Sunny Daze",
    img: "3pbnmDT/Sunny-Daze-Wave-2-Rainbow-Celebration-2003-MLP-G3-1.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Sweetberry",
    img: "cJ511Wq/Sweetberry-Rainbow-Celebration-2003-MLP-G3-1.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Wysteria",
    img: "t2vLP4r/Wysteria-Rainbow-Celebration-2003-MLP-G3-1-v2.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Tink-a-Tink-a-Too",
    img: "X7KHXqQ/Tink-A-Tink-A-Too-Rainbow-Celebration-2003-MLP-G3-1.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Fluttershy",
    img: "StZMtST/Fluttershy-Rainbow-Celebration-2003-MLP-G3-1-v2.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Autumn Skye",
    img: "4t7tdXt/Autumn-Skye-Seasonal-Celebration-2003-MLP-G3-1.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Butterscotch",
    img: "wRkr0t9/Butterscotch-Seasonal-Celebration-2003-MLP-G3-1.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Spring Fever",
    img: "CQd0W75/Spring-Fever-Seasonal-Celebration-2003-MLP-G3-1.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Star Swirl",
    img: "tJTJvxx/Star-Swirl-Seasonal-Celebration-2003-MLP-G3-1.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Sweet Summertime",
    img: "0tVgRs6/Sweet-Summertime-Seasonal-Celebration-2003-MLP-G3-1.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3 Winter Snow",
    img: "VvLqfZn/Winter-Snow-Seasonal-Celebration-2003-MLP-G3-1.jpg",
    opts: { 
      gen: ["G3"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3.5 Cheerilee",
    img: "h29kzWZ/Cheerilee-Basic-Single-Brushable-2009-MLP-G3-5-1.jpg",
    opts: { 
      gen: ["G3.5"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3.5 Pinkie Pie",
    img: "c3zSdFB/Pinkie-Pie-Basic-Single-Brushable-2009-MLP-G3-5-1.jpg",
    opts: { 
      gen: ["G3.5"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3.5 Rainbow Dash",
    img: "tDQmXNF/Rainbow-Dash-Basic-Single-Brushable-2009-MLP-G3-5-1.jpg",
    opts: { 
      gen: ["G3.5"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3.5 Scootaloo",
    img: "64GS9dS/Scootaloo-Basic-Single-Brushable-2009-MLP-G3-5-1.jpg",
    opts: { 
      gen: ["G3.5"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G3.5 Starsong",
    img: "j4HbKnq/Starsong-Basic-Single-Brushable-2009-MLP-G3-5-1.jpg",
    opts: { 
      gen: ["G3.5"], 
      race: ["pg"],
      type: ["br"] }
  },
  {
    name: "G3.5 Sweetie Belle",
    img: "5kbLcGM/Sweetie-Belle-Basic-Single-Brushable-2009-MLP-G3-5-1.jpg",
    opts: { 
      gen: ["G3.5"], 
      race: ["uc"],
      type: ["br"] }
  },
  {
    name: "G3.5 Toola-Roola",
    img: "7NRB8X2/Toola-Roola-Basic-Single-Brushable-2009-MLP-G3-5-1.jpg",
    opts: { 
      gen: ["G3.5"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G4 Applejack",
    img: "P1TtBgS/Fi-M-applejack.jpg",
    opts: { 
      gen: ["G4"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G4 Fluttershy",
    img: "0Vnb4HN/900px-Fi-M-fluttershy.jpg",
    opts: { 
      gen: ["G4"], 
      race: ["pg"],
      type: ["br"] }
  },
  {
    name: "G4 Pinkie Pie",
    img: "WpY7FYH/900px-Fi-M-pinkiepie.jpg",
    opts: { 
      gen: ["G4"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G4 Rarity",
    img: "hsYbhkd/900px-Fi-M-rarity.jpg",
    opts: { 
      gen: ["G4"], 
      race: ["uc"],
      type: ["br"] }
  },
  {
    name: "G4 Rainbow Dash",
    img: "Yft5mT2/Fi-M-rainbowdash.jpg",
    opts: { 
      gen: ["G4"], 
      race: ["pg"],
      type: ["br"] }
  },
  {
    name: "G4 Twilight Sparkle (Unicorn)",
    img: "txy6fDH/Mib-Fi-M-twilightsparkle.jpg",
    opts: { 
      gen: ["G4"], 
      race: ["uc"],
      type: ["br"] }
  },
  {
    name: "G4 Sweetie Belle",
    img: "7r49vnh/Forever-Friends-School-Pal-Set-1-SB.jpg",
    opts: { 
      gen: ["G4"], 
      race: ["uc"],
      type: ["br"] }
  },
  {
    name: "G4 Daisy Dreams",
    img: "MGFbVPM/Fluttershy-and-Daisy-Dreams-2-pack-2-alt-1-Daisy-Dreams.jpg",
    opts: { 
      gen: ["G4"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G4 Rainbow Flash",
    img: "1Z3ZkqF/Rainbow-Dash-Rainbow-Flash-Promo-1.jpg",
    opts: { 
      gen: ["G4"], 
      race: ["uc"],
      type: ["br"] }
  },
  {
    name: "G4 Cheerilee",
    img: "1X8cpRN/Cheerilee-Single-1.jpg",
    opts: { 
      gen: ["G4"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G4 Lily Blossom",
    img: "4mqLJk2/Lily-Blossom-Single-1.jpg",
    opts: { 
      gen: ["G4"], 
      race: ["pg"],
      type: ["br"] }
  },
  {
    name: "Pony Life Applejack",
    img: "8jgtHg0/Applejack-Reveal-The-Magic-Single-1.jpg",
    opts: { 
      gen: ["G4.5"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "Pony Life Fluttershy",
    img: "7jNpgqH/Fluttershy-Reveal-The-Magic-Single-1.jpg",
    opts: { 
      gen: ["G4.5"], 
      race: ["pg"],
      type: ["br"] }
  },
  {
    name: "Pony Life Pinkie Pie",
    img: "Jsf4cBw/Pinkie-Pie-Reveal-The-Magic-Single-1.jpg",
    opts: { 
      gen: ["G4.5"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "Pony Life Potion Nova",
    img: "SPhwCyp/Potion-Nova-Reveal-The-Magic-Single-1.jpg",
    opts: { 
      gen: ["G4.5"], 
      race: ["uc"],
      type: ["br"] }
  },
  {
    name: "Pony Life Trixie Lulamoon",
    img: "Y3GwP0D/Trixie-Lulamoon-Reveal-The-Magic-Single-1.jpg",
    opts: { 
      gen: ["G4.5"], 
      race: ["uc"],
      type: ["br"] }
  },
  {
    name: "Pony Life Twilight Sparkle",
    img: "mR4Kmfc/Twilight-Sparkle-Reveal-The-Magic-Single-1.jpg",
    opts: { 
      gen: ["G4.5"], 
      race: ["ac"],
      type: ["br"] }
  },
  {
    name: "Pony Life Rainbow Dash",
    img: "pfsPZhw/Rainbow-Dash-Reveal-The-Magic-Single-1.jpg",
    opts: { 
      gen: ["G4.5"], 
      race: ["pg"],
      type: ["br"] }
  },
  {
    name: "Pony Life Rarity",
    img: "JnFkB12/Rarity-Reveal-The-Magic-Single-1.jpg",
    opts: { 
      gen: ["G4.5"], 
      race: ["uc"],
      type: ["br"] }
  },
  {
    name: "G5 Sunny Starscout",
    img: "FKNFtk4/G5-Sunny.jpg",
    opts: { 
      gen: ["G5"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G5 Pipp Petals",
    img: "Xzf9rjD/G5-Pipp.jpg",
    opts: { 
      gen: ["G5"], 
      race: ["pg"],
      type: ["br"] }
  },
  {
    name: "G5 Izzy Moonbow",
    img: "8cPmQJd/Shining-Adventures-Collection-A-New-Generation-1-Izzy-Moonbow.jpg",
    opts: { 
      gen: ["G5"], 
      race: ["uc"],
      type: ["br"] }
  },
  {
    name: "G5 Zipp Storm",
    img: "CMTL58V/Shining-Adventures-Collection-A-New-Generation-1-Zipp-Storm.jpg",
    opts: { 
      gen: ["G5"], 
      race: ["pg"],
      type: ["br"] }
  },
  {
    name: "G5 Hitch Trailblazer",
    img: "VwPxv6D/Shining-Adventures-Collection-A-New-Generation-1-Hitch-Trailblazer.jpg",
    opts: { 
      gen: ["G5"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G5 Deputy Sprout",
    img: "B4bJMb7/Shining-Adventures-Collection-A-New-Generation-1-Deputy-Sprout.jpg",
    opts: { 
      gen: ["G5"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G5 Twilight Sparkle",
    img: "SwSNpLh/Sparkling-Generations-A-New-Generation-MLP-1-Twilight-Sparkle.jpg",
    opts: { 
      gen: ["G5"], 
      race: ["ac"],
      type: ["br"] }
  },
  {
    name: "G5 Rainbow Dash",
    img: "zV6HDRG/Favorites-Together-Collection-A-New-Generation-MLP-G5-1-Rainbow-Dash.jpg",
    opts: { 
      gen: ["G5"], 
      race: ["pg"],
      type: ["br"] }
  },
  {
    name: "G5 Pinkie Pie",
    img: "dpZZ5FG/Favorites-Together-Collection-A-New-Generation-MLP-G5-1-Pinkie-Pie.jpg",
    opts: { 
      gen: ["G5"], 
      race: ["ep"],
      type: ["br"] }
  },
  {
    name: "G5 Jazz Hooves",
    img: "kGZNDDk/Jazz-Hooves-Pedicure-Party-Make-Your-Mark-MLP-1.jpg",
    opts: { 
      gen: ["G5"], 
      race: ["ep"],
      type: ["br"] }
  }
];
