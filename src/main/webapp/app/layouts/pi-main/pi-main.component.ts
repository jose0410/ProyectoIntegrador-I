import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'jhi-pi-main',
  templateUrl: './pi-main.component.html',
  styles: []
})
export class PiMainComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
