export class AppModule { }
import {BrowserModule} from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";

@NgModule({
    imports:[
      BrowserModule,
      BrowserAnimationsModule],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}
