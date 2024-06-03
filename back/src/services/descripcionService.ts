import { DescripcionModel } from "../config";
import { IDescripcionDto } from "../dto/descripcionDto";

export const newDescripcion = async (descripcionData: IDescripcionDto) => {
  try {
    const { descripcion, urlReferencia } = descripcionData;
    console.log("datos recibidos con exito");
    console.log(descripcion);
    console.log(urlReferencia);

    const newDescirpcion = await DescripcionModel.create({
      descripcion,
      urlReferencia,
    });

    const results = await DescripcionModel.save(newDescirpcion);
    console.log(newDescirpcion);

    return results;
  } catch (error) {
    throw new Error("No se pudo crear la descripcion");
  }
};
