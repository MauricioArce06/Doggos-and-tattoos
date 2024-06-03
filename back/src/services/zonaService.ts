import { ZonasModel } from "../config";
import IZonasDto from "../dto/zonasDto";
import { Zonas } from "../entities/zonas";

const getAllZones = async () => {
  const zonaSerivicio = await ZonasModel.find({
    // relations: { appointment: true },
  });
};

const getAllZonesByZone = async (zonas: IZonasDto) => {
  const zonaServicio = await ZonasModel.findOne({
    where: {
      zona: zonas.zona,
    },
    // relations: { appointment: true },
  });
};

const newZoneSerivice = async (zonas: string) => {
  const zona = await ZonasModel.create({ zona: zonas });
  await ZonasModel.save(zona);
  return zona;
};

const zonePrice = async (zonas: Zonas) => {
  switch (zonas.zona) {
    case "Head":
    case "Neck":
    case "Back":
    case "Legs":
    case "Feet":
    case "Arms":
    case "Chest":
    case "Abdomen":
      zonas.price = 10;
      break;
    default:
      throw new Error("Zona no encontrada");
  }

  // console.log(zonas);

  await ZonasModel.save(zonas);
};

export { getAllZones, zonePrice, newZoneSerivice, getAllZonesByZone };
