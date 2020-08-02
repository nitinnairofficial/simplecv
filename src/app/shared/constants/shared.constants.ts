import { TokyoComponent } from "../templates/tokyo/tokyo.component";
import { RioComponent } from "../templates/rio/rio.component";
import { BerlinComponent } from "../templates/berlin/berlin.component";
import { DenverComponent } from "../templates/denver/denver.component";
import { HelsinkiComponent } from "../templates/helsinki/helsinki.component";
import { NairobiComponent } from "../templates/nairobi/nairobi.component";
import { OsloComponent } from "../templates/oslo/oslo.component";
import { StockholmComponent } from "../templates/stockholm/stockholm.component";

export const THEME_LIST = [
  {
    label: "blue",
    value: "#0069db",
  },
  {
    label: "red",
    value: "#FF4500",
  },
  {
    label: "green",
    value: "#228B22",
  },
  {
    label: "darkorange",
    value: "darkorange",
  },
  {
    label: "brown",
    value: "#8B4513",
  },
  {
    label: "pink",
    value: "#FF1493",
  },
  {
    label: "darkblue",
    value: "#191970",
  },
  {
    label: "purple",
    value: "rgb(148,0,211)",
  },
  {
    label: "teal",
    value: "#009188",
  },
  {
    label: "indigo",
    value: "#4B0082",
  },
  {
    label: "maroon",
    value: "#800000",
  },
  {
    label: "gray",
    value: "#808080",
  },
];

export const TEMPLATE_CONFIG = {
  tokyo: TokyoComponent,
  berlin: BerlinComponent,
  rio: RioComponent,
  denver: DenverComponent,
  helsinki: HelsinkiComponent,
  nairobi: NairobiComponent,
  oslo: OsloComponent,
  stockholm: StockholmComponent,
};
