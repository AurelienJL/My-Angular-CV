import { Component, OnInit } from '@angular/core';

import { CvElement } from './../cv-content/cv-element';
import { CvContentService } from './../cv-content/cv-content.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  title: string = 'Projets';
  projectsData: CvElement[];

  constructor(private cvContentService: CvContentService) { }

  ngOnInit() {
     this.cvContentService.getProjectData().then(
      data => this.projectsData = data
    );
  }

}
