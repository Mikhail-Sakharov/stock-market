import {QueryArgs} from './types/query-args.interface';

export const getQueryString = (queryArgs?: QueryArgs) => {
  if (!queryArgs) {return '';}

  const queryParams = [
    `token=${queryArgs.token}`,
    `${queryArgs.collectionName ? `collectionName=${queryArgs.collectionName}` : ''}`
  ];

  const isNotEmptyString = queryParams.filter((param) => param !== '').join('') !== '';

  const queryString = isNotEmptyString ? `?${queryParams.filter((param) => param !== '').join('&')}` : '';

  return queryString;
};
