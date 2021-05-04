dataSetVersion = "2021-05-03"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
  }
];
