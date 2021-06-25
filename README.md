
[![tf logo](https://github.com/chrisweeting/takeFlight/blob/main/src/assets/Take%20Flight-01.png?raw=true)](https://chrisweeting.github.io/takeFlight/)
[-Play Take Flight](https://chrisweeting.github.io/takeFlight/)


**Background**
-
Take Flight is a game about a bird's journey through the desert.


![tf ss](https://github.com/chrisweeting/takeFlight/blob/main/src/assets/tf1_img.png?raw=true)

**Technologies**
---

 - JavaScript

 - Canvas API
 - HTML5 

**Functionality**
---

 - The goal of the game is to avoid cacti that are randomly generated.
 - Players use the left and right arrow keys to steer the bird out of harm's way.
 - If the bird collides with a cactus, the game ends. The player can then view their score are presented with the option to press any key to begin again.
 
 

![tf wireframe](https://github.com/chrisweeting/takeFlight/blob/main/src/assets/Take%20Flight.jpg?raw=true)


**Gameplay Feature**
---
<img src="src/assets/tf_fly.gif" width="100%" >

Take Flight utilizes the rotate function of the Canvas API to add to the perception of flying through 3d space. Every element on the canvas rotates in the opposite direction of the user input apart from the bird to give the player the feeling of making a sharp turn.

```js
const rotateCam = (num) => {
  if (num < 100 && num > 0) {
    return ctx.rotate((Math.PI / 180) * 0.05);
  } else if (num > -100 && num < 0) {
    return ctx.rotate((Math.PI / 180) * -0.05);
  }
};

const drawBird = () => {
  ctx.save();
  
  ctx.translate(0, 150);
  ctx.rotate((Math.PI / 180) * -((rotation * 0.5 ) / 4));

  ctx.drawImage(birdImg, -125, -50, 250, 100);
  
  
  ctx.restore();
};
```

