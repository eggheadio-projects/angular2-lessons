import {Component} from "@angular/core";
import { trigger, state, style} from "@angular/animations";
@Component({
    selector: 'app',
    animations:[
        trigger('signal', [
            state('go', style({
                'background-color':'green'
            }))
        ])
    ],
    styles:[`
.traffic-light{
    width: 100px;
    height: 100px;
    background-color: black;
}
`],
    template: `
<div
    [@signal]="'go'"
    class="traffic-light">
    
</div>
`
})
export class AppComponent {
}