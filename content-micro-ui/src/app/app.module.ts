import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {

    /**
     * Creates an instance of HRBMicroOrderSummaryComponent
     * @param injector Dependency injector
     */
    constructor(private injector: Injector) { }

    /** Hook for manual bootstrapping of the application */
    public ngDoBootstrap() {

        /** Convert Angular component into a custom element */
        const appElement = createCustomElement(AppComponent, { injector: this.injector });

        /** Define custom element tag */
        const customElementTag = 'content-micro-ui';

        /** Verify if custom element is already present in the customElementRegistry */
        if (!customElements.get(customElementTag)) {
            /** Define a new custom element */
            customElements.define(customElementTag, appElement);
        }
    }

 }