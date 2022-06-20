import { Component, OnInit } from '@angular/core';
import { faCoffee , faCaretDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faCoffee = faCoffee;
  faCaretDown= faCaretDown;
  
  constructor() { }

  ngOnInit(): void {
  }

  array:any=[
    
      {
        id:0,
        name:"India",
        src: "https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg",
        alt:"IND",
        pin:"+91"
      },
  
      {
        id:1,
        name:"United States",
        src:"https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg",
        alt:"USA",
        pin:"+1"
      },
  
      {
          id:2,
          name:"United Kingdom",
          src:"https://cdn.britannica.com/29/22529-004-ED1907BE/Union-Flag-Cross-St-Andrew-of-George.jpg",
          alt:"UK",
          pin:"+44"
      },
      {
        id:3,
        name:"Other",
        src:"https://i.pinimg.com/originals/07/ee/c8/07eec8d831f38eff42bf0a1da7b7aaee.jpg",
        alt:"UK",
        pin:"   "
    },
  ]


  temp:string="";
 

  onInput(content: string) {
    console.log("New content: ", content);
    this.temp=content+"";
  
  }

  


  contentdropdown:boolean= false;
  countryPin:string= "+91";

  dropdownOpen(){
    this.contentdropdown= !this.contentdropdown;
  }
  srcvaribale:string = "https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg";
  altvariable:string= "IND"

  
  changeFlag(each:any){
    this.srcvaribale=each.src;
    this.altvariable=each.alt;
    this.contentdropdown=false;
    this.countryPin=each.pin;

  }

  

}
