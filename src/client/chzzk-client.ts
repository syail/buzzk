import UserAgent from 'user-agents';
import axios, { AxiosInstance } from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';
import { ChzzkConfig, DefaultConfiguration } from '../config';
import { ChzzkRequest, ChzzkRequestServerType, ChzzkResponse } from '../request';
import { IChzzkChannel, IChzzkRecommendationChannelList } from './dto/channel';
import { IChzzkLiveDetail } from './dto/live';

export class ChzzkClient {
  private _cookieJar: CookieJar;
  private _client: AxiosInstance;

  constructor(private _config: ChzzkConfig, private _credential: ChzzkCredential | null) {
    this._cookieJar = new CookieJar();
    this._client = wrapper(
      axios.create({
        jar: this._cookieJar,
        headers: {
          'User-Agent': new UserAgent().toString(),
        },
      })
    );
  }

  public getRecommendadedChannels() {
    return this.request<IChzzkRecommendationChannelList>({
      serverType: ChzzkRequestServerType.Chzzk,
      method: 'GET',
      path: '/service/v1/home/recommendation-channels',
    });
  }

  public getChannelInfo(channelId: string) {
    return this.request<IChzzkChannel>({
      serverType: ChzzkRequestServerType.Chzzk,
      method: 'GET',
      path: `/service/v1/channels/${channelId}`,
    });
  }

  public getChannelLiveDetail(channelId: string) {
    return this.request<IChzzkLiveDetail>({
      serverType: ChzzkRequestServerType.Chzzk,
      method: 'GET',
      path: `/service/v3/channels/${channelId}/live-detail`,
    });
  }

  public async request<T>(req: ChzzkRequest): Promise<ChzzkResponse<T>> {
    const res = await this._client.request({
      method: req.method,
      url: this._normalizeURL(req.serverType, req.path),
      headers: {
        // It should be set to 'application/json' but it's not a big deal
        Accept: '*/*',
        ...req.extraHeaders,
      },
      data: req.data,
    });
    return {
      status: res.status,
      data: res.data,
    };
  }

  private _normalizeURL(serverType: ChzzkRequestServerType, path: string) {
    switch (serverType) {
      case ChzzkRequestServerType.Chzzk:
        return `https://${this._config.chzzkAPIHost}${path}`;
      case ChzzkRequestServerType.Common:
        return `https://${this._config.commonAPIHost}${path}`;
      case ChzzkRequestServerType.Naver:
        return `https://${this._config.naverAPIHost}${path}`;
      default:
        throw new Error('Invalid server type');
    }
  }

  public static create(config?: Partial<ChzzkConfig>, credential?: ChzzkCredential) {
    return new ChzzkClient({ ...DefaultConfiguration, ...config }, credential || null);
  }
}

export interface ChzzkCredential {
  /**
   * Origin cookie name: NID_AUT
   */
  authenticationToken: string;
  /**
   * Origin cookie name: NID_SES
   */
  sessionToken: string;
}
