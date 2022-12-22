// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Foodie, Foodo, Food } = initSchema(schema);

export {
  Foodie,
  Foodo,
  Food
};