export interface ChzzkConfig {
  chzzkAPIHost: string;
  chzzkGameAPIHost: string;
  nameAPIHost: string;
}

export const DefaultConfiguration: ChzzkConfig = {
  chzzkAPIHost: "api.chzzk.com",
  chzzkGameAPIHost: "game-api.chzzk.com",
  nameAPIHost: "name.chzzk.com",
};
