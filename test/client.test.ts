import { ChzzkClient } from '../src';
import { DefaultConfiguration } from '../src/config';

const client = new ChzzkClient(DefaultConfiguration, null);

client.getChannelInfo('b628d1039a84ecc703804e17acee2eb3').then((x) => {
  console.log(x.data.content);
});
