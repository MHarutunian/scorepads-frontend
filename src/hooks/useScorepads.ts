import { Scorepad } from '../Jank/Scorepads/types';
import { ApiScorepad, mapScorepads } from '../services/map.service';
import useApi from './useApi';

const useScorepads = (game: string): [Error | null, Scorepad[] | null] => (
  useApi<ApiScorepad[], Scorepad[]>(`/scorepads/?game=${game}`, mapScorepads)
);
export default useScorepads;
