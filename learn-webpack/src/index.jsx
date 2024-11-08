const React = require("react")
const ReactDOM = require("react-dom")

const dom_app = document.getElementById('app')
const root = ReactDOM.createRoot(dom_app);
root.render(<App />);

function App() {
  return (
    <main>
      <InstagramPost name={"changwei1997"} photo={"假裝這裡有照片"} intraction={{like: 12, comment: 56}} />
      <InstagramPost name={"ntust"} photo={"Tiger Duck"} intraction={{like: 78, comment: 910}} />
      <InstagramPost name={"gdg.ntust"} photo={
        <img
          src="./gdg_ntust.jpg"
          alt="gdd ntust"
        />
      } intraction={{like: 321, comment: 789}} />
    </main>
  )
}

function InstagramPost(props) {
  const [like, setLike] = React.useState(props.intraction.like)
  const [comment, setComment] = React.useState(props.intraction.comment)
  return (
    <div>
      <div>
        [Avatar]: Name: {props.name}
      </div>
      <div>
        {props.photo}
      </div>
      <div>
        <div onClick={() => setLike((draft) => draft + 1)}>Like: {like}</div>
        <div onClick={() => setComment((draft) => draft + 1)}>Comment: {comment}</div>
      </div>
      <hr/>
    </div>
  )
}
