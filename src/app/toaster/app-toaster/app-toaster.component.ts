import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../toaster.service';
import { TouchSequence } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/firefox';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-toasts',
  templateUrl: './app-toaster.component.html',
  styleUrls: ['./app-toaster.component.scss']
})
export class ToasterComponent implements OnInit {

  toasts:any=[];
  toastOptions:any={
    position:'top right',
    time:2000,
  };
  constructor(private toastService:ToasterService,protected sanitizer: DomSanitizer) {  }

  ngOnInit() {
    this.toastService._toast.subscribe((option)=>{
        let ind=this.toasts.length;
        option.time=option.time || this.toastOptions.time;
        option.originalIndex=ind;
        option.barWidth=0;
        option.opacity=1;
        option.message=this.sanitizer.bypassSecurityTrustHtml(option.message);
        this.toasts.push(option);
        setTimeout(()=>{option.barWidth=100},10);
        setTimeout(()=>{option.opacity=0;},option.time-500);
        setTimeout(()=>{
          this.findRemove(option);
        },option.time || this.toastOptions.time);
    });
  }

  findRemove(option){
    let removeInd=-1;
    this.toasts.forEach((toast,i) => {
      if(toast.originalIndex==option.originalIndex){
        removeInd=i;
      }
    });
    if(removeInd>=0){
      this.toasts[removeInd].events.close.emit();
      this.toasts.splice(removeInd,1);
    }
  }

  closeMe(option){
    this.findRemove(option);
  }

}
