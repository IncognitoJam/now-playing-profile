import React from 'react';
import Text from './Text';
import ReadmeImg from './ReadmeImg'

export interface Props {
  track: string;
  artist: string;
  width: number;
}

export const Track: React.FC<Props> = ({
  track,
  artist,
  width,
}) => {
  return (
    <ReadmeImg width={width} height="64">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: 8,
          paddingLeft: 4,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            marginTop: -4,
            marginLeft: 8,
          }}
        >
          <Text id="track" weight="bold">
            {track}
          </Text>
          <Text id="artist" color="gray">
            {artist}
          </Text>
        </div>
      </div>
    </ReadmeImg>
  )
};
