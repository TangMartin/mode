// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCameraRetro,
//   faDragon,
//   faFootballBall,
//   faGlassCheers,
//   faHelicopter,
// } from "@fortawesome/free-solid-svg-icons";

import beigeshirt from "../../assets/beigeshirt.png";
import redjacket from "../../assets/redshirt.png";
import denimjacket from "../../assets/sample_cardigan.jpg";
import blackdress from "../../assets/blackdress.png";
import patterncardigan from "../../assets/patterncardigan.png";

export const data = [
  {
    id: 1,
    bgColor: "#FF616D",
    image: <img alt="error" className="item-image" src={redjacket} />,
    title: "Jane's Red Shirt ",
    desc: "Minted: Jan 21 2023",
  },
  {
    id: 2,
    bgColor: "#7952B3",
    image: <img alt="error" className="item-image" src={denimjacket} />,
    title: "Jane's Sweater",
    desc: "Minted: Jan 21 2023",
  },
  {
    id: 3,
    bgColor: "#1597BB",
    image: <img alt="error" className="item-image" src={blackdress} />,
    title: "Jane's Black Dress",
    desc: "Minted: Jan 21 2023",
  },
  {
    id: 4,
    bgColor: "#185ADB",
    image: <img alt="error" className="item-image" src={patterncardigan} />,
    title: "Jane's Pattern Cardigan",
    desc: "Minted: Jan 21 2023",
  },
  {
    id: 5,
    bgColor: "#F54748",
    image: <img alt="error" className="item-image" src={beigeshirt} />,
    // image: "../../assets/beigeshirt.png",
    title: "Jane's Beige Shirt ",
    desc: "Minted: Jan 22 2023",
  }

];
