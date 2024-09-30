import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";  // 如果需要自定義CSS，可以在這裡引入

function App() {
  const [page, setPage] = useState("audioVideo");

  const pageTitles = {
    audioVideo: "一對一語音及影音對講",
    broadcast: "一對多語音廣播",
    camera: "IP Camera 影像與截圖",
    lcd: "LCD 顯示控制",
    ioControl: "數位 I/O 控制",
    music: "音源傳輸播放",
    lineNotify: "LINE Notify 通知",
  };

  return (
    <div className="App" style={{ backgroundColor: "#f5f5f5", minHeight: "100vh", paddingBottom: "20px" }}>
      {/* 使用 Bootstrap 的 Navbar 顯示標題 */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <span className="navbar-brand">{pageTitles[page]}</span>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={() => setPage("audioVideo")}>
              <a className="nav-link" href="#">一對一語音及影音對講</a>
            </li>
            <li className="nav-item" onClick={() => setPage("broadcast")}>
              <a className="nav-link" href="#">一對多語音廣播</a>
            </li>
            <li className="nav-item" onClick={() => setPage("camera")}>
              <a className="nav-link" href="#">IP Camera 影像與截圖</a>
            </li>
            <li className="nav-item" onClick={() => setPage("lcd")}>
              <a className="nav-link" href="#">LCD 顯示控制</a>
            </li>
            <li className="nav-item" onClick={() => setPage("ioControl")}>
              <a className="nav-link" href="#">數位 I/O 控制</a>
            </li>
            <li className="nav-item" onClick={() => setPage("music")}>
              <a className="nav-link" href="#">音源傳輸播放</a>
            </li>
            <li className="nav-item" onClick={() => setPage("lineNotify")}>
              <a className="nav-link" href="#">LINE Notify 通知</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="content-box p-4">
          {/* 一對一語音及影音對講 */}
          {page === "audioVideo" && (
            <section>
              <div className="card">
                <div className="card-body">
                  <video className="w-100 mb-3" src="video-source.mp4" controls></video>
                  <button className="btn btn-primary btn-lg me-3 mb-3">撥打</button>
                  <button className="btn btn-danger btn-lg me-3 mb-3">掛斷</button>
                  <button className="btn btn-secondary btn-lg me-3 mb-3">靜音</button>
                  <button className="btn btn-secondary btn-lg mb-3">開啟/關閉攝像頭</button>
                </div>
              </div>
            </section>
          )}

          {/* 一對多語音廣播 */}
          {page === "broadcast" && (
            <section>
              <div className="card">
                <div className="card-body">
                  <ul className="list-group mb-3">
                    <li className="list-group-item">頻道 1</li>
                    <li className="list-group-item">頻道 2</li>
                    <li className="list-group-item">頻道 3</li>
                  </ul>
                  <button className="btn btn-primary btn-lg me-3 mb-3">開始廣播</button>
                  <button className="btn btn-danger btn-lg mb-3">結束廣播</button>
                </div>
              </div>
            </section>
          )}

          {/* IP Camera 影像與截圖 */}
          {page === "camera" && (
            <section>
              <div className="card">
                <div className="card-body">
                  <img className="w-100 mb-3" src="camera-stream.jpg" alt="IP Camera Stream" />
                  <button className="btn btn-primary btn-lg mb-3">截圖</button>
                  <div className="mt-4">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <img src="screenshot1.jpg" alt="Screenshot 1" className="w-50" />
                      </li>
                      <li className="list-group-item">
                        <img src="screenshot2.jpg" alt="Screenshot 2" className="w-50" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* LCD 顯示控制 */}
          {page === "lcd" && (
            <section>
              <div className="card">
                <div className="card-body">
                  <input type="file" className="form-control mb-3" />
                  <button className="btn btn-primary btn-lg me-3 mb-3">上傳圖片</button>
                  <button className="btn btn-secondary btn-lg mb-3">預覽</button>
                  <div className="mt-3">
                    <img src="preview.jpg" alt="LCD Preview" className="w-100" />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* 數位 I/O 控制 */}
          {page === "ioControl" && (
            <section>
              <div className="card">
                <div className="card-body">
                  <div className="mb-3">
                    <div>DI 1: <span className="badge bg-success">開啟</span></div>
                    <div>DI 2: <span className="badge bg-danger">關閉</span></div>
                    <div>DI 3: <span className="badge bg-success">開啟</span></div>
                  </div>
                  <button className="btn btn-primary btn-lg me-3 mb-3">開啟 DO 1</button>
                  <button className="btn btn-danger btn-lg me-3 mb-3">關閉 DO 1</button>
                  <button className="btn btn-primary btn-lg me-3 mb-3">開啟 DO 2</button>
                  <button className="btn btn-danger btn-lg mb-3">關閉 DO 2</button>
                </div>
              </div>
            </section>
          )}

          {/* 音源傳輸播放 */}
          {page === "music" && (
            <section>
              <div className="card">
                <div className="card-body">
                  <ul className="list-group mb-3">
                    <li className="list-group-item">曲目 1</li>
                    <li className="list-group-item">曲目 2</li>
                    <li className="list-group-item">曲目 3</li>
                  </ul>
                  <button className="btn btn-primary btn-lg me-3 mb-3">播放</button>
                  <button className="btn btn-secondary btn-lg me-3 mb-3">暫停</button>
                  <button className="btn btn-danger btn-lg mb-3">停止</button>
                </div>
              </div>
            </section>
          )}

          {/* LINE Notify 通知 */}
          {page === "lineNotify" && (
            <section>
              <div className="card">
                <div className="card-body">
                  <input type="text" className="form-control mb-3" placeholder="輸入通知內容" />
                  <button className="btn btn-primary btn-lg me-3 mb-3">發送通知</button>
                  <div className="mt-4">
                    <ul className="list-group">
                      <li className="list-group-item">通知 1: 成功</li>
                      <li className="list-group-item">通知 2: 成功</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;