import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { SavedSearchService } from '../app.service';
import { SearchOrderService, SearchRequestPayload } from '../search-order.service';
import { HelperService } from './test-helper.service';
import { MessageService } from './test-message.service';

interface City {
    name: string,
    code: string
}

@Component({
  selector: 'app-test-header',
  templateUrl: './test-header.component.html',
  styleUrls: ['./test-header.component.scss']
})
export class TestHeaderComponent implements OnInit {

  defaultRows = 0;
  values = [{
    orginalKey: 'sd',
    originalValue: 'sd'
  }];
  currentSavedPayload = {};

  cities: City[];

  selectedCity: City;
  
  constructor(
    private searchOrderService: SearchOrderService, 
    private _savedSearchService: SavedSearchService, 
    private _helperService: HelperService,
    private messageService: MessageService  ) {

      this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
    
    
  onChangeSavedSearch(event) {
    if (!event.value.value) {
      this.searchOrderService.filterSearchToggleNext(false);
      this.searchOrderService.tableProps.chipsData = event.value;
      this.searchOrderService.setOrderSearchData({ totalResultCount: 0, data: []});
      return;
    }
    this.searchOrderService.savedSearchDataItem = event.value;
    // const payload = JSON.parse(atob(event.value.value));
    this.searchOrderService.getSearchOrderData(event.value.value.personId, 0, this.defaultRows).subscribe();
    // .pipe(takeUntil(this.unsubscribe))
    this.chipsData(event.value.value.personId);
  }

  

  // onRemove(data) {
  //   const payload = {
  //     searchCriteria: {
  //       orginalKey: 'dd'
  //     }
  //   };
  //   this.searchOrderService.tableProps.chipsData = this.values;
  //   this.values.forEach(item => {
  //     payload.searchCriteria[item.orginalKey] = item.originalValue;
  //   });
  //   if (this.values.length === 0) {
  //     this.searchOrderService.filterSearchToggleNext(false);
  //     this.searchOrderService.setOrderSearchData({ totalResultCount: 0, data: []});
  //     return;
  //   }
  //   this.currentSavedPayload = payload;
  //   this.searchResults(payload);
  // }

  // searchResults(a: SearchRequestPayload) {

  // }
  chipsData(o:string) {

  }

  // renamedSavedFilterSearch(name) {
  //   const isSame = this._savedSearchService.savedSearchData
  //   .getValue()
  //   .find(item => item.label === name);
  //   if (isSame) {
  //     this.messageService.add({
  //       severity: 'warn',
  //       summary: 'Filter name already exists',
  //       detail: 'The filter was not saved.'
  //     });
  //     return;
  //   }
  //   this._savedSearchService.saveSearchPayload(
  //     this.currentSavedPayload,
  //     name,
  //     this._helperService.getUserDetails().userId
  //   )
  //   .subscribe(
  //     res => {
  //       this._savedSearchService.getSearchPayload(this._helperService.getUserDetails().userId);
  //       this.messageService.add({
  //         key: 'setSavedSearchToast',
  //         severity: 'success',
  //         detail: `${name} saved to Saved Search`
  //       });
  //     },
  //     err => {
  //       this.messageService.add({
  //         severity: 'error',
  //         summary: err.name,
  //         detail: `The filter was unable to be saved.`
  //       });
  //     }
  //   );
  // }


  ngOnInit() {
  }

}
