import {CollectionType} from './colletion-type.enum';

export interface QueryArgs {
  token: string;
  collectionType?: CollectionType;
  collectionName?: string;
}
