console.log("JS loaded");
const images = [
  {
    id: 1,
    name: "Cloud Norm",
    key: "1C77SIl9lj0XgkIMWOM3IhqTEoZgfMZ1t",
  },
  {
    id: 2,
    name: "Evening Rays",
    key: "1BnCu_VWJ0QvGKkb2ybqlpMRmLS4-HZ0D",
  },
  {
    id: 3,
    name: "Far from Himalayas",
    key: "1BqHgX7sjFYvuSGnVgohpi4Il8kfLmwxM",
  },
  {
    id: 4,
    name: "Ikigai",
    key: "1C6BbFhoI4_qT7Rxy6BvxVZPmM_TclPy5",
  },
  {
    id: 5,
    name: "Morning Haze",
    key: "1CAAop9m8Ue9_FOl-TJnkwjcmeDd0VlG8",
  },

  {
    id: 6,
    name: "India / Nepal",
    key: "1C-uXi0OmAfRLTC4r0JX3vd-0vq7I1101",
  },
  {
    id: 7,
    name: "Orange Range",
    key: "1C-uXi0OmAfRLTC4r0JX3vd-0vq7I1101",
  },
  {
    id: 8,
    name: "Path In Heaven",
    key: "1BvJ6DXmwQIrIHKM7r-D_-P6aU6L3Xvxt",
  },
  {
    id: 9,
    name: "Sky Mountain & Trees",
    key: "1C06hG_zx2nAng3c0N8r0pgOW8A5tPjrj",
  },
  {
    id: 10,
    name: "Cloud Game 2",
    key: "1OynqxSCGx6qvzL08fgJ4w01rFeJNKfd2",
  },

  {
    id: 11,
    name: "Cloud Game 1",
    key: "1PrMc8aWAsHxvtj8Ah0VBy229X4S0GimS",
  },
  {
    id: 12,
    name: "Indi-Nepal Bridge",
    key: "1PwVRTimUx04oMnlW0z_oY6cDSNjKapjh",
  },
  {
    id: 13,
    name: "Merger",
    key: "1PwVRTimUx04oMnlW0z_oY6cDSNjKapjh",
  },
  {
    id: 14,
    name: "Raw Rays",
    key: "1PwVRTimUx04oMnlW0z_oY6cDSNjKapjh",
  },
  {
    id: 15,
    name: "Sky is Magenta",
    key: "1PKWFvKQXOSKxsJ9nAUqxqDJVNiCaT53K",
  },

  {
    id: 16,
    name: "Way To Heaven",
    key: "1PytBdY_Pgg5I-nf1oO7cU5PtENLPkW8s",
  },
  {
    id: 17,
    name: "Top View",
    key: "1PvHk6qHUDEOHj6u5B8-AXtZ_r1s6VQkH",
  },
  {
    id: 18,
    name: "Unexpected Fishing",
    key: "1PeQO6z4lW-PRnpTED62ktJTVl0S-z4PE",
  },
  {
    id: 19,
    name: "The Sky Is Pink",
    key: "1Q1ycparUq2O0DBK3bKVXSgTWIaq5Rmnc",
  },
];

// let imageHolder = document.getElementsByClassName("image-holder");
let bigContainer = document.getElementsByClassName("big-container");
// console.log(images);
images.map((image) => {
  let imageHolder = document.createElement("div");
  imageHolder.classList.add = "image-holder";

  let imgTag = document.createElement("img");
  imgTag.src = `https://drive.google.com/u/0/uc?id=${image.key}&export=download`;
  imgTag.alt = `${image.name}`;

  let content = document.createElement("div");
  content.classList.add = "middle";

  let anchor = document.createElement("a");
  anchor.href = `https://drive.google.com/u/0/uc?id=${image.key}&export=download`;

  let photoTitle = document.createElement("h5");
  photoTitle.innerText = `${image.name}`;

  let button = document.createElement("button");
  button.innerText = "Download";
});
