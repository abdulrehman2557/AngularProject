import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from 'express';


@Component({
  selector: 'app-articles',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {



}

