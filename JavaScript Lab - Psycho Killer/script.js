const lyrics = 
    [
        { time: 0, text: "Introduction - David Byrne" },
        { time: 34, text: "I can't seem to face up to the facts" },
        { time: 37, text: "I'm tense and nervous and I can't relax" },
        { time: 42, text: "I can't sleep because my bed's on fire" },
        { time: 46, text: "Don't touch me I'm a real live wire" },
        { time: 50, text: "Psycho Killer, qu'est-ce que c'est?" },
        { time: 55, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
        { time: 60, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    
        { time: 70, text: "Ay-ya-ya-ya-ya-ya, ooh" }, 
        { time: 80, text: "You start a conversation, you can't even finish it" }, 
        { time: 84, text: "You're talking a lot, but you're not saying anything" }, 
        { time: 88, text: "When I have nothing to say, my lips are sealed" }, 
        { time: 93, text: "Say something once, why say it again?" }, 
        { time: 97, text: "Psycho Killer, qu'est-ce que c'est?" }, 
        { time: 101, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." }, 
        { time: 105, text: "Run, run, run, run, run, run, run away, oh-oh-oh" }, 
        { time: 114, text: "Psycho Killer, qu'est-ce que c'est?" }, 
        { time: 118, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." }, 
        { time: 123, text: "Run, run, run, run, run, run, run away, oh, oh, oh, oh" }, 
        { time: 132, text: "Ay-ya-ya-ya-ya-ya" }, 
        { time: 135, text: "Ce que j'ai fait, ce soir-là" }, 
        { time: 143, text: "Ce qu'elle a dit, ce soir-là" }, 
        { time: 152, text: "Réalisant mon espoir" }, 
        { time: 156, text: "Je me lance vers la gloire, okay" },
        { time: 164, text: "Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah" }, 
        { time: 167, text: "We are vain and we are blind" }, 
        { time: 173, text: "I hate people when they're not polite" }, 
        { time: 177, text: "Psycho Killer, qu'est-ce que c'est?" }, 
        { time: 181, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." }, 
        { time: 186, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
        { time: 195, text: "Ay-ya-ya-ya-ya-ya" }
    ];
let currentLyricIndex = 0;
const audio = document.getElementById("audio");
const lyricElement = document.getElementById("lyric");
audio.addEventListener("play", () => {
    setInterval(displayLyrics, 100); // Update lyrics every 100ms for better
    accuracy
});
function displayLyrics() {
    const currentTime = audio.currentTime;
    // Find the current lyric based on time
    if (
        currentLyricIndex < lyrics.length &&
        currentTime >= lyrics[currentLyricIndex].time
    ) {
        lyricElement.textContent = lyrics[currentLyricIndex].text;
        currentLyricIndex++;
    }
}