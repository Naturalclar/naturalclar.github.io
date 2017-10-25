const BACKGROUND = 'linear-gradient(to bottom, #00ae76, #aaeecc 100%) no-repeat fixed';
const BACKGROUND_SECONDARY = 'rgba(30,210,255,.50)';
const BACKGROUND_SECONDARY_SHADOW = 'rgb(0,180,225)';
const TEXT_PRIMARY = 'mintcream';
const TEXT_SHADOW = 'dodgerblue';

function convertRGB(rgb,ratio) {
  rgb.forEach((val,index)=>{
    if (typeof val==='string'){
      rgb[index] = parseFloat(val,10);
    }
  });

  const amount = Math.round(ratio * 2.55);
  rgb[0] = Math.floor(rgb[0] + amount);
  if (rgb[0] > 255) rgb[0] = 255;
  if (rgb[0] < 0) rgb[0] = 0;
  
  rgb[1] = Math.floor(rgb[1] + amount);
  if (rgb[1] > 255) rgb[1] = 255;
  if (rgb[1] < 0) rgb[1] = 0;
  
  rgb[2] = Math.floor(rgb[2] + amount);
  if (rgb[2] > 255) rgb[2] = 255;
  if (rgb[2] < 0) rgb[2] = 0;
  
  return rgb;
}

class Color {
  static get BACKGROUND(){
    return BACKGROUND;
  }

  static get BACKGROUND_SECONDARY(){
    return BACKGROUND_SECONDARY;
  }

  static get BACKGROUND_SECONDARY_SHADOW(){
    return BACKGROUND_SECONDARY_SHADOW;
  }

  static get TEXT_PRIMARY(){
    return TEXT_PRIMARY;
  }

  static get TEXT_SHADOW(){
    return TEXT_SHADOW;
  }

  static darken(color, ratio) {
  
    if(/^#[0-9a-fA-F]{3}$/.test(color)){
      let hex = '';
      color = color.slice(1).split('').forEach(val => hex+=val * 2);
      
      const num = parseInt(hex,16);
      const rgb = convertRGB(
        [num >> 16,
         num >> 8 & 0x00FF,
         num & 0x0000FF],
         -ratio
      )
      return `#${(rgb[2] | (rgb[1] << 8) | (rgb[0] << 16)).toString(16).padStart(6,'0')}`;
    }

    if(/^#[0-9a-fA-F]{6}$/.test(color)){
      color = color.slice(1);
      const num = parseInt(color,16);
      const rgb = convertRGB(
        [num >> 16,
         num >> 8 & 0x00FF,
         num & 0x0000FF],
         -ratio
      )
      return `#${(rgb[2] | (rgb[1] << 8) | (rgb[0] << 16)).toString(16).padStart(6,'0')}`;
    }

    if(/^rgb\(\d+,\d+,\d+\)/.test(color)){
      color = color.slice(4,-1);
      const rgb = convertRGB(color.split(','),-ratio);
      return `rgb(${rgb.join(',')})`;
    }

    if(/^rgba\(\d+,\d+,\d+,\d+?.?\d+\)/.test(color)){
      color = color.slice(5,-1);
      const rgb = convertRGB(color.split(','),-ratio);
      return `rgba(${rgb.join(',')})`;
    }
  }

  static lighten(color, ratio) {
    if(/^#[0-9a-fA-F]{3}$/.test(color)){
      let hex = '';
      color = color.slice(1).split('').forEach(val => hex+=val * 2);
      
      const num = parseInt(hex,16);
      const rgb = convertRGB(
        [num >> 16,
         num >> 8 & 0x00FF,
         num & 0x0000FF],
         ratio
      )
      return `#${(rgb[2] | (rgb[1] << 8) | (rgb[0] << 16)).toString(16).padStart(6,'0')}`;
    }
    
    if(/^#[0-9a-fA-F]{6}$/.test(color)){
      color = color.slice(1);
      const num = parseInt(color,16);
      const rgb = convertRGB(
        [num >> 16,
         num >> 8 & 0x00FF,
         num & 0x0000FF],
         ratio
      )
      return `#${(rgb[2] | (rgb[1] << 8) | (rgb[0] << 16)).toString(16).padStart(6,'0')}`;
    }

    if(/^rgb\(\d+,\d+,\d+\)/.test(color)){
      color = color.slice(4,-1);
      const rgb = convertRGB(color.split(','),ratio);
      return `rgb(${rgb.join(',')})`;
    }

    if(/^rgba\(\d+,\d+,\d+,\d+?.?\d+\)/.test(color)){
      color = color.slice(5,-1);
      const rgb = convertRGB(color.split(','),ratio);
      return `rgba(${rgb.join(',')})`;
    }
  }


};

module.exports = Color;
