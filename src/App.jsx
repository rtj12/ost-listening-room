import { useEffect, useRef, useState } from "react";

import "./App.css";

import tereBinCover from "./images/tere-bin.jpeg";
import mereMehboobCover from "./images/mere-mehboob.jpeg";
import humsafarCover from "./images/humsafar.jpeg";
import khaaniCover from "./images/khaani.jpeg";
import merePassTumHoCover from "./images/mere pass tum ho.jpeg";
import mujhePyaarHuaThaCover from "./images/mujhe pyaar hua tha.jpeg";
import ostLogo from "./images/ost-listening-room-logo.png";
import teraMeraCover from "./images/tere mera hai pyaar amar.jpg";
import qurbanCover from "./images/qurban.jpeg";
import mannJogiCover from "./images/mann jogi.jpeg";
import raazEUlfatCover from "./images/raaz e ulfat.jpeg";
import mzhtCover from "./images/mzht.jpeg";
import iqtidarCover from "./images/iqtidar.jpeg";
import jaanCover from "./images/jaan.jpeg";
import raadCover from "./images/radd.jpeg";
import mhgCover from "./images/mhg.jpg";
import kamCover from "./images/kam.jpeg";
import mannMayalCover from "./images/mm.jpeg";
import alvidaCover from "./images/aa.jpeg";
import ishqaanCover from "./images/ishqaan.jpeg";
import baatCover from "./images/baat.jpeg";
import mzht2Cover from "./images/mzht2.jpeg";
import dzpsCover from "./images/dzps.jpeg";
import guzCover from "./images/guz.jpeg";
import cdtkCover from "./images/cdtk.jpg";
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
const moodDescriptions = {
  "Heartbreak": "For the words left unsaid, and the feelings that remain.",
  "Sukoon": "A little stillness in a world that never slows down.",
  "Ishq": "For the kind of love that makes every song feel personal.",
  "Nostalgia": "Some memories never really leave us.",
  "Rainy-night vibes": "Raindrops outside, melodies deep within.",
  "Happiness": "For the moments you wish could last forever.",
  "Longing": "For the people and places your heart keeps returning to.",
  "Hope": "Even the quietest melody can carry a little light."
};
 
const featuredOSTs = {
 "Heartbreak": {
  title: "Baat",
  artist: "Asim Azhar",
  cover: baatCover,
  drama: "MEEM SE MOHABBAT",
  description:
    "A tender OST about the feelings that remain when some words are left unsaid.",
},

  "Sukoon": {
  title: "Tera Mera Hai Pyar Amar",
  artist: "Ahmed Jahanzeb",
  cover: teraMeraCover,
  drama: "ISHQ MURSHID",
  description:
    "A gentle, timeless melody that captures the warmth of love, comfort, and quiet moments together.",
},
 "Ishq": {
  title: "Qurbaniyan",
  artist: "Asim Azhar",
  cover: dzpsCover,
  drama: "DEKH ZARA PYAR SE",
  description:
    "A passionate OST filled with devotion, emotion, and the intensity of giving everything to love.",
},

 "Nostalgia": {
  title: "Chal Diye Tum Kahan",
  artist: "AUR",
  cover: cdtkCover,
  drama: "KABHI MAIN KABHI TUM",
  description:
    "A wistful melody that carries the feeling of memories, distance, and wondering where someone has gone.",
},

 "Rainy-night vibes": {
  title: "Ishqaan Di Maari Piyaan",
  artist: "Aashir Wajahat, Ahsan, Manzee & Sulaman Naseer",
  cover: ishqaanCover,
  drama: "KAFEEL",
  description:
    "A moody, emotional OST that feels made for quiet nights, rain outside, and thoughts that refuse to settle.",
},

 "Happiness": {
  title: "Meri Zindagi Hai Tu 2.0",
  artist: "Asim Azhar & Sabri Sisters",
  cover: mzht2Cover,
  drama: "MERI ZINDAGI HAI TU",
  description:
    "A warm and joyful melody celebrating the kind of love that makes ordinary moments feel special.",
},

 "Longing": {
  title: "Iqtidar",
  artist: "Arshman Khan & Farrukh Mehervi",
  cover: iqtidarCover,
  drama: "IQTIDAR",
  description:
    "An emotional OST shaped by distance, memories, and the feeling of holding onto someone from afar.",
},

"Hope": {
  title: "Tera Mera Hai Pyar Amar",
  artist: "Ahmed Jahanzeb",
  cover: teraMeraCover,
  drama: "ISHQ MURSHID",
  description:
    "A hopeful melody that carries the feeling that love, even through uncertainty, can still lead somewhere beautiful.",
},
};

const moodCollections = {
  "Heartbreak": [
    {
      title: "Tere Bin",
      artist: "Shani Arshad",
      cover: tereBinCover,
      description:
        "A deeply emotional OST shaped by love, distance, and the ache of wanting someone close.",
    },
    {
      title: "Mere Mehboob",
      artist: "Ahmed Jahanzeb",
      cover: mereMehboobCover,
      description:
        "A soulful OST about deep affection, emotional distance, and the feeling of missing someone you cannot forget.",
    },
    {
      title: "Humsafar",
      artist: "Qurat-Ul- Ain Balouch",
      cover: humsafarCover,
      description:
        "A bittersweet OST filled with love, separation, and the memories that linger long after someone leaves.",
    },
    {
      title: "Khaani",
      artist: "Rahet Fateh Ali Khan",
      cover: khaaniCover,
      description:
        "A powerful emotional OST shaped by love, conflict, sacrifice, and the struggle between the heart and reality.",
    },
    {
      title: "Mere Paas Tum Ho",
      artist: "Rahet Fateh Ali Khan",
      cover: merePassTumHoCover,
      description:
        "A hauntingly emotional OST about love, heartbreak, regret, and the pain of realizing what truly mattered.",
    },
    {
      title: "Mujhe Pyaar Hua Tha",
      artist: "Kaifi Khalil",
      cover: mujhePyaarHuaThaCover,
      description:
        "A tender yet painful OST capturing young love, uncertainty, and the emotions that remain after things fall apart.",
    },
    {
      title: "Baat",
      artist: "Asim Azhar",
      drama: "Meem Se Mohabbat",
      cover: baatCover,
      description:
        "A tender OST about the feelings that remain when some words are left unsaid.",
    },
  ],

  "Sukoon": [
    {
      title: "Tera Mera Hai Pyar Amar",
      artist: "Ahmed Jahanzeb",
      cover: teraMeraCover,
      description:
        "A gentle, timeless melody that captures the warmth of love, comfort, and quiet moments together.",
    },
    {
      title: "Qurban",
      artist: "Masroor Ali Khan",
      cover: qurbanCover,
      description:
        "A soulful OST carrying the feeling of devotion, sacrifice, and quietly giving yourself to someone you love.",
    },
    {
      title: "Mann Jogi",
      artist: "Sahir Ali Bagga",
      cover: mannJogiCover,
      description:
        "A calm, soulful OST about finding comfort, connection, and a sense of peace in someone else's presence.",
    },
    {
      title: "Raaz-e-Ulfat",
      artist: "Shani Arshad & Aima Baig",
      cover: raazEUlfatCover,
      description:
        "A reflective OST about love, trust, and the quiet emotional weight that comes with complicated relationships.",
    },
  ],

  "Ishq": [
    {
      title: "Meri Zindagi Hai Tu",
      artist: "Asim Azhar",
      cover: mzhtCover,
      description:
        "A heartfelt OST about deep love, devotion, and the feeling of finding someone who becomes part of your world.",
    },
    {
      title: "Iqtidar",
      artist: "Arshman Khan & Farrukh Mehervi",
      cover: iqtidarCover,
      description:
        "An intense OST shaped by love, conflict, and the emotional pull between two people who cannot simply let go.",
    },
    {
      title: "Jaan-e-Jahan",
      artist: "Rahet Fateh Ali Khan",
      cover: jaanCover,
      description:
        "A graceful, emotional OST about love, longing, and the quiet moments that make someone impossible to forget.",
    },
    {
      title: "Radd",
      artist: "Asim Azhar",
      cover: raadCover,
      description:
        "A deeply emotional OST about love, uncertainty, and the struggle to hold onto someone through difficult moments.",
    },
    {
      title: "Tera Mera Hai Pyar Amar",
      artist: "Ahmed Jahanzeb",
      cover: teraMeraCover,
      description:
        "A gentle, timeless melody that captures the warmth of love, comfort, and quiet moments together.",
    },
    {
      title: "Qurbaniyan",
      artist: "Asim Azhar",
      drama: "DEKH ZARA PYAR SE",
      cover: dzpsCover,
      description:
        "A passionate OST filled with devotion, emotion, and the intensity of giving everything to love.",
    },
  ],

  "Nostalgia": [
    {
      title: "Main Haar Giyan",
      artist: "Naseebo Lal",
      cover: mhgCover,
      description:
        "A wistful OST about memories, loss, and the feeling of looking back at something you cannot return to.",
    },
    {
      title: "Khuda Aur Mohabbat S3",
      artist: "Rahet Fateh Ali Khan & Nish Asher",
      cover: kamCover,
      description:
        "A deeply moving OST about devotion, longing, and the kind of love that stays with you through everything.",
    },
    {
      title: "Mann Mayal",
      artist: "Quratulain Balouch & Shuja Haider",
      cover: mannMayalCover,
      description:
        "A nostalgic OST filled with tenderness, longing, and the memories of a love that never quite fades.",
    },
    {
      title: "Alvida Alvida",
      artist: "Nabeel Shaukat Ali",
      cover: alvidaCover,
      description:
        "A melancholic OST about farewell, memories, and the emotions that remain when someone becomes a part of your past.",
    },
    {
      title: "Chal Diya Tum Kahan",
      artist: "AUR",
      drama: "Kabhi Mein Kabhi Tum",
      cover: cdtkCover,
      description:
        "A wistful melody that carries the feeling of memories, distance, and wondering where someone has gone.",
    },
  ],

  "Rainy-night vibes": [
    {
      title: "Baat",
      artist: "Asim Azhar",
      cover: baatCover,
      description:
        "A tender OST about the feelings that remain when some words are left unsaid.",
    },
    {
      title: "Tere Bin",
      artist: "Shani Arshad",
      cover: tereBinCover,
      description:
        "A deeply emotional OST shaped by love, distance, and the ache of wanting someone close.",
    },
    {
      title: "Ishqaan Di Maari Piyaan",
      artist: "Aashir Wajahat & Manzee",
      drama: "Ishqaan Di Maari Piyaan",
      cover: ishqaanCover,
      description:
        "A moody, emotional OST that feels made for quiet nights, rain outside, and thoughts that refuse to settle.",
    },
  ],

  "Happiness": [
    {
      title: "Qurbaniyan",
      artist: "Asim Azhar",
      cover: dzpsCover,
      description:
        "A passionate OST filled with devotion, emotion, and the intensity of giving everything to love.",
    },
    {
      title: "Mere Mehboob",
      artist: "Ahmed Jahanzeb",
      cover: mereMehboobCover,
      description:
        "A soulful OST about deep affection, emotional distance, and the feeling of missing someone you cannot forget.",
    },
    {
      title: "Meri Zindagi Hai Tu 2.0",
      artist: "Asim Azhar",
      drama: "Meri Zindagi Hai Tu",
      cover: mzht2Cover,
      description:
        "A warm and joyful melody celebrating the kind of love that makes ordinary moments feel special.",
    },
  ],

  "Longing": [
    {
      title: "Meri Zindagi Hai Tu",
      artist: "Asim Azhar",
      cover: mzhtCover,
      description:
        "A heartfelt OST about deep love, devotion, and the feeling of finding someone who becomes part of your world.",
    },
    {
      title: "Tera Mera Hai Pyar Amar",
      artist: "Ahmed Jahanzeb",
      cover: teraMeraCover,
      description:
        "A gentle, timeless melody that captures the warmth of love, comfort, and quiet moments together.",
    },
    {
      title: "Khaani",
      artist: "Rahet Fateh Ali Khan",
      cover: khaaniCover,
      description:
        "A powerful emotional OST shaped by love, conflict, sacrifice, and the struggle between the heart and reality.",
    },
    {
      title: "Alvida Alvida",
      artist: "Nabeel Shaukat Ali",
      cover: alvidaCover,
      description:
        "A melancholic OST about farewell, memories, and the emotions that remain when someone becomes a part of your past.",
    },
    {
      title: "Iqtidar",
      artist: "Arshman Khan",
      drama: "Iqtidar",
      cover: iqtidarCover,
      description:
        "An emotional OST shaped by distance, memories, and the feeling of holding onto someone from afar.",
    },
  ],

  "Hope": [
    {
      title: "Meri Zindagi Hai Tu 2.0",
      artist: "Asim Azhar",
      cover: mzht2Cover,
      description:
        "A warm and joyful melody celebrating the kind of love that makes ordinary moments feel special.",
    },
    {
      title: "Qurbaniyan",
      artist: "Asim Azhar",
      cover: dzpsCover,
      description:
        "A passionate OST filled with devotion, emotion, and the intensity of giving everything to love.",
    },
    {
      title: "Guzaarishein",
      artist: "Samar Jafri & Alistair Alvin",
      cover: guzCover,
      description:
        "A gentle, hopeful OST about wishing, patience, and holding onto the possibility that things can still work out.",
    },
    {
      title: "Mann Jogi",
      artist: "Sahir Ali Bagga",
      cover: mannJogiCover,
      description:
        "A calm, soulful OST about finding comfort, connection, and a sense of peace in someone else's presence.",
    },
    {
      title: "Tera Mera Hai Pyar Amar",
      artist: "Ahmed Jahanzeb",
      drama: "Ishq Murshid",
      cover: teraMeraCover,
      description:
        "A hopeful melody that carries the feeling that love, even through uncertainty, can still lead somewhere beautiful.",
    },
  ],
};
const allOSTs = Object.entries(moodCollections).flatMap(
  ([mood, osts]) =>
    osts.map((ost) => ({
      ...ost,
      mood,
    }))
);
const youtubeVideos = {
  "Baat": "SrKtxJkb54Y",
  "Tera Mera Hai Pyar Amar": "HFHl_tXSyaE",
  "Qurbaniyan": "zWv0CYYV1nU",
  "Chal Diya Tum Kahan": "AMfuIWDUDHg",
  "Ishqaan Di Maari Piyaan": "V7N4MXdffAA",
  "Meri Zindagi Hai Tu 2.0": "BOlCZaYQOSc",
  "Iqtidar": "jG9wNXvGtSU",
  "Tere Bin": "fHMUgJTh5bw",
  "Mere Mehboob": "RioQ3gDHJkY",
  "Humsafar": "2OCjfBPfFgs",
  "Khaani": "m6xA3ncyLS4",
  "Mere Paas Tum Ho": "ZneBOdp5-Ig",
  "Mujhe Pyaar Hua Tha": "rEO6bLfwruo",
  "Qurban": "ORNJJx9nRsw",
  "Mann Jogi": "cg5dbKLovPA",
  "Raaz-e-Ulfat": "wYALJpK1Lgw",
  "Meri Zindagi Hai Tu": "izdeBydQFFA",
  "Jaan-e-Jahan": "a5zUwpL1GHQ",
  "Radd": "gEoyMUUEqQ0",
  "Main Haar Giyaan": "VRyriJXJkwM",
  "Khuda Aur Mohabbat S3": "I38skothD88",
  "Mann Mayal": "9EED-l5OyX0",
  "Alvida Alvida": "KaUESRM2nt4",
  "Guzaarishein": "ViCb3tczD0g",
};
function App() {
  const [entered, setEntered] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);
  const [introClosing, setIntroClosing] = useState(false);
const [selectedMood, setSelectedMood] = useState(null);
const [roomOpen, setRoomOpen] = useState(false);
const [ostMessage, setOstMessage] = useState(false);
const [searchQuery, setSearchQuery] = useState("");
const [searchOpen, setSearchOpen] = useState(false);
const [ostDetailOpen, setOstDetailOpen] = useState(false);
const [ostLibraryOpen, setOstLibraryOpen] = useState(false);
const [favouritesOpen, setFavouritesOpen] = useState(false);
const [returnToFavourites, setReturnToFavourites] = useState(false);
const [selectedOST, setSelectedOST] = useState(null);
const [homeTransition, setHomeTransition] = useState(false);
const [playerOpen, setPlayerOpen] = useState(false);
const [isPlaying, setIsPlaying] = useState(false);
const [volume, setVolume] = useState(100);
const [isSeeking, setIsSeeking] = useState(false);
const wasPlayingBeforeSeek = useRef(false);
const youtubePlayerRef = useRef(null);
const youtubePlayerInstance = useRef(null);
const shouldAutoPlayRef = useRef(false);
useEffect(() => {
  if (!playerOpen || !selectedOST) return;

  const videoId = youtubeVideos[selectedOST.title];

  if (!videoId) return;

  const createPlayer = () => {
    if (!youtubePlayerRef.current) return;

    if (youtubePlayerInstance.current) {
      youtubePlayerInstance.current.destroy();
      youtubePlayerInstance.current = null;
    }

    youtubePlayerInstance.current = new window.YT.Player(
      youtubePlayerRef.current,
      {
        videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          rel: 0,
          modestbranding: 1,
        },
        events: {
  onReady: (event) => {
  const duration = event.target.getDuration();

  setDuration(duration);
  setCurrentTime(0);
  setIsPlaying(false);

  if (shouldAutoPlayRef.current) {
    shouldAutoPlayRef.current = false;
    event.target.loadVideoById(videoId);
  } else {
    event.target.cueVideoById(videoId);
  }
},

          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            }

            if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            }

            if (event.data === window.YT.PlayerState.ENDED) {
              setIsPlaying(false);
              setCurrentTime(0);
            }
          },
        },
      }
    );
  };

  if (window.YT && window.YT.Player) {
    createPlayer();
  } else {
    window.onYouTubeIframeAPIReady = createPlayer;

    const existingScript = document.querySelector(
      'script[src="https://www.youtube.com/iframe_api"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;

      document.body.appendChild(script);
    }
  }

  return () => {
    if (youtubePlayerInstance.current) {
      youtubePlayerInstance.current.destroy();
      youtubePlayerInstance.current = null;
    }
  };
}, [playerOpen, selectedOST]);
useEffect(() => {
  if (!playerOpen) return;

  const interval = setInterval(() => {
    const player = youtubePlayerInstance.current;

    if (!player) return;

   const time = player.getCurrentTime();
const total = player.getDuration();
const state = player.getPlayerState();

if (!isSeeking && state !== window.YT.PlayerState.ENDED) {
  setCurrentTime(time);
}

setDuration(total);
  }, 100);

  return () => clearInterval(interval);
}, [playerOpen, isSeeking]);

const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);
const [favourites, setFavourites] = useState(() => {
  const savedFavourites = localStorage.getItem("ostFavourites");
  return savedFavourites ? JSON.parse(savedFavourites) : [];
});
useEffect(() => {
  localStorage.setItem("ostFavourites", JSON.stringify(favourites));
}, [favourites]);
console.log("Saved favourites:", localStorage.getItem("ostFavourites"));
const toggleFavourite = (ost) => {
  setFavourites((current) => {
    const alreadyFavourite = current.some(
      (item) => item.title === ost.title
    );
    

    if (alreadyFavourite) {
      return current.filter((item) => item.title !== ost.title);
    }

    return [...current, ost];
  });
};
const changeTrack = (direction) => {
  const currentList = moodCollections[selectedMood];

  if (!currentList || !selectedOST) return;

  const currentIndex = currentList.findIndex(
    (ost) => ost.title === selectedOST.title
  );

  if (currentIndex === -1) return;

  const nextIndex = currentIndex + direction;

  if (nextIndex < 0 || nextIndex >= currentList.length) return;

 const nextOST = currentList[nextIndex];

shouldAutoPlayRef.current = true;
setSelectedOST(nextOST);
setIsPlaying(false);
};
const featuredOST = featuredOSTs[selectedMood] || featuredOSTs["Heartbreak"];
const searchResults = allOSTs.filter((ost) => {
  const query = searchQuery.toLowerCase().trim();

  if (!query) return false;

  return (
    ost.title.toLowerCase().includes(query) ||
    ost.artist.toLowerCase().includes(query) ||
    ost.drama?.toLowerCase().includes(query) ||
    ost.mood.toLowerCase().includes(query)
  );
});
const [homeOpen, setHomeOpen] = useState(false);

useEffect(() => {
  if (homeOpen && !roomOpen) {
    window.scrollTo({ top: 0, behavior: "auto" });
  }
}, [homeOpen, roomOpen]);
  return (
   <main className="app">
{!introFinished ? (
  <section
    className={`cinematic-intro ${
      introClosing ? "intro-closing" : ""
    }`}
  >
    <div className="intro-particles" />

    <div className="intro-content">
      <p className="intro-eyebrow">
        A world of Pakistani OSTs
      </p>

      <h1>OST Listening Room</h1>

      <p className="intro-tagline">
        Where every OST has a feeling.
      </p>

      <button
        className="intro-enter-button"
        onClick={() => {
          setIntroClosing(true);

          setTimeout(() => {
            setIntroFinished(true);
          }, 900);
        }}
      >
        ENTER LISTENING ROOM
        <span aria-hidden="true"> ↗</span>
      </button>

     
    </div>
  </section>
) : !entered ? (
        <section
  className={`welcome-screen ${
    homeTransition ? "welcome-exit" : ""
  }`}
>
          <div className="golden-glow" />
          <div className="golden-particles" />

          <div className="welcome-content">
            <p className="eyebrow">A world of Pakistani OSTs</p>

            <img
  src={ostLogo}
  alt="OST Listening Room"
  className="home-logo"
/>

            <p className="welcome-line">
              Some songs don't just play.
              <br />
              They stay with you.
            </p>

            <button
              className="enter-button"
onClick={() => {
  setHomeTransition(true);

  setTimeout(() => {
    setEntered(true);
    setHomeOpen(true);
    setRoomOpen(false);
    setHomeTransition(false);
  }, 450);
}}         >
              Enter the Room
              <span aria-hidden="true"> ↗</span>
            </button>
          </div>

        
               </section>
     ) : playerOpen ? (
  <section className={`ost-player-screen mood-${selectedMood}`}>
    <div className="ost-player-content">
      <button
        className="back-button"
        onClick={() => setPlayerOpen(false)}
      >
        ← Back to OST
      </button>

      <p className="eyebrow">NOW PLAYING</p>

      <img
        src={selectedOST?.cover}
        alt={`${selectedOST?.title} cover`}
        className="ost-player-cover"
      />

      <h1>{selectedOST?.title}</h1>

      <p className="ost-player-artist">
        {selectedOST?.artist}
      </p>
      <div
  ref={youtubePlayerRef}
  className="youtube-player-hidden"
/>

    <button
  className="player-play-button"
  onClick={() => {
    const player = youtubePlayerInstance.current;

    if (!player) return;

    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  }}
>
  {isPlaying ? "❚❚" : "▶"}
</button>
<div className="player-track-buttons">
  <button
    className="player-track-button"
    onClick={() => changeTrack(-1)}
  >
    ⏮
  </button>

  <button
    className="player-track-button"
    onClick={() => changeTrack(1)}
  >
    ⏭
  </button>
</div>
<input
  className="player-volume"
  type="range"
  min="0"
  max="100"
  value={volume}
  onChange={(e) => {
    const newVolume = Number(e.target.value);

    setVolume(newVolume);
    youtubePlayerInstance.current?.setVolume(newVolume);
  }}
/>
<div className="player-progress">
  <div className="progress-track">
    <div
      className="progress-fill"
      style={{
        width: `${duration ? (currentTime / duration) * 100 : 0}%`,
      }}
    />
  </div>

<input
  type="range"
  min="0"
  max={duration || 0}
  step="0.01"
  value={currentTime}
  onPointerDown={() => {
    wasPlayingBeforeSeek.current = isPlaying;

    if (isPlaying) {
      youtubePlayerInstance.current?.pauseVideo();
      setIsPlaying(false);
    }

    setIsSeeking(true);
  }}
  onInput={(e) => {
    const newTime = Number(e.target.value);

    setCurrentTime(newTime);
  }}
  onPointerUp={(e) => {
    const newTime = Number(e.currentTarget.value);

    youtubePlayerInstance.current?.seekTo(newTime, true);
    setCurrentTime(newTime);

    setIsSeeking(false);

    if (wasPlayingBeforeSeek.current) {
      youtubePlayerInstance.current?.playVideo();
      setIsPlaying(true);
    }
  }}
/>

  <div className="player-time">
    <span>
      {Math.floor(currentTime / 60) === 0
        ? "00"
        : Math.floor(currentTime / 60)}
      :
      {String(Math.floor(currentTime % 60)).padStart(2, "0")}
    </span>
  </div>
</div>
    </div>
  </section>
  ) : favouritesOpen ? (
  <section className="favourites-screen">
    <button
      className="back-button"
      onClick={() => setFavouritesOpen(false)}
    >
      ← Back Home
    </button>

    <div className="favourites-screen-content">
      <p className="eyebrow">YOUR COLLECTION</p>

      <h1>Your Favourites</h1>

      <p className="favourites-screen-intro">
        The OSTs you've chosen to keep close.
      </p>

      <div className="favourites-screen-list">
        {favourites.length === 0 ? (
          <div className="favourites-empty">
            <p className="favourites-empty-title">
              Nothing here yet.
            </p>

            <p className="favourites-empty-text">
              Your favourite OSTs will appear here.
            </p>
          </div>
        ) : (
          favourites.map((ost, index) => (
            <div
              className="favourites-screen-item"
              key={`${ost.title}-${index}`}
              onClick={() => {
                setSelectedOST(ost);
                setSelectedMood(ost.mood);
                setFavouritesOpen(false);
                setReturnToFavourites(true);
                setOstDetailOpen(true);
              }}
            >
              <img
                src={ost.cover}
                alt={`${ost.title} cover`}
              />

              <div>
                <h3>{ost.title}</h3>
                <p>{ost.artist}</p>
                <span>{ost.mood}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  </section>
) : ostLibraryOpen ? (
  <section
    className={`ost-library-screen ${
      selectedMood === "Heartbreak"
        ? "heartbreak-room"
        : selectedMood === "Sukoon"
        ? "sukoon-room"
        : selectedMood === "Ishq"
        ? "ishq-room"
        : selectedMood === "Nostalgia"
        ? "nostalgia-room"
        : selectedMood === "Rainy-night vibes"
        ? "rainy-night-room"
        : selectedMood === "Happiness"
        ? "happiness-room"
        : selectedMood === "Longing"
        ? "longing-room"
        : selectedMood === "Hope"
        ? "hope-room"
        : ""
    }`}
  >
    <button
      className="back-button"
      onClick={() => setOstLibraryOpen(false)}
    >
      ← Back to {selectedMood}
    </button>

    <div className="ost-library-content">
      <p className="eyebrow">EXPLORE THIS OST</p>

      <h1>{selectedMood}</h1>

      <p className="ost-library-intro">
  Explore the OSTs that belong to this mood.
</p>

<p className="ost-library-swipe-hint">
  SWIPE TO EXPLORE <span>→</span>
</p>

<div className="ost-library-list">
        {moodCollections[selectedMood]?.map((ost, index) => (
          <div
            className="ost-library-item"
            key={`${ost.title}-${index}`}
            onClick={() => {
              setSelectedOST(ost);
              setOstLibraryOpen(false);
              setOstDetailOpen(true);
            }}
          >
            <img
              src={ost.cover}
              alt={`${ost.title} cover`}
            />

            <h3>{ost.title}</h3>
            <p>{ost.artist}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
) : ostDetailOpen ? (
        <section
  className={`ost-detail-screen ${
    selectedMood === "Heartbreak"
      ? "heartbreak-room"
      : selectedMood === "Sukoon"
      ? "sukoon-room"
      : selectedMood === "Ishq"
      ? "ishq-room"
      : selectedMood === "Nostalgia"
      ? "nostalgia-room"
      : selectedMood === "Rainy-night vibes"
      ? "rainy-night-room"
      : selectedMood === "Happiness"
      ? "happiness-room"
      : selectedMood === "Longing"
      ? "longing-room"
      : selectedMood === "Hope"
      ? "hope-room"
      : ""
  }`}
>
          <button
            className="back-button"
            onClick={() => {
  setOstDetailOpen(false);

  if (returnToFavourites) {
    setReturnToFavourites(false);
    setFavouritesOpen(true);
  }
}}
          >
            ← Back to {selectedMood}
          </button>

        <div className="ost-detail-content">
  <p className="eyebrow">EXPLORE THIS OST</p>

  <div className="ost-detail-hero">
    <div className="ost-detail-cover-wrap">
      <img
        src={selectedOST?.cover}
        alt={`${selectedOST?.title} cover`}
        className="ost-detail-cover"
      />
    </div>

   <div className="ost-detail-info">
  <h1>{selectedOST?.title}</h1>

  <p className="ost-detail-artist">
    {selectedOST?.artist}
  </p>

  <p className="ost-detail-drama">
    {selectedOST?.drama}
  </p>

  <p className="ost-detail-mood">
    {selectedMood}
  </p>

  <p className="ost-detail-description">
    {selectedOST?.description}
  </p>

  <div className="ost-detail-actions">
    <button
      className="detail-favourite-button"
      onClick={() => toggleFavourite(selectedOST)}
    >
      {favourites.some(
        (item) => item.title === selectedOST?.title
      )
        ? "♥ Remove from Favourites"
        : "♡ Add to Favourites"}
    </button>

    <button
      className="play-detail-button"
      onClick={() => {
        setPlayerOpen(true);
        setIsPlaying(false);
      }}
    >
      ▶ Play OST
    </button>
  </div>
</div>
  </div>
</div>
</section>
     ) : roomOpen ? (
 <section
  className={`room-screen ${
    selectedMood === "Heartbreak"
      ? "heartbreak-room"
      : selectedMood === "Sukoon"
      ? "sukoon-room"
      : selectedMood === "Ishq"
? "ishq-room"
: selectedMood === "Nostalgia"
? "nostalgia-room"
: selectedMood === "Rainy-night vibes"
? "rainy-night-room"
: selectedMood === "Happiness"
? "happiness-room"
: selectedMood === "Longing"
? "longing-room"
: selectedMood === "Hope"
? "hope-room"
: ""
  }`}
>
    <p className="eyebrow">Your room. Your mood.</p>

<h2>{selectedMood}</h2>    <p className="mood-description">
{moodDescriptions[selectedMood]}    </p>
    <div className="featured-ost">
     
{featuredOST.cover && (
  <img
      src={featuredOST.cover}
  alt={`${selectedOST?.title} cover`}
    className="featured-ost-cover"
  />
)}
  <p className="eyebrow">A featured OST for your mood</p>

<h3>{featuredOST.title}</h3>  <p className="featured-artist">
  {featuredOST.artist}
</p>

 <button
  className="play-ost-button"
  onClick={() => {
    setOstLibraryOpen(true);
  }}
>
  ▶ Explore this OST
</button>
</div>

<div className="mood-collection">
  <p className="eyebrow">KEEP THE FEELING GOING</p>

  <h3>More OSTs for {selectedMood}</h3>

  <p>
    A collection of songs picked for this mood.
  </p>

  <div className="ost-list">
    {moodCollections[selectedMood]?.map((ost, index) => (
    
<div className="ost-item" key={index}>
  <div className="ost-cover">
  <img
    src={ost.cover}
    alt={`${ost.title} cover`}
  />
</div>
  <p>{ost.title}</p>

  {ost.artist && <p>{ost.artist}</p>}
</div>
    ))}
  </div>
</div>
    <button
      className="back-button"
      onClick={() => setRoomOpen(false)}
    >
      ← Back to moods
    </button>
  </section>
) : (
 
<section className="home-page">
  <div className="home-hero">
    <p className="eyebrow">WELCOME TO YOUR LISTENING ROOM</p>

    <h1>
      Every feeling
      <br />
      has its own melody.
    </h1>

    <p className="home-intro">
      Some songs take you back. Some help you let go.
      Find the OST that feels like you.
    </p>

    <a href="#mood-selection" className="home-explore-button">
      Find your mood <span aria-hidden="true">↓</span>
    </a>

    <div className="home-featured-note">
      <span className="featured-note-line" />
      <p>NOT JUST A PLACE TO LISTEN. A PLACE TO FEEL.</p>
    </div>
  </div>
<div className="home-search">
  <button
    className="search-button"
    onClick={() => setSearchOpen(!searchOpen)}
  >
    🔎 Search OSTs
  </button>

  {searchOpen && (
    <div className="search-panel">
      <input
        type="text"
        placeholder="Search by OST, artist, drama, or mood..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {searchQuery.trim() && (
        <div className="search-results">
          {searchResults.length > 0 ? (
            searchResults.map((ost, index) => (
              <div
  className="search-result"
  key={`${ost.title}-${index}`}
  onClick={() => {
    setSelectedOST(ost);
    setSelectedMood(ost.mood);
    setSearchOpen(false);
    setSearchQuery("");
    setOstDetailOpen(true);
  }}
>
                <img
                  src={ost.cover}
                  alt={`${ost.title} cover`}
                />

                <div>
  <h3>{ost.title}</h3>
  <p>{ost.artist}</p>
  <span>Mood: {ost.mood}</span>
</div>
              </div>
            ))
          ) : (
           <div className="no-results">
  <p className="no-results-title">
    Nothing found.
  </p>

  <p className="no-results-text">
    We couldn’t find an OST matching your search.
  </p>
</div>
          )}
        </div>
      )}
    </div>
  )}
</div>
<section className="home-favourites">
  <h2>Your Favourites</h2>
  <button
  className="favourites-page-button"
  onClick={() => setFavouritesOpen(true)}
>
  View All Favourites →
</button>

  {favourites.length === 0 ? (
    <p className="empty-favourites">
      Your favourite OSTs will appear here.
    </p>
  ) : (
    <div className="favourites-list">
      {favourites.map((ost, index) => (
        <div className="favourite-item" key={`${ost.title}-${index}`}>
          <img
            src={ost.cover}
            alt={`${ost.title} cover`}
          />

          <div>
            <h3>{ost.title}</h3>
            <p>{ost.artist}</p>
            <span>{ost.mood}</span>
          </div>
        </div>
      ))}
    </div>
  )}
</section>
  <section className="home-moods" id="mood-selection">
    <p className="eyebrow">EXPLORE BY FEELING</p>

    <h2>What are you feeling today?</h2>

    <p className="mood-description">
      Choose a mood. Let the music take you somewhere.
    </p>

    <div className="mood-grid">
      {moods.map((mood, index) => (
        <button
          className="mood-card"
          key={mood}
          onClick={() => {
  setSelectedMood(mood);
  setRoomOpen(true);
  setOstMessage(false);
  window.scrollTo(0, 0);
}}
        >
          <span className="mood-number">
            0{index + 1}
          </span>

          <span>{mood}</span>

          <span aria-hidden="true">↗</span>
        </button>
      ))}
    </div>
  </section>

  <section className="home-bottom">
    <p className="eyebrow">A LITTLE SOMETHING MORE</p>

    <h2>Still in the mood for a story?</h2>

    <p>
      Step into Drama Hub and discover your next favourite Pakistani drama.
    </p>

    <a
      className="drama-hub-link"
      href="https://sites.google.com/view/thedramahub"
      target="_blank"
      rel="noreferrer"
    >
      Explore Drama Hub ↗
    </a>
  </section>
</section>
)}


     
    </main>
  );
}

export default App;