# OrganicFruits

## Covering Functionality
    - Internationalization
    - Unit tests (ApppComponent, FeaturedPlaylistComponent, DataApiService)
    - Modularized the app as:
        -- AppModule
        -- AppRoutingModule
        -- SharedModule (this module contains the common grid component)
    - The base url is defined in the `environment` files

## Because of the restricted time, could not manage to do the following things which I would prefer if spend more time
    - I would modularized the app as:
        -- Core, Shared, Features
    - Would like to have `HttpInterceptor` to add the header contents there

## Additional added depencies
    - Bootstrap
    - ag-grid-angular
    - ag-grid-community

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

