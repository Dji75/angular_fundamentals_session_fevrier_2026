import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ngs-random-color],[random],random',
})
export class RandomColor {
  @HostBinding("style.backgroundColor") color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
