import { ISimplifiedChzzkLiveDetail } from './live';

export interface IChzzkRecommendationChannel {
  channelId: string;
  channel: ISimplifiedChzzkChannel;
  streamer: {
    openLive: boolean;
  };
  liveInfo: ISimplifiedChzzkLiveDetail;
  contentLineage: string;
}

export interface ISimplifiedChzzkChannel {
  channelId: string;
  channelName: string;
  channelImageUrl: string;
  verifiedMark: boolean;
}

export interface IChzzkChannel extends ISimplifiedChzzkChannel {
  channelType: string;
  channelDescription: string;
  followerCount: number;
  openLive: boolean;
  subscriptionAvailability: boolean;
  subscriptionPaymentAvailability: {
    iapAvailability: boolean;
    iabAvailability: boolean;
  };
  adMonetizationAvailability: boolean;
}

export interface IChzzkRecommendationChannelList {
  recommendationChannels: IChzzkRecommendationChannel[];
}
