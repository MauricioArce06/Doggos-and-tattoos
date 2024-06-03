import { CustomSecondSection } from "../../../Styles/Home";
import { Link } from "react-router-dom";
export default function SecondSection() {
  return (
    <CustomSecondSection>
      <div>
        <Link to={"/about-us"} style={{ textDecoration: "none" }}>
          About us
        </Link>
        <img
          src="https://post.healthline.com/wp-content/uploads/2020/01/tattoo-parlor-artist-getting-1296x728-header.jpg"
          alt="about-us-image"
        ></img>
      </div>
      <div>
        <Link to={"/galery"} style={{ textDecoration: "none" }}>
          Galery
        </Link>
        <img
          src="https://us.123rf.com/450wm/storyimage/storyimage2303/storyimage230303842/201163654-brazo-de-persona-que-est%C3%A1-cubierto-de-tatuajes-coloridos-ia-generativa-ilustraci%C3%B3n-de-alta.jpg?ver=6"
          alt="galery-image"
        ></img>
      </div>
    </CustomSecondSection>
  );
}
