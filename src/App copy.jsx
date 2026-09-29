
import { useState } from "react";
import "./App.css";

const moods = [
  "Heartbreak",
  "Sukoon",
  "Ishq",
  "Nostalgia",
  "Rainy-night vibes",
  "Happiness",
  "Longing",
  "Hope",
];

function App() {
  const [entered, setEntered] = useState(false);
const [selectedMood, setSelectedMood] = useState(null);
const [roomOpen, setRoomOpen] = useState(false);
  return (
    <main className="app">
      {!entered ? (
        <section className="welcome-screen">
          <div className="golden-glow" />
          <div className="golden-particles" />

          <div className="welcome-content">
            <p className="eyebrow">A world of Pakistani OSTs</p>

            <div className="room-logo">
              <span className="logo-ornament">✦</span>
              <h1>OST Listening Room</h1>
              <span className="logo-ornament">✦</span>
            </div>

            <p className="welcome-line">
              Some songs don't just play.
              <br />
              They stay with you.
            </p>

            <button
              className="enter-button"
              onClick={() => setEntered(true)}
            >
              Enter the Room
              <span aria-hidden="true"> ↗</span>
            </button>
          </div>

          <div className="scroll-hint">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-arrow">↓</span>
          </div>
        </section>
      ) : (
<section className="mood-screen"> 
         <p className="eyebrow">Your room. Your mood.</p>
          <h2>What are you feeling today?</h2>
          {selectedMood && <p>You selected: {selectedMood}</p>}

          <p className="mood-description">
            Choose a mood. Let the music take you somewhere.
          </p>

          <div className="mood-grid">
            {moods.map((mood) => (
              <button
  className="mood-card"
  key={mood}
onClick={() => {
  setSelectedMood(mood);
  setRoomOpen(true);
}}>

                {mood}
                <span aria-hidden="true"> ↗</span>
              </button>
            ))}
          </div>

          <button
            className="back-button"
            onClick={() => setEntered(false)}
          >
            ← Back to welcome
          </button>
        </section>
      )}


      {!entered && (
        <>
          <section className="note-section">
            <p className="eyebrow">A little note from us</p>
            <h2>Some feelings need a soundtrack.</h2>
            <p>
              For the memories, the moments, and the songs
              that somehow understand you.
            </p>
          </section>

          <section className="drama-hub-section">
            <p className="eyebrow">A little something more</p>
            <h2>Step Into Drama Hub</h2>
            <p>
              Your next favourite story might be waiting.
            </p>
            <a
              className="drama-hub-link"
              href="https://sites.google.com/view/thedramahub
              "
              target="_blank"
              rel="noreferrer"
            >
              Explore Drama Hub ↗
            </a>
          </section>

          <p className="closing-line">
            Scroll back up to select your mood ↑
          </p>
        </>
      )}
    </main>
  );
}

export default App;