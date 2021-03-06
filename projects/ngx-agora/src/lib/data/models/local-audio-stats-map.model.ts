import { LocalAudioStats } from './local-audio-stats.model';

/**
 * A list of `LocalAudioStats` objects, one per uid.
 */
export interface LocalAudioStatsMap {
  [uid: string]: LocalAudioStats;
}
