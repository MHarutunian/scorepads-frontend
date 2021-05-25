import { Scorepad } from '../Jank/Scorepads/types';
import { ApiScorepad, mapScorepad } from '../services/map.service';
import useApi from './useApi';

const useScorepad = (id: string, initialScorepad?: Scorepad): [Error | null, Scorepad | null] => (
  useApi<ApiScorepad, Scorepad>(`/scorepads/${id}`, mapScorepad, initialScorepad)
);

export default useScorepad;
