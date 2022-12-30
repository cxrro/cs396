const SWATCH_SIZE = 350;

let animations = [
  {
    title: "touch and go",
    description: "just two lil blobby guys",
    isActive: true,

    setup(p) {
      this.loopTime = 5;
    },
    draw(p, t) {
      let pct = (t % this.loopTime) / this.loopTime;

      p.background(0, 0, 10);

      p.stroke(20, 100, 60);

      p.push();
      p.translate(p.width / 2, p.height);

      let count = 240;
      let theta = (Math.PI * -1) / count;
      for (var i = 0; i < count; i++) {
        p.rotate(theta);
        let lineLength = 245 * p.noise(i / 400, t);
        p.line(0, 0, lineLength, 0);
      }

      p.stroke(200, 100, 60);

      p.push();
      p.translate(0, p.height);

      let theta2 = (Math.PI * -1) / count;
      for (var i = 0; i < count; i++) {
        p.rotate(theta);
        let lineLength = 245 * p.noise(i / 400, t);
        p.line(0, 0, lineLength, 0);
      }

      p.stroke(10, 100, 20);

      p.push();
      p.translate(1, p.height);

      let theta3 = (Math.PI * -1) / count;
      for (var i = 0; i < count; i++) {
        p.rotate(theta);
        let lineLength = 250 * p.noise(i / 400, t);
        p.line(0, 0, lineLength, 0);
      }

      p.stroke(210, 100, 20);

      p.push();
      p.translate(0, p.height);

      let theta4 = Math.PI / count;
      for (var i = 0; i < count; i++) {
        p.rotate(theta);
        let lineLength = 250 * p.noise(i / 400, t);
        p.line(0, 0, lineLength, 0);
      }

      p.pop();
    },
  },

  {
    title: "rolling waves",
    description: "zen. yen. ten. pen. men. hen. den.",
    isActive: true,

    setup(p) {
      this.loopTime = 4;
    },
    draw(p, t) {
      p.background(0, 0, 100, 0.01);

      let cyclePct = (t / this.loopTime) % 1;

      // Move to the center
      p.push();
      p.translate(p.width / 8, p.height - 420);

      p.row = 0;
      for (let y = -5; y <= p.height + 180; y += 48) {
        if (p.row % 2 == 1) {
          p.cirx = 0;
        } else {
          p.cirx = 84;
        }

        for (let x = p.cirx; x <= p.width; x += 170) {
          for (let icircle = 9; icircle > 0; icircle--) {
            if (icircle % 2 == 0) {
              p.i = cyclePct * 360;

              p.hue = p.row * 20 + p.i * 1.1;

              p.hue %= 360;

              p.fill(p.hue, 80, 80);
            } else if (icircle % 2 == 1) {
              p.fill("white");
            }
            p.d = icircle * 20;

            //draw circle 1
            p.strokeWeight(0);
            p.circle(x, y + p.i / 1.87 / 2, p.d);
          }
        }
        p.row++;
      }

      p.pop();
    },
  },

  {
    title: "THE RENEWAL PROJECT",
    description: "stream tiffany day",
    isActive: true,

    setup(p) {
      this.loopTime = 4;
    },
    draw(p, t) {
      p.background(70);
      p.fill(0);
      let count = 50;
      let tileSize = p.width / count;
      let noiseScale = 0.01;

      for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
          let x = tileSize * i;
          let y = tileSize * j;

          let hue = 90 * p.noise(x * noiseScale, y * noiseScale, t + 100);

          hue %= 90;
          p.fill(hue % 360, 100, 50, 1);
          p.noStroke();
          p.rect(x, y, tileSize);
        }
      }
    },
  },

  {
    title: "loading character...",
    description: "new year, same me",
    isActive: true,

    setup(p) {
      this.loopTime = 10;
    },
    draw(p, t) {
      let pct = (t % this.loopTime) / this.loopTime;

      p.background(0, 20, 10);

      p.strokeWeight(30);

      p.translate(p.width * -0.15, p.height / 2);
      p.stroke(0, 0, 100);
      p.line(100, 0, 350, 0);

      let hue = 100 * p.noise(t / 10, t);
      hue %= 360;
      p.stroke(hue, 100, 60);

      p.push();

      let lineLength = 400 * p.noise(t / 10, t);
      p.line(100, 0, lineLength, 0);

      p.pop();
    },
  },

  {
    title: "bonus: explore me",
    description: "actually proud of how i did the 'water'",
    isActive: true,

    setup(p) {
      this.loopTime = 4;
    },
    draw(p, t) {
      p.background(0);
      p.fill(0);
      p.frameRate(16);
      let count = 32;
      let tileSize = p.width / count;
      let noiseScale = 0.005;

      for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
          let x = tileSize * i;
          let y = tileSize * j;

          let lum =
            2 *
            p.noise((p.mouseX + x) * noiseScale, (p.mouseY + y) * noiseScale);

          lum %= 1;
          lum = (lum + 0.1) * 90;

          if (lum > 70) {
            lum = 70;
          }

          if (lum < 10) {
            lum = 10;
          }

          p.fill(lum * 2 + 65, 90, lum - 5, 100);
          p.noStroke();
          p.rect(x, y, tileSize);
        }
      }
    },
  },
];
