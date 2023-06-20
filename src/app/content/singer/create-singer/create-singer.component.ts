import { Component } from '@angular/core';
import {Singer} from "../../../model/Singer";
import {SingerService} from "../../../service/singer.service";

@Component({
  selector: 'app-create-singer',
  templateUrl: './create-singer.component.html',
  styleUrls: ['./create-singer.component.css']
})
export class CreateSingerComponent {
  status = 'Form Create Singer';
  form: any = {};
  singer?: Singer;
  constructor(private singerService: SingerService) {
  }
  createSinger() {
    if(this.form.avatar == undefined){
      this.status = 'Please upload avatar!'
      return
    }
    if(this.form.birthDay == undefined){
      this.status = 'Please select birthDay!'
      return
    }
    this.singer= new Singer(
      this.form.name,
      this.form.avatar,
      this.form.description,
      this.form.birthDay
    )
    console.log('this.Singer --->', this.singer)
    this.singerService.createSingerService(this.singer).subscribe(data=>{
      if(data.message == 'create_success'){
        this.status = 'Create Singer success!'
      }
    })
  }

  onUploadAvatar($event: string) {
    this.form.avatar = $event;
  }
}
