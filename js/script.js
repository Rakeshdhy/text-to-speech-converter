// step 1
let speech = new SpeechSynthesisUtterance();

// step 3
let voices = [];
let voiceSelect = document.querySelector("select");

//step 4
window.speechSynthesis.onvoiceschanged = () => {
  // get voices provide the all voices
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  // step 5
  // display each voices on the dropdown menu

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

// step 6
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

// add multiple voices option drop down

// step 2
document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
