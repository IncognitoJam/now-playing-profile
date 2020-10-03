import React from "react";
import ReadmeImg from "./ReadmeImg";
import Text from "./Text";

export interface Props {
  cover?: string;
  track: string;
  artist: string;
  progress: number;
  duration: number;
  isPlaying: boolean;
  dark: boolean;
}

export const Player: React.FC<Props> = ({
  cover,
  track,
  artist,
  progress,
  duration,
  isPlaying,
  dark,
}) => {
  return (
    <ReadmeImg width="256" height="64">
      <style>
        {dark
          ? <style>{`
            .progress-bar { border-color: #e1e4e8; }
            #progress { background-color: #586069; }
          `}</style>
          : <style>{`
            .progress-bar { border-color: #24292e; }
            #progress { background-color: #24292e; }
          `}</style>
        }
        {`
            .paused { 
              animation-play-state: paused !important;
              background: #e1e4e8 !important;
            }

            img:not([src]) {
              content: url("data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
              border-radius: 6px;
              background: #FFF;
              border: 1px solid #e1e4e8;
            }

            p {
              display: block;
              opacity: 0;
            }

            .progress-bar {
              position: relative;
              width: 100%;
              height: 4px;
              margin: -1px;
              border: 1px solid #24292e;
              border-radius: 4px;
              overflow: hidden;
              padding: 2px;
              z-index: 0;
            }

            #progress {
              position: absolute;
              top: -1px;
              left: 0;
              width: 100%;
              height: 6px;
              transform-origin: left center;
              background-color: #24292e;
              animation: progress ${duration}ms linear;
              animation-delay: -${progress}ms;
            }

            .progress-bar,
            #track,
            #artist,
            #cover {
              opacity: 0;
              animation: appear 300ms ease-out forwards;
            }

            #track {
              animation-delay: 400ms;
            }
            #artist {
              animation-delay: 500ms;
            }
            .progress-bar {
              animation-delay: 550ms;
              margin-top: 4px;
            }

            #cover {
              animation-name: cover-appear;
              animation-delay: 300ms;
              box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 3px 10px rgba(0,0,0,0.05);
            }

            #cover:not([src]) {
              box-shadow: none;
            }

            @keyframes cover-appear {
              from {
                opacity: 0;
                transform: scale(0.8);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes appear {
              from {
                opacity: 0;
                transform: translateX(-8px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes progress {
              from {
                transform: scaleX(0)
              }
              to {
                transform: scaleX(1)
              }
            }
        `}
      </style>
      <div
        className={isPlaying ? "disabled" : ""}
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: 8,
          paddingLeft: 4,
        }}
      >
        <img id="cover" src={cover ?? null} width="48" height="48" />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            marginTop: -4,
            marginLeft: 8,
          }}
        >
          <Text id="track" weight="bold" color={dark ? "gray-light" : "default"}>
            {`${track ?? ""} `.trim()}
          </Text>
          <Text id="artist" color={!track ? (dark ? "light" : "gray") : (dark ? "gray" : "default")}>
            {artist || "Nothing playing..."}
          </Text>
          {track && (
            <div className="progress-bar">
              <div id="progress" className={!isPlaying ? "paused" : ""} />
            </div>
          )}
        </div>
      </div>
    </ReadmeImg>
  );
};
