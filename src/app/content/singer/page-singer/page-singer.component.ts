import { Component } from '@angular/core';
import {CreateSongComponent} from "../../song/create-song/create-song.component";
import {MatDialog} from "@angular/material/dialog";
import {CreateSingerComponent} from "../create-singer/create-singer.component";

@Component({
  selector: 'app-page-singer',
  templateUrl: './page-singer.component.html',
  styleUrls: ['./page-singer.component.css']
})
export class PageSingerComponent {
  constructor(private dialog: MatDialog) {
  }
  openDialogCreate() {
    const dialogRef = this.dialog.open(CreateSingerComponent);

    dialogRef.afterClosed().subscribe(result => {

      if(result||result==undefined){

      }
    });
  }
}
