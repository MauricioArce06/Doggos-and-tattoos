import { SectionGalery } from "../Styles/Galerystyle";
import Card from "../helpers/card";

export default function Galery() {
  return (
    <SectionGalery>
      <h1>Galery</h1>
      <div>
        <Card
          text={"Little Dog with Six Legs tattooed in the Elbow"}
          sessions={"Completed in one session"}
          img={
            "https://i.pinimg.com/736x/6c/27/1b/6c271bd89df70435164040abfb61a14b.jpg"
          }
        />
        <Card
          text={
            // "Manga de Paneles de Series realizado en el brazo derecho"
            "Sleeve Series Panels tattooed on the right arm"
          }
          sessions={"Completed in two sessions"}
          img={
            "https://i.pinimg.com/736x/2f/69/99/2f6999802672331e73256781ac5acecb.jpg"
          }
        />

        <Card
          text={
            "Gojo Satoru from Jujutsu Kaisen performed on the upper forearm"
          }
          sessions={"Completed in one session"}
          img={
            "https://i.pinimg.com/736x/20/06/47/20064734596bd2199afcad6461e521ae.jpg"
          }
        />
        <Card
          text={
            "Rengoku Kyojuro from Demon Slayer performed on the left forearm"
          }
          sessions={"Completed in three session"}
          img={
            "https://ctmtattoo.com/wp-content/uploads/tattoo-sleeve-ideas-anime-arm.jpg"
          }
        />
      </div>
    </SectionGalery>
  );
}
