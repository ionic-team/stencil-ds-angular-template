import { NgModule } from "@angular/core";
import { defineCustomElements } from "component-library/loader";

import { DemoComponent } from "./directives/proxies";

const DECLARATIONS = [
  // proxies
  DemoComponent
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: []
})
export class ComponentLibraryModule {
  constructor() {
    defineCustomElements(window);
  }
}
