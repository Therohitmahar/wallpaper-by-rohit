console.log("JS loaded");
const images = [
  {
    id: 1,
    src: "./img/cloud-norm.jpg",
    name: "Cloud Norm",
    key: "1C77SIl9lj0XgkIMWOM3IhqTEoZgfMZ1t",
  },
  {
    id: 2,
    src: "./img/evening-rays.jpg",
    name: "Evening Rays",
    key: "1BnCu_VWJ0QvGKkb2ybqlpMRmLS4-HZ0D",
  },
  {
    id: 3,
    src: "./img/far-from-himalayas.jpg",
    name: "Far from Himalayas",
    key: "1BqHgX7sjFYvuSGnVgohpi4Il8kfLmwxM",
  },
  {
    id: 4,
    src: "./img/p15-min.jpg",

    name: "Ikigai",
    key: "1C6BbFhoI4_qT7Rxy6BvxVZPmM_TclPy5",
  },
  {
    id: 5,
    src: "./img/d4-min.jpg",

    name: "Morning Haze",
    key: "1CAAop9m8Ue9_FOl-TJnkwjcmeDd0VlG8",
  },

  {
    id: 6,
    src: "./img/p10-min.jpg",

    name: "India / Nepal",
    key: "1C-uXi0OmAfRLTC4r0JX3vd-0vq7I1101",
  },
  {
    id: 7,
    src: "./img/p1-min.jpg",

    name: "Orange Range",
    key: "1C-uXi0OmAfRLTC4r0JX3vd-0vq7I1101",
  },
  {
    id: 8,
    src: "./img/p14-min.jpg",

    name: "Path In Heaven",
    key: "1BvJ6DXmwQIrIHKM7r-D_-P6aU6L3Xvxt",
  },
  {
    id: 9,
    src: "./img/p2-min.jpg",

    name: "Sky Mountain & Trees",
    key: "1C06hG_zx2nAng3c0N8r0pgOW8A5tPjrj",
  },
  {
    id: 10,
    src: "./img/cloud-game2.jpg",

    name: "Cloud Game 2",
    key: "1OynqxSCGx6qvzL08fgJ4w01rFeJNKfd2",
  },

  {
    id: 11,
    src: "./img/Cloud-Games1.jpg",

    name: "Cloud Game 1",
    key: "1PrMc8aWAsHxvtj8Ah0VBy229X4S0GimS",
  },
  {
    id: 12,
    src: "./img/indi-nepal-bridge.jpg",

    name: "Indi-Nepal Bridge",
    key: "1PwVRTimUx04oMnlW0z_oY6cDSNjKapjh",
  },
  {
    id: 13,
    src: "./img/merger.jpg",

    name: "Merger",
    key: "1PwVRTimUx04oMnlW0z_oY6cDSNjKapjh",
  },
  {
    id: 14,
    src: "./img/raw-rays.jpg",

    name: "Raw Rays",
    key: "1PwVRTimUx04oMnlW0z_oY6cDSNjKapjh",
  },
  {
    id: 15,
    src: "./img/Sky-Is-Magenta.jpg",

    name: "Sky is Magenta",
    key: "1PKWFvKQXOSKxsJ9nAUqxqDJVNiCaT53K",
  },

  {
    id: 16,
    src: "./img/way-to-heaven.jpg",

    name: "Way To Heaven",
    key: "1PytBdY_Pgg5I-nf1oO7cU5PtENLPkW8s",
  },
  {
    id: 17,
    src: "./img/top-view.jpg",

    name: "Top View",
    key: "1PvHk6qHUDEOHj6u5B8-AXtZ_r1s6VQkH",
  },
  {
    id: 18,
    src: "./img/fishing.jpg",

    name: "Unexpected Fishing",
    key: "1PeQO6z4lW-PRnpTED62ktJTVl0S-z4PE",
  },
  {
    id: 19,
    src: "./img/sky-is-pink.jpg",

    name: "The Sky Is Pink",
    key: "1Q1ycparUq2O0DBK3bKVXSgTWIaq5Rmnc",
  },
];

// let imageHolder = document.getElementsByClassName("image-holder");
// console.log(images);
let mainHolder = images.map((image) => {
  let imageHolder = document.createElement("div");
  imageHolder.classList.add("image-holder");

  let imgTag = document.createElement("img");
  imgTag.src = `${image.src}`;
  imgTag.alt = `${image.name}`;

  let content = document.createElement("div");
  content.classList.add("middle");

  let anchor = document.createElement("a");
  anchor.href = `https://drive.google.com/u/0/uc?id=${image.key}&export=download`;

  let photoTitle = document.createElement("h5");
  photoTitle.innerText = `${image.name}`;

  let button = document.createElement("button");
  button.innerText = "Download";

  anchor.appendChild(photoTitle);
  anchor.appendChild(button);

  content.appendChild(anchor);
  imageHolder.appendChild(imgTag);
  imageHolder.appendChild(content);

  return imageHolder;
});

let container = document.createElement("div");
container.classList.add("container");
container.append(...mainHolder);
let bigContainer = document.querySelector(".big-container");
bigContainer.append(container);
