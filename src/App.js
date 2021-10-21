import { EditorProvider } from "context";
import CodeBar from "components/CodeBar";
import Preview from "components/Preview";
import Header from "components/Header";
import styles from "./App.module.css";
import PwaLogo from "./assets/pwa-pass-3.svg";
import { isMobile } from "react-device-detect";
import NoMobile from "./assets/smartphone.svg";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      {!isMobile ? (
        <EditorProvider>
          <div className="ribbon ribbon-top-right">
            <span>
              <img className="picture-ribbon" src={PwaLogo} alt="ribbon" />
            </span>
          </div>
          <CodeBar />
          <main className={styles.main}>
            <Header />
            <Preview />
          </main>
        </EditorProvider>
      ) : (
        <div
          style={{
            background: "rgb(85 4 135)",
            width: "100%",
            height: "100vh",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            className="rotate-in-center"
            style={{ marginTop: -40, marginBottom: 45 }}
            src={NoMobile}
            alt="noMobile"
            width="125"
          />
          <strong
            className="tracking-in-expand"
            style={{ fontSize: 22, marginBottom: 12 }}
          >
            This app is not for mobile devices
          </strong>
          <p
            className="tracking-in-contract-bck-bottom"
            style={{ fontStyle: "italic" }}
          >
            To see the app correctly, open it to desktop computer...
          </p>
        </div>
      )}
    </Fragment>
  );
}

export default App;
