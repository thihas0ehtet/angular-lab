import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  _menus = [
    {id:"",caption:"User",submenus:[{id:"usr/register",caption:"User"}]},
    {id:"",caption:"Department",submenus:[{id:"dep/depA",caption:"Department A"},{id:"dep/depB",caption:"Department B"}]},
    {id:"",caption:"Contact",submenus:[{id:"cotus/contactUs",caption:"Contact Us"},{id:"cotus/aboutUs",caption:"About Us"}]},
  ];

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goto(url:any) {//url, param, appItemId
      this._router.navigate([url]);
  }

}
