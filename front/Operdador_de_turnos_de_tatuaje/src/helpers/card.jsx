import { CustomGaleria } from "../Styles/Galerystyle";

export default function Card({ text, sessions, img }) {
  return (
    <CustomGaleria>
      <img src={img} alt="img" />
      <h1>{text}</h1>
      <p>{sessions}</p>
    </CustomGaleria>
  );
}
