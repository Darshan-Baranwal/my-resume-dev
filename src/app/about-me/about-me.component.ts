import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

myExperiences:any=['Library Management POC', 'Scandinavian Airline Website For Booking, Checkin and Manage trip', 'Master Data Management for Sun Pharma', 'School Website as a Freelancer']

  constructor() { }

  ngOnInit() {
  }

}
