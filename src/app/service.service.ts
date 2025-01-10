import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) {}

 

  // Get all projects
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new project
  addProject(project: { title: string; description: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, project);
  }

  // Update a project
  updateProject(id: number, updatedProject: { title: string; description: string }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, updatedProject);
  }

  // Delete a project
  deleteProject(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  
}
