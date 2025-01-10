import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-setting',
  imports: [FormsModule,CommonModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent implements OnInit {
  projects: any[] = [];
  newProject = { title: '', description: '' };

  constructor(private projectService: ServiceService) {}

  ngOnInit() {
    this.fetchProjects();
  }

  fetchProjects() {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  addProject() {
    if (this.newProject.title && this.newProject.description) {
      this.projectService.addProject(this.newProject).subscribe(() => {
        this.fetchProjects(); 
        this.newProject = { title: '', description: '' }; 
      });
    }
  }

  updateProject(id: number, title: string, description: string) {
    this.projectService.updateProject(id, { title, description }).subscribe(() => {
      this.fetchProjects(); 
    });
  }

  deleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.fetchProjects();
    });
  }
}