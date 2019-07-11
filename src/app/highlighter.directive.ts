import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private elem: ElementRef) { }

  @HostListener("mouseout")
  WhenMouseOverElement(){
    this.elem.nativeElement.className='alert alert-success';
  }
  
  @HostListener("mouseover")
  WhenMouseOutElement(){
    this.elem.nativeElement.className='form-control input-sm chat-input';
  }
}

