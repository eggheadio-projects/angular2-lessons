import {Component} from "@angular/core";
import { trigger, state, style, transition, animate} from "@angular/animations";
@Component({
    selector: 'app',
    animations:[
        trigger('signal', [
            state('go', style({
                'background-color':'green',
                'height':'100px'
            })),
            state('stop', style({
                'background-color':'red',
                'height':'50px'
            })),
            transition('* => *', animate(500))
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
    [@signal]="signal"
    class="traffic-light">
    
</div>
<button (click)="onGoClick()">Go</button>
<button (click)="onStopClick()">Stop</button>
`
})
export class AppComponent {
    signal = 'stop';

    onGoClick(){
        this.signal = 'go';
    }

    onStopClick(){
        this.signal = 'stop';
    }
}