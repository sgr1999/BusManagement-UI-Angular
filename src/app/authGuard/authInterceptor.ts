import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from '../services/login/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private injector:Injector){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let loginService = this.injector.get(LoginService)
        let newReq=req;
        let token = loginService.getToken();

        // let token ='eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWNoaW5AZ21haWwuY29tIiwiZXhwIjoxNjU4NDQ0NDM1LCJpYXQiOjE2NTg0MDg0MzV9.yRZQO951hPgpsRSxKK2Vi-2Jhkz9_sYUA4TfWhx3TSM'

        // console.log("interceptor ",token);

        if (token!=null) {
            newReq.clone({setHeaders:{Authorization:token}})
        }

        // console.log("newReq - ",newReq);

        return next.handle(newReq);
    }

    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //    let loginService = this.injector.get(LoginService)
    //     let tokenReq = req.clone(
    //         {
    //             setHeaders:{
    //                 Authorization:`${loginService.getToken()}`
    //             }
    //         }
    //     )
    //     return next.handle(tokenReq);
    // }

}

