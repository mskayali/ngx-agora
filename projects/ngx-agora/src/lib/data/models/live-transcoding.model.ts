import { TranscodingUser } from './transcoding-user.model';

export interface LiveTranscoding {
  /**
   * Bitrate of the CDN live audio output stream in Kbps.
   * Positive integer. The default value is `48`, and the highest value is `128`.
   */
  audioBitrate: number;
  /**
   * Agora’s self-defined audio channel type.
   *
   * Agora recommends choosing 1 or 2. Special players are required if you choose 3, 4 or 5:
   * 1. (Default) Mono
   * 2. Dual sound channels
   * 3. Three sound channels
   * 4. Four sound channels
   * 5. Five sound channels
   */
  audioChannels: 1 | 2 | 3 | 4 | 5;
  /**
   * Audio sampling rate:
   * - 32000: 32 kHz
   * - 44100: (Default) 44.1 kHz
   * - 48000: 48 kHz
   */
  audioSampleRate: 32000 | 44100 | 48000;
  /**
   * The background color in RGB hex value.
   *
   * Value only, do not include a #. The default value is `0x000000`. The value range is `[0x000000, 0xffffff]`.
   */
  backgroundColor?: number;
  /**
   * Height of the video.
   *
   * Positive integer, the default value is 360. The value range is `[1, 10000]`.
   */
  height?: number;
  /**
   * - true: Low latency with unassured quality.
   * - false: (Default）High latency with assured quality.
   */
  lowLatency?: boolean;
  /**
   * Manages the user layout configuration in the CDN live streaming.
   *
   * Agora supports a maximum of 17 transcoding users in a CDN streaming channel.
   * @see [TranscodingUser](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.transcodinguser.html) for details.
   */
  transcodingUsers?: TranscodingUser[];
  /**
   * Number of users; default value is 0. The maximum is 17.
   */
  userCount?: number;
  /**
   * Bitrate of the CDN live output video stream.
   *
   * Positive integer. The default value is 400 Kbps. The value range is `[1,1000000]`.
   */
  videoBitrate?: number;
  /**
   * Video codec profile type:
   *
   * - 66: Baseline video codec profile. Generally used in video calls on mobile phones.
   * - 77: Main video codec profile.Generally used in mainstream electronics, such as MP4 players, portable video players, PSP, and iPads.
   * - 100: (Default) High video codec profile.Generally used in high - resolution broadcasts or television.
   */
  videoCodecProfile?: 66 | 77 | 100;
  /**
   * Frame rate of the output data stream set for CDN live.
   *
   * Positive integer. The default value is 15 fps. The value range is `[1, 10000]`.
   */
  videoFramerate?: number;
  /**
   * Video GOP in frames. The default value is 30 frames. The value range is `[1,10000]`.
   */
  videoGop?: number;
  /**
   * Width of the video.
   *
   * Positive integer, the default value is `640`. The value range is `[1, 10000]`.
   */
  width?: number;
}
