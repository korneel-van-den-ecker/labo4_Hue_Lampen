export class Lamp {
  id: number;
  on: boolean;
  xy: number [];
  sterkte: number;
  kleurRGB: string;
}

export class GRBLamp extends Lamp {

}

/* export class RGBLamp extends Lamp {

  private _rgb: string;

  get rgb(): string {
    return this._rgb;
  }

  set rgb(value: string) {
    this._rgb = value;
    this.xy = this.rgbToXY(this.hexToRgb(value).r, this.hexToRgb(value).g, this.hexToRgb(value).b);
  }

  private rgbToXY(r: number, g: number, b: number): number[] {
    let red = r;
    let green = g;
    let blue = b;

    red = red / 255;
    green = green / 255;
    blue = blue / 255;

    const re = red > 0.04045 ? Math.pow(((red + 0.055) / 1.055), 2.4000000953674316) : red / 12.92;
    const gr = green > 0.04045 ? Math.pow(((green + 0.055) / 1.055), 2.4000000953674316) : green / 12.92;
    const bl = blue > 0.04045 ? Math.pow(((blue + 0.055) / 1.055), 2.4000000953674316) : blue / 12.92;

    const x = re * 0.664511 + gr * 0.154324 + bl * 0.162028;
    const y = re * 0.283881 + gr * 0.668433 + bl * 0.047685;
    const z = re * 8.8E-5   + gr * 0.07231  + bl * 0.986039;

    const xy = [x / (x + y + z), y / (x + y + z)];
    return xy;
  }

  private hexToRgb(hex: string) {
   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
   return result ? {
     r: parseInt(result[1], 16),
     g: parseInt(result[2], 16),
     b: parseInt(result[3], 16)
   } : null;
  }

}
 */
