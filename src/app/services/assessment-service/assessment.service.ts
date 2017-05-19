import { Injectable } from '@angular/core';

@Injectable()
export class AssessmentService {

  _data: any;
  _dataArray: Array<any> = [];

  constructor() { }

  getData(data){
    this._data = data;
  };
  setData(){
    this._dataArray.push(this._data)
    return this._dataArray;
  };
}
