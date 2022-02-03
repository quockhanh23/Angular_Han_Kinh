import {Component, OnInit} from '@angular/core';
import {DialogComponent} from "../dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private toarts: ToastrService) {
  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  openToarts() {
    this.toarts.success('alo123', '12345')
  }
}
