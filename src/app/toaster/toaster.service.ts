import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ToasterService {
  _toast:EventEmitter<any>=new EventEmitter<any>();
  private events:EventEmitter<any>[];
  constructor() {

  }

  success(options:any={}){
    let events={close:new EventEmitter<any>()};
      this._toast.emit(Object.assign(options,{mode:'success',events:events}));
      return events;
  }

  error(options:any={}){
    let events={close:new EventEmitter<any>()};
    this._toast.emit(Object.assign(options,{mode:'error',events:events}));
    return events;
  }
  info(options:any={}){
    let events={close:new EventEmitter<any>()};
    this._toast.emit(Object.assign(options,{mode:'info',events:events}));
    return events;
  }
  warn(options:any={}){
    let events={close:new EventEmitter<any>()};
    this._toast.emit(Object.assign(options,{mode:'warn',events:events}));
    return events;
  }
}
