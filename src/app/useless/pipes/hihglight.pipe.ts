import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'highlightPipe'
})

export class HighlightPipe implements PipeTransform {
    transform(val: string, arg: string) {
        // debugger
        if (val && arg) {
            if (val.toUpperCase().indexOf(arg.toUpperCase()) != -1) {
                var pattern = arg.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                var regex = new RegExp(pattern, 'gi');

                let start = val.toUpperCase().indexOf(arg.toUpperCase());
                let filteredText = val.substr(start, arg.length );
                console.log(filteredText)
                return val.replace(regex, (filteredText) => `<span class='yellow'>${filteredText}</span>`);
            }
        }
        return val;
    }
}