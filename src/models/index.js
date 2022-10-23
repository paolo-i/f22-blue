// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Settings, User, Profile } = initSchema(schema);

export {
  Settings,
  User,
  Profile
};