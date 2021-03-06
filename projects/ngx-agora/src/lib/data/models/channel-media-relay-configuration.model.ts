import {
  DestinationChannelInfo,
  SourceChannelInfo,
} from './channel-info.model';

/**
 * Configurations of the media stream relay.
 *
 * @description
 * Use this interface to set the media stream relay when calling
 * [startChannelMediaRelay](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.client.html#startchannelmediarelay)
 * or [updateChannelMediaRelay](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.client.html#updatechannelmediarelay).
 *
 * @since 3.0.0
 */
export interface ChannelMediaRelayConfiguration {
  /**
   * Removes the destination channel.
   *
   * @example
   * configuration.removeDestChannelInfo("cname")
   */
  removeDestChannelInfo: (channelName: string) => void;
  /**
   * Sets the information of the destination channel.
   *
   * To relay a media stream across multiple channels, call this method as many times (to a maximum of four).
   *
   * @example
   * var configuration = new AgoraRTC.ChannelMediaRelayConfiguration();
   *    configuration.setDestChannelInfo("cname", {
   *     channelName: "destChannel",
   *     uid: 123,
   *     token: "yourDestToken",
   *  })
   *
   * @param channelName The name of the destination channel.
   * Ensure that the value of this parameter is the same as the value of `channelName` in `destInfo`.
   * @param destInfo The information of the destination channel
   *
   */
  setDestChannelInfo: (
    channelName: string,
    destInfo: DestinationChannelInfo
  ) => void;
  /**
   * Sets the information of the source channel.
   *
   * @example
   * var configuration = new AgoraRTC.ChannelMediaRelayConfiguration();
   * configuration.setSrcChannelInfo({
   *  channelName: "srcChannel",
   *  uid: 123,
   *  token: "yourSrcToken",
   * })
   */
  setSrcChannelInfo: (srcInfo: SourceChannelInfo) => void;
}
