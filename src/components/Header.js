import Webcam from "react-webcam";
import styles from "./Header.module.css";
import { useState } from "react";
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
  BsFillRecordCircleFill,
  BsFillStopCircleFill,
} from "react-icons/bs";
import Draggable from "react-draggable";
import { useReactMediaRecorder } from "react-media-recorder";
import Logo from "../assets/camcorder.svg";

function Header() {
  const [talkingHead, setTalkingHead] = useState(false);
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true, screen: true });

  return (
    <>
      <header className={styles.header}>
        {mediaBlobUrl && status === "stopped" && (
          <a
            href={mediaBlobUrl}
            download={"video.mp4"}
            className={`${styles.button} ${styles.downloadButton}`}
          >
            Download Video
          </a>
        )}
        <div className={styles.logoContainer}>
          <img className={styles.logoPicture} src={Logo} alt="" width="50" />
          <h1 className={styles.LogoTitle}>My Simple Tutorial Creator v.1.0</h1>
        </div>
        <div className={styles.buttonsContainer}>
          {(status === "idle" || status === "stopped") && (
            <button onClick={startRecording} className={styles.button}>
              <BsFillRecordCircleFill fill="#2dfb2d" size={23} />
            </button>
          )}
          {status === "recording" && (
            <button onClick={stopRecording} className={styles.button}>
              <BsFillStopCircleFill fill="#f34040" size={23} />
            </button>
          )}

          <button
            onClick={() => setTalkingHead(!talkingHead)}
            className={styles.button}
          >
            {(talkingHead && (
              <BsFillCameraVideoFill fill="#fff" size={23} />
            )) || <BsFillCameraVideoOffFill fill="#fff" size={23} />}
          </button>
        </div>
      </header>
      {talkingHead && (
        <Draggable>
          <Webcam
            className={styles.camera}
            audio={false}
            width={200}
            height={200}
            videoConstraints={{
              width: 200,
              height: 200,
              facingMode: "user",
            }}
          />
        </Draggable>
      )}
    </>
  );
}

export default Header;
