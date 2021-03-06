/**
 * A class for configuring the imported live broadcast voice or video stream.
 *
 * @example
 * const injectStreamConfig = {
 *  width: 0,
 *  height: 0,
 *  videoGop: 30,
 *  videoFramerate: 15,
 *  videoBitrate: 400,
 *  audioSampleRate: 44100,
 *  audioChannels: 1,
 * };
 */
export interface InjectStreamConfig {
  /**
   * Audio bitrate of the added stream to the broadcast.
   * Positive integer. The default value is 48. The value range is [1, 10000].
   *
   * @remark
   * Agora recommends that you stay with the default value and not reset it at this point of time.
   */
  audioBitrate?: number;
  /**
   * Audio channels to add into the broadcast.
   * Positive integer. The default value is 1. The value range is [1, 2].
   *
   * @remark
   * Agora recommends that you stay with the default value and not reset it at this point of time.
   */
  audioChannels?: number;
  /**
   * Audio sampling rate of the added stream to the broadcast.
   * 32000: 32 kHz
   * 44100: (Default) 44.1 kHz
   * 48000: 48 kHz
   *
   * @remark
   * Agora recommends that you stay with the default value and not reset it at this point of time.
   */
  audioSampleRate?: number;
  /**
   * Video bitrate of the added stream to the broadcast.
   * Positive integer. The default value is 400 Kbps. The value range is [1, 10000].
   *
   * @remark
   * The setting of the video bitrate is closely linked to the resolution. If the video bitrate you set is beyond
   * the reasonable range, the SDK will set it within the reasonable range instead.
   */
  videoBitrate?: number;
  /**
   * Video frame rate of the added stream to the broadcast.
   * Positive integer. The default value is 15 fps. The value range is [1, 10000].
   */
  videoFramerate?: number;
  /**
   * Video GOP of the added stream to the broadcast.
   * Positive integer. The default value is 30 frames. The value range is [1, 10000].
   */
  videoGop?: number;
  /**
   * Width of the added stream to the broadcast.
   * Integer, the default value is 0, which is the same width as the original stream. The value range is [0, 10000].
   */
  width?: number;
  /**
   * Height of the added stream to the broadcast.
   * Integer, the default value is 0, which is the same height as the original stream. The value range is [0, 10000].
   */
  height?: number;
}
