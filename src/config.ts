export interface ChzzkConfig {
  chzzkAPIHost: string;
  commonAPIHost: string;
  naverAPIHost: string;
}

export const DefaultConfiguration: ChzzkConfig = {
  chzzkAPIHost: 'api.chzzk.naver.com',
  commonAPIHost: 'comm-api.game.naver.com',
  naverAPIHost: 'apis.naver.com',
};
