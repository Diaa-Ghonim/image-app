import { parseQueriesObject } from '../../utils/queriesUrlHelpers';
import { HttpClient } from '../../utils/HttpClient';

const getImagesAPI = function (page) {
  const queryString = parseQueriesObject({ page, per_page: 10 });
  return HttpClient.get({ endpoint: '/photos/', queryString }).then(
    (res) => res.data
  );
};

export { getImagesAPI };
