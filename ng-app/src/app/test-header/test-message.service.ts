import { Injectable } from "@angular/core";

export interface bb {
    severity: string;
    detail: string;
    key?: string;
    summary?: string;
}

@Injectable({
providedIn: 'root'
})
export class MessageService {

constructor() { }
add(pp:bb) {

}

}