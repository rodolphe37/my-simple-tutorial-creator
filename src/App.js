import { EditorProvider } from "context";
import CodeBar from "components/CodeBar";
import Preview from "components/Preview";
import Header from "components/Header";
import styles from "./App.module.css";
import PwaLogo from "./assets/pwa-pass-3.svg";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
