const React = require("react")
const ReactDOM = require("react-dom")

const styles = require("./style.module.css")

const dom_app = document.getElementById('app')
if (dom_app) {
  const root = ReactDOM.createRoot(dom_app);
  root.render(<App />);
}

function App() {
  return (
    <main>
      <InstagramPost name={"changwei1997"} photo={"假裝這裡有照片"} intraction={{like: 12, comment: 56}} />
      <InstagramPost name={"ntust"} photo={"Tiger Duck"} intraction={{like: 78, comment: 910}} />
      <InstagramPost name={"gdg.ntust"} photo={
        <img
          src="./gdg_ntust.jpg"
          alt="gdg ntust"
        />
      } intraction={{like: 321, comment: 789}} />
    </main>
  )
}

function InstagramPost(props) {
  const [like, setLike] = React.useState(props.intraction.like)
  const [comment, setComment] = React.useState(props.intraction.comment)
  React.useEffect(() => {
    window.document.title = "set by React.useEffect"
  }, [])
  const dom_video = React.useRef(null)
  return (
    <div>
      <div>
        [Avatar]: Name: {props.name}
      </div>
      <div>
        {/*{props.photo}*/}
        <video width={320} height={240} ref={dom_video}>
          <source src="./NTUST-3min-1M.mp4" type="video/mp4"/>
        </video>
      </div>
      <div>
        <div className={styles.like} onClick={() => setLike((draft) => draft + 1)}>Like: {like}</div>
        <div className={styles.comment} onClick={() => setComment((draft) => draft + 1)}>Comment: {comment}</div>
        <button onClick={() => dom_video.current.play()}>Play</button>
        <button onClick={() => dom_video.current.pause()}>Pause</button>
      </div>
      <hr/>
    </div>
  )
}
