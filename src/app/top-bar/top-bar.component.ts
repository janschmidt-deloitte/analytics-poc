import { Component, OnInit } from "@angular/core";
import { GoogleAnalyticsService } from '../google-analytics.service';
import { MatomoTracker } from 'ngx-matomo';

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent implements OnInit {

    constructor(private googleAnalyticsService: GoogleAnalyticsService, private matomoTracker: MatomoTracker) { }

    ngOnInit() {}

    cart() {
    console.log("User clicked on cart!");
    this.googleAnalyticsService.eventEmitter("add_to_cart", "shop", "cart", "click", 1);
    this.matomoTracker.trackEvent('Ecommerce', 'add_to_cart', 'click', 1);
  }

  }
