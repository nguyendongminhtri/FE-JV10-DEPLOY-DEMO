import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateSongComponent} from "../create-song/create-song.component";
import {PageEvent} from "@angular/material/paginator";
import {SongService} from "../../../service/song.service";
import {Song} from "../../../model/Song";

@Component({
  selector: 'app-page-song',
  templateUrl: './page-song.component.html',
  styleUrls: ['./page-song.component.css']
})
export class PageSongComponent implements OnInit{
  listSong?: Song[];
  totalElements = 0;
  constructor(private dialog: MatDialog,
              private songService: SongService) {
  }
  openDialogCreate() {
    const dialogRef = this.dialog.open(CreateSongComponent);

    dialogRef.afterClosed().subscribe(result => {

      if(result||result==undefined){

      }
    });
  }
  getPageRequest(request: any) {
    this.songService.getPageSong(request).subscribe(data =>{
      console.log('data -->', data)
      this.listSong = data['content'];
      console.log('content --->', this.listSong)
      this.totalElements = data['totalElements'];
      console.log('total --->', this.totalElements)
    })
  }

  ngOnInit(): void {
    const request = {page:0, size: 3}
    this.getPageRequest(request);
  }

  nextPage($event: PageEvent) {
    const request = {};
    // @ts-ignore
    request['page'] = $event.pageIndex.toString();
    // @ts-ignore
    request['size'] = $event.pageSize.toString();
    this.getPageRequest(request);
  }
}
