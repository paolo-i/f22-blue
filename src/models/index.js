// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TestModel } = initSchema(schema);

export {
  TestModel
};