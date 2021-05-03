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
    name: "G1 Butterscotch",
    img: "6/69/FF_Butterscotch.jpg",
    opts: {
      gen: ["G1"],
      type: ["br"]
    }
  },
  {
    name: "G1 Blue Belle",
    img: "0/09/FF_Blue_Belle.jpg",
    opts: {
      gen: ["G1"],
      type: ["br"]
    }
  },
  {
    name: "G1 Minty",
    img: "a/ac/FF_Minty.jpg",
    opts: { 
      gen: ["G1"], 
      type: ["br"] }
  },
  {
    name: "G1 Snuzzle",
    img: "9/97/FF_Snuzzle.jpg",
    opts: { 
      gen: ["G1"], 
      type: ["br"] }
  },
  {
    name: "G1 Cotton Candy",
    img: "0/06/FF_Cotton_Candy.jpg",
    opts: { 
      gen: ["G1"], 
      type: ["br"] }
  },
  {
    name: "G1 Blossom",
    img: "c/ca/FF_Blossom.jpg",
    opts: { 
      gen: ["G1"], 
      type: ["br"] }
  }
];
