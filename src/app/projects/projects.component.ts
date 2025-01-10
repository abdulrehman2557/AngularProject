import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private projectService: ServiceService) {}

  ngOnInit() {
    this.fetchProjects();
  }

  fetchProjects() {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }
}