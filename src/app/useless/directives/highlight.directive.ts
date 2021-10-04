import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appHighlight]' 
})

export class highlightDirective {

    constructor( private elem: ElementRef) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('red')
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('')
    }

    private highlight(color: string) {
        this.elem.nativeElement.style.backgroundColor = color;
        console.log(this.elem.nativeElement)
    }

}