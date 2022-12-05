// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Artwork, Settings, Notification } = initSchema(schema);

export {
  Artwork,
  Settings,
  Notification
};