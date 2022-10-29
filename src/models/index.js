// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Artwork, Settings, User, Profile } = initSchema(schema);

export {
  Artwork,
  Settings,
  User,
  Profile
};