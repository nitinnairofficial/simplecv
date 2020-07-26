import { TokyoComponent } from "../templates/tokyo/tokyo.component";
import { RioComponent } from "../templates/rio/rio.component";
import { BerlinComponent } from "../templates/berlin/berlin.component";
import { DenverComponent } from "../templates/denver/denver.component";
import { HelsinkiComponent } from "../templates/helsinki/helsinki.component";
import { MoscowComponent } from "../templates/moscow/moscow.component";
import { NairobiComponent } from "../templates/nairobi/nairobi.component";
import { OsloComponent } from "../templates/oslo/oslo.component";
import { StockholmComponent } from "../templates/stockholm/stockholm.component";

export const THEME_CONFIG = {
  blue: {
    cvBackgroundColor: "#DDEBFF",
    cvSectionTextColor: "#0052CC",
  },
  pink: {
    cvBackgroundColor: "rgba(250, 33, 123, 0.1)",
    cvSectionTextColor: "rgb(250, 33, 123)",
  },
  purple: {
    cvBackgroundColor: "rgba(148,0,211,0.1)",
    cvSectionTextColor: "rgb(148,0,211)",
  },
};

export const TEMPLATE_CONFIG = {
  tokyo: TokyoComponent,
  berlin: BerlinComponent,
  rio: RioComponent,
  denver: DenverComponent,
  helsinki: HelsinkiComponent,
  moscow: MoscowComponent,
  nairobi: NairobiComponent,
  oslo: OsloComponent,
  stockholm: StockholmComponent,
};
