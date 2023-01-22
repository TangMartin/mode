// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCameraRetro,
//   faDragon,
//   faFootballBall,
//   faGlassCheers,
//   faHelicopter,
// } from "@fortawesome/free-solid-svg-icons";

import beigeshirt from "../../assets/beigeshirt.png";
import redjacket from "../../assets/hoodedjacket.jpg";
import denimjacket from "../../assets/denimjacket.png";
import blackdress from "../../assets/blackdress.png";
import patterncardigan from "../../assets/patterncardigan.png";

export const data = [
  {
    id: 1,
    bgColor: "#F54748",
    image: <img alt="error" className="item-image" src={beigeshirt} />,
    // image: "../../assets/beigeshirt.png",
    title: "Calypso's Beige Shirt ",
    desc: "Minted: Jan 23 2023",
  },
  {
    id: 2,
    bgColor: "#7952B3",
    image: <img alt="error" className="item-image" src={denimjacket} />,
    title: "Calypso's Denim Jacket ",
    desc: "Minted: Mar 17 2022",
  },
  {
    id: 3,
    bgColor: "#1597BB",
    image: <img alt="error" className="item-image" src={blackdress} />,
    title: "Calypso's Black Dress ",
    desc: "Minted: Jun 27 2022",
  },
  {
    id: 4,
    bgColor: "#185ADB",
    image: <img alt="error" className="item-image" src={patterncardigan} />,
    title: "Calypso's Pattern Cardigan",
    desc: "Minted: Aug 8 2022",
  },
  {
    id: 5,
    bgColor: "#FF616D",
    image: <img alt="error" className="item-image" src={redjacket} />,
    title: "Calypso's Maroon Jacket ",
    desc: "Minted: Feb 29 2022",
  },
];
