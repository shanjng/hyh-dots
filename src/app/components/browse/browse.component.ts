import { Component, OnInit } from '@angular/core';
import {NavService} from '../../services/nav.service';
import { NavBar } from '../../nav-bar'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  public navBar = new NavBar()

  constructor(private navService: NavService) {
  }

  ngOnInit() {
  }
}
