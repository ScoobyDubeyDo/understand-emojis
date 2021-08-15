import "./styles.css";

import { useState } from "react";

function App() {
  const emojiDB = {
    "😀": "Grinning Face",
    "😁": "Beaming Face with Smiling Eyes",
    "😂": "Face with Tears of Joy",
    "🤣": "Rolling on the Floor Laughing",
    "😉": "Winking Face",
    "😆": "Grinning Squinting Face",
    "😋": "Face Savoring Food",
    "🤩": "Star-Struck",
    "🙃": "Upside-Down Face"
  };

  const emojis = Object.keys(emojiDB);

  const [meaning, setMeaning] = useState(" ");

  const meaningHandler = (e) => {
    if (e.target.value in emojiDB) {
      setMeaning(emojiDB[e.target.value]);
    } else {
      setMeaning("We don't have that emoji in our data base");
    }
  };

  const emojiClickHandler = (emoji) => {
    setMeaning(emojiDB[emoji]);
  };

  return (
    <div className="App">
      <h1>Inside emojis</h1>
      <input type="text" onChange={meaningHandler} />
      <div id="output"> {meaning} </div>
      <h2>Emojis we know</h2>
      {emojis.map((emoji) => {
        return (
          <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

export default App;
