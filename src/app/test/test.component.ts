import {Component, OnInit} from '@angular/core';
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public dialog: MatDialog,) {
  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
