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
    tooltip: "Check this to remove foreign exclusive characters and variants."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "My Pretty Pony",
    img: "C2KG9Bc/My-Pretty-Pony.jpg",
    opts: { 
      gen: ["G0"], 
      type: ["br"] 
    }
  },
  {
    name: "MPP Peachy",
    img: "VYQgcLs/My-Pretty-Pony-Peachy.jpg",
    opts: {
      gen: ["G0"],
      type: ["br"]
    }
  },
  {
    name: "G1 Blue Belle",
    img: "rGmCrYh/FF-Blue-Belle.jpg",
    opts: {
      gen: ["G1"],
      type: ["br"]
    }
  },
  {
    name: "G1 Minty",
    img: "2gXjB2L/FF-Minty.jpg",
    opts: { 
      gen: ["G1"], 
      type: ["br"] }
  },
  {
    name: "G1 Snuzzle",
    img: "kxcQ2dF/FF-Snuzzle.jpg",
    opts: { 
      gen: ["G1"], 
      type: ["br"] }
  },
  {
    name: "G1 Cotton Candy",
    img: "xJYbKzv/FF-Cotton-Candy.jpg",
    opts: { 
      gen: ["G1"], 
      type: ["br"] }
  },
  {
    name: "G1 Blossom",
    img: "nQM7Ws3/FF-Blossom.jpg",
    opts: { 
      gen: ["G1"], 
      type: ["br"] }
  }
];
