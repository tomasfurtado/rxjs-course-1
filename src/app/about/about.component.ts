import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Observable, fromEvent, interval, noop } from "rxjs";
import { Course } from "../model/course";
import { createHttpObservable } from "../common/util";
import { map } from "rxjs/operators";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  ngOnInit() {}
}
