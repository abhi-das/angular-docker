import { Injectable } from "@angular/core";

@Injectable({
providedIn: 'root'
})
export class HelperService {

constructor() { }

getUserDetails() {
    return { userId: 'kk' }
}
}