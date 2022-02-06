import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { take, tap } from 'rxjs/operators';

export interface SavedSelectItem {
    label: string;
    value: string | null;
}

export interface SearchResponsePayload {
    status: string
}

export interface SavedSearchData {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
export const apiUrl = 'https://jsonplaceholder.typicode.com/comments';

@Injectable({
    providedIn: 'root'
})
export class SavedSearchService {

    savedSearchData = new BehaviorSubject<SavedSelectItem[]>([]);
    // selectedSearchName: string;

    REST_URLS = {
        orderManagement: {
            orderDetails: apiUrl
        }
    }
    
    constructor(private readonly http: HttpClient) {}

    saveSearchPayload(orderPayload: {}, name: string, personID: string) {
        const url = this.REST_URLS.orderManagement.orderDetails;
        const encrypt = btoa(JSON.stringify(orderPayload));
        const finalPayload = {
            personID,
            userSearchName: name,
            userSearchDefaultIndicator: 'Y',
            applicationSearchFunctionCode: 'searchFunc',
            errorCallback: true,
            userSearchCriteriaContent: encrypt
        };
        return this.http.post<SearchResponsePayload> (
        // `${url}/order-detail/userSavedSearches`,
        `${url}`,
        finalPayload,
        {
            responseType: 'json'
        })
    };
    
    getSearchPayload(userId: string) {
        const url = this.REST_URLS.orderManagement.orderDetails;
        // this.http.get<SavedSearchData[]>(`${url}/order-details/userSavedSearches?personId=${userId}`)
        this.http.get<SavedSearchData[]>(`${url}?personId=${userId}`)
        .subscribe(res => {
            // const dropDownValues = res.map(item => (
            //     return { label: item.userSearchName, value: item.userSearchCriteriaContent };
            // ));
            const dropDownValues = res.map(item => {
                return { label: item.name, value: item.email };
            });
            const newres = [{ label: 'Saved Search', value: null }, ...dropDownValues];
            this.setSavedOrderSearchData(newres);
        });
    }
        
    setSavedOrderSearchData(res: SavedSelectItem[]) {
        // console.log(res,"============called")
        this.savedSearchData.next(res);
        // console.log('called=====',this.savedSearchData.value)
    }

    getSavedOrderSearchData$(): Observable<SavedSelectItem[]> {
        return this.savedSearchData.asObservable();
    }
}
    
    
    
    