/**
 * Created by aubhadia on 12/3/2015.
 */

import {bootstrap, Component,CORE_DIRECTIVES,ViewEncapsulation} from 'angular2/angular2';

@Component({
    selector: 'polymerNg',
    template: '<hello-polymer></hello-polymer>',
    encapsulation: ViewEncapsulation.Native,
    directives: [CORE_DIRECTIVES]
})
class polymerNg {
}

bootstrap(polymerNg);