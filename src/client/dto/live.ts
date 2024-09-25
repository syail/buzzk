import { ISimplifiedChzzkChannel } from './channel';

export interface ISimplifiedChzzkLiveDetail {
  liveTitle: string;
  concurrentUserCount: number;
  liveCategoryValue: string;
}

export interface IChzzkLiveDetail extends ISimplifiedChzzkLiveDetail {
  liveId: number;
  status: 'OPEN' | 'CLOSED';
  liveImageUrl: string;
  defaultThumbnailImageUrl: string | null;
  accumulateCount: number;
  openDate: string;
  closeDate: string | null;
  adult: boolean;
  clipActive: boolean;
  tags: unknown[];
  chatChannelId: string;
  categoryType: LiveCategoryType;
  liveCategory: string;
  chatActive: boolean;
  /**
   * Probably 'ALL'. need to check
   */
  chatAvailableGroup: 'FOLLOWER' | 'ALL';
  p2pQuality: string[];
  channel: ISimplifiedChzzkChannel;
}

export type LiveCategoryType = 'GAME' | 'ETC' | string;
