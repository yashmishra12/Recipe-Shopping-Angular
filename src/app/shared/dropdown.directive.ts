/* tslint:disable:no-trailing-whitespace */
import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive ({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false; //here false is the default value

  // toggleOpen function name could have been anything but 'click' event is defined.
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
