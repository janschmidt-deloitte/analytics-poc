import { Component, OnInit } from "@angular/core";
import { GoogleAnalyticsService } from '../google-analytics.service';

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent implements OnInit {

    constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

    ngOnInit() {}

    cart() {
    console.log("User clicked on cart!");
    this.googleAnalyticsService.eventEmitter("add_to_cart", "shop", "cart", "click", 1);
  }

  }
