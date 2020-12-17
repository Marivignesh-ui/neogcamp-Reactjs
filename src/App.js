import React, { useState } from "react";
import "./styles.css";

const emojidictionary = {
  "😂": "Face with Tears of Joy",
  "😊": "smiling",
  "🤣": "Rolling on the Floor Laughing",
  "🥰": "Smiling Face with Hearts",
  "😘": "Face Blowing a Kiss",
  "😋": "Face Savoring Food",
  "🤔": "Thinking Face",
  "😬": "Grimacing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🤮": "Face Vomiting",
  "😵": "Dizzy Face",
  "🥳": "Partying Face",
  "😨": "Fearful Face",
  "😱": "Face Screaming in Fear",
  "😫": "Tired Face",
  "👿": "Angry Face with Horns",
  "☠️": "Skull and Crossbones",
  "💩": "Pile of Poo",
  "🤡": "Clown Face",
  "": "",
  "🤑":"Money-Mouth Face",
  "🤗":"Hugging Face",
  "🤫":"Shushing Face",
  "😏":"Smirking Face",
  "😒":"Unamused Face",
  "🤧":"Sneezing Face",
  "👨‍🎓":"Man Student",
  "🤦‍♂️":"Man Facepalming",
  "🤷":"Person Shrugging",
  "🚶":"Person Walking",
};
var previous;

export default function App() {
  var [var2, setvalue] = useState("");
  var list = Object.keys(emojidictionary);
  function changestate() {
    var inp = event.target.value;
    if (inp in emojidictionary) setvalue(emojidictionary[inp]);
    else setvalue("Oo!! We don't have that in our library");
  }

  function clickhandler(emoji) {
    if (previous !== undefined) {
      previous.style.backgroundColor = "white";
    }
    var em = event.target;
    em.style.backgroundColor = "blue";
    previous = em;
    setvalue(emojidictionary[emoji]);
  }
  return (
    <div className="App">
      <header>
      <h1>Emoji translation</h1>
      </header>
      <br></br>
      <input onChange={changestate} placeholder="Put your emoji here"></input>
      <h2>{var2}</h2>
      <ul style={{ listStyle: "none", textAlign: "justify" }}>
        {list.map(function (emoji) {
          return (
            <li
              style={{
                display: "inline",
                padding: "1%",
                fontSize: "2rem",
                textAlign: "justify",
                cursor: "pointer"
              }}
              onClick={() => clickhandler(emoji)}
              key={emoji}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
      <footer style={{padding:"5px"}}>
            <h2>About</h2>
            <p>This is a simple React app to find the meaning of emojis you may not know.Simply type the emoji or click on the list of emojis to find meaning</p>
            <strong>follow me on:</strong>&nbsp;
            <a href="https://github.com/marivignesh-ui"><i class="fab fa-github socialmedia" style={{fontSize:"30px"}} ></i></a>&nbsp;&nbsp;
            <a href="https://www.instagram.com/marivignesh499/"><i class="fab fa-instagram socialmedia" style={{fontSize:"30px"}}></i></a>
        </footer>
    </div>
  );
}
