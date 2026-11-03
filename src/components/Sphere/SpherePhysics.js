export class SpherePhysics {
  constructor() {
    this.y = 0;
    this.velocity = 0;
    this.gravity = -5.8;
    this.restitution = 0.62;
    this.floor = -0.72;
    this.sleepThreshold = 0.12;
    this.sleeping = false;
  }

  step(delta) {
    const dt = Math.min(delta, 0.033);
    if (this.sleeping) return this.y;
    this.velocity += this.gravity * dt;
    this.y += this.velocity * dt;
    if (this.y <= this.floor) {
      this.y = this.floor;
      this.velocity = Math.abs(this.velocity) * this.restitution;
      if (this.velocity < this.sleepThreshold) {
        this.velocity = 0;
        this.sleeping = true;
      }
    }
    return this.y;
  }

  nudge(power = 1.4) {
    this.sleeping = false;
    this.velocity = Math.max(this.velocity, power);
  }
}
