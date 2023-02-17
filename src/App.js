import "./styles.css";
import { useState } from "react";

const emojiPedia = {
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "😮‍💨": "Face Exhaling",
  "🤥": "Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": "Sleepy Face"
};
export default function App() {
  const [meaning, setMeaning] = useState("");
  const [getMeaning, setgetMeaning] = useState("");

  function changeHandler(event) {
    let userInput = event.target.value;
    let meaning = emojiPedia[userInput];

    setMeaning(meaning);
  }

  // function emojiHandler(){
  /***
   * I was not able get the value of emoji by clicking while using
   * map function in emojiHandler Fuction don"t know how perfect my code is.
   * but I have leaned alot by making this project
   */
  var showEmoji = Object.keys(emojiPedia);

  function clickHandler(event) {
    let clickInput = event.target.innerText;
    // console.log(emojiPedia[clickInput]);
    let clickMeaning = emojiPedia[clickInput];

    setgetMeaning(clickMeaning);
  }
  // // console.log(showEmoji);
  //   var emo=showEmoji.map
  //   return emo

  // }
  return (
    <div className="App">
      <h1 style={{ color: "orange" }}>Boom Booooom...</h1>
      <input onChange={changeHandler} />

      <div onClick={clickHandler} className="emoji">
        {showEmoji.map((item) => {
          return <span>{item}</span>;
        })}
      </div>

      <h2>
        Meaning : {meaning} {getMeaning}
      </h2>
    </div>
  );
}
