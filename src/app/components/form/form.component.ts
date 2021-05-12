import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  public peopleInfo: any = {
    username: '',
    sex: '1',
    cityList: ['北京', '上海', '深圳', '杭州', '潍坊', '青岛', '厦门'],
    city: '北京',
    hobby: [
      {
        title: '吃饭',
        checked: false
      }, {
        title: '睡觉',
        checked: false
      }, {
        title: '看剧',
        checked: false
      }, {
        title: '敲代码',
        checked: true
      }
    ],
    mark: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  doSubmit() {
    // jquery dom 操作(第一种方法)
    /*<input type="text" id="username"/>
    let usernameDom:any=document.getElementById('username');
    console.log(usernameDom.value);
    */
    // 第二种方法：双向数据绑定(好好理解，学会!)
    console.log(this.peopleInfo);
  }

}
