import { RemoteVideoStats } from './remote-video-stats.model';

/**
 * A list of `RemoteVideoStats` objects, one per uid.
 */
export interface RemoteVideoStatsMap {
  [uid: string]: RemoteVideoStats;
}
