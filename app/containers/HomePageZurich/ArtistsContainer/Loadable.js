/**
 *
 * Asynchronously loads the component for ArtistsContainer
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
