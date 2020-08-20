import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'themeColor',
})
export class ThemeColorPipe implements PipeTransform {
  transform(value: string): unknown {
    const themeColorValue = value.toLowerCase();
    switch (themeColorValue) {
      case 'blue': {
        return '#0069db';
      }
      case 'red': {
        return '#FF4500';
      }
      case 'green': {
        return '#228B22';
      }
      case 'darkorange': {
        return '#ff8c00';
      }
      case 'brown': {
        return '#8B4513';
      }
      case 'pink': {
        return '#FF1493';
      }
      case 'darkblue': {
        return '#191970';
      }
      case 'purple': {
        return '#9400D3';
      }
      case 'teal': {
        return '#009188';
      }
      case 'indigo': {
        return '#4B0082';
      }
      case 'maroon': {
        return '#800000';
      }
      case 'grey': {
        return '#808080';
      }
      default: {
        return '#0069db';
      }
    }
  }
}
