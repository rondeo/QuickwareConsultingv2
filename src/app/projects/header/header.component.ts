import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class ProjectsHeaderComponent implements OnInit {

  @Input() projectName: string;

  constructor() { }

  ngOnInit() {

  }

}
