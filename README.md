# Doldrum Machine: a drum kit of dumb sounds

A keyboard full of sounds to annoy your mates. I wanted to jump back into 100 Days of Code and this is more impulsive than planned. One result is that it is not as DRY as I'd like it to be. No big deal if I use just 5-8 keys. Big fat deal for the entire keyboard.

**Why are't you using React?**
Almost two years ago, I did Wes Bos's JavaScript30. The first project was a drum kit. This time around I'm making my own and referring back when I need help, for example the audio clips. I wanted to use vanilla JavaScript. I know this would be better with ReactJS. Trust me. I get it. I have the following in too many places:

```
<div class="keys">
  <kbd>!</kbd>
  <kbd>1</kbd>
  <span class="sound">(bang)</span>
</div>
```

If I were to do another one, I'd organize my keysCodes, key text, and sound files in an object.

But I do think that having so many of those works for the "Dumb machine". There are many sounds out there. I am sure I'll do another sound kit with ReactJS but not today, Toady McGroady.

Toolbox:

- HTML5
- CSS3
- Sass
- JavaScript
- Gulp
- My obnoxious voice
