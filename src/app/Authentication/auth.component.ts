import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {environment} from "../environment";



@Component({
    selector: 'app-login',
    templateUrl: './login/login.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class AuthComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;


    constructor(private _router: Router,
                private _route: ActivatedRoute,
              ) {
    }

    ngOnInit() {
        this.model.remember = true;
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

        let currentToken = " "//get token;
        // console.log(currentToken);
        if(currentToken != '') { // if logged in
            this._router.navigate([this.returnUrl]);
        }
    }
}