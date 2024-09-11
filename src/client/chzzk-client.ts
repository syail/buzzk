import { ChzzkConfig, DefaultConfiguration } from '../config';

export class ChzzkClient {
  constructor(private _config: ChzzkConfig, private _credential: ChzzkCredential | null) {}

  public static create(config?: Partial<ChzzkConfig>, credential?: ChzzkCredential) {
    return new ChzzkClient({ ...DefaultConfiguration, ...config }, credential || null);
  }
}

export interface ChzzkCredential {
  /**
   * NID_AUT
   */
  authenticationToken: string;
  /**
   * NID_SES
   */
  sessionToken: string;
}
