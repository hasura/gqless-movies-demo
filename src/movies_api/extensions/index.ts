import { GET_KEY, REDIRECT, RedirectHelpers } from "gqless";

// Keyed values
// object name `movies` must match type name from our schema
export const movies = {
  [GET_KEY]: (movie: any) => movie.id
  // now the movie should be keyed by its `id` in the cache
};

// Cached redirects
// the names `query_root` and `movies_by_pk` are based on our schema
export const query_root = {
  movies_by_pk: {
    // we check the cache before fetching from the network
    [REDIRECT](args: any, { getByKey }: RedirectHelpers) {
      return getByKey(args.id);
    }
  }
};

/**
 * Add a key to a type
 */
// export const User = {
//   [GET_KEY]: (user) => user.id
// }

/**
 * Add custom data to a type
 * @example
 * query.users[0].follow()
 */
// export const User = (user) => ({
//   follow() {
//     console.log('follow', user.id)
//   }
// })
