// Sons do jogo
let audio = {
  bgm: new Audio('audio/background.mp3'),
  collect: new Audio('audio/sfx/collect.wav'),
  event: new Audio('audio/sfx/event.wav'),
  mutation: new Audio('audio/sfx/mutation.wav')
};

audio.bgm.loop = true;
audio.bgm.volume = 0.3;
audio.bgm.play();
