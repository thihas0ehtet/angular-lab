import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  _uiForm = [{label:"ID",type:"text",value:"0"},
              {label:"Name",type:"text",value:"0"},
              {label:"Department",type:"text",value:"0"}];
  _msg="";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  goSave(){
    this._msg="You Click Save Button!";
    // ===== Try to call api ======
    /*let l_Url: string = '<enter your api>';
        let l_Json: any = this._uiForm;
         this.http.post(l_Url, l_Json).subscribe(
            (data:any) => { 
              if (data != null)
              {
                  if (data.status) {
                      this._msg = "success";
                  } else {
                    this._msg = "fail";
                  }
              }
                
            },
            error => {
               
            }, 
            () => {}
         ); */
  }


}
