import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/Category";
import {FormControl, Validators} from "@angular/forms";
import {Song} from "../../../model/Song";
import {SongService} from "../../../service/song.service";
import {ActivatedRoute} from "@angular/router";
import {SingerService} from "../../../service/singer.service";
import {Singer} from "../../../model/Singer";

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {
  form: any = {};
  listCategory: Category[] = [];
  singerList: Singer[] = [];
  song?: Song;
  status = 'Form Create Song!'
  validateCategory = new FormControl('', [
    Validators.required
  ])

  constructor(private categoryService: CategoryService,
              private songService: SongService,
              private singerService: SingerService,
              private actRouter: ActivatedRoute) {
  }

  createSong() {
    if (this.form.category == undefined) {
      this.status = 'Please select one Category'
      return
    }
    if (this.form.avatar == undefined) {
      this.status = 'Please upload avatar'
      return;
    }
    if (this.form.mp3Url == undefined) {
      this.status = 'Please upload mp3 file'
      return;
    }
    this.song = new Song(
      this.form.name,
      this.form.avatar,
      this.form.lyrics,
      this.form.mp3Url,
      this.form.category,
      this.form.singerList
    )
    console.log('this song --->', this.song)
    this.songService.createSongService(this.song).subscribe(data => {
      if (data.message == 'create_success') {
        this.status = 'Create Song success!'
      }
    })
  }

  ngOnInit(): void {
    this.categoryService.getListService().subscribe(data => {
      this.listCategory = data;
      console.log('listCategory --->', this.listCategory)
    })
    this.singerService.getListSingerService().subscribe(data =>{
      this.singerList = data;
    })
  }

  onUploadAvatar($event: string) {
    this.form.avatar = $event;
  }

  onUploadFile($event: string) {
    this.form.mp3Url = $event;
  }
}
