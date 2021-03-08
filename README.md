# OrganicFruits

## Covered functionality and architecture
    - Internationalization
    - Unit tests (ApppComponent, FeaturedPlaylistComponent, DataApiService)
    - Modularized the app as:
        -- AppModule
        -- AppRoutingModule
        -- SharedModule (this module contains the common grid component)
        -- features
            -- DashboardModule
            -- PlaylistsModule
    - The base url is defined in the `environment` files
    - support filtering and sorting in the grid

## Because of the restricted time, could not manage to do the following things which I would prefer if have more time
    - I would have introduced the `Core` module and move the core funtionaly there such as `DataApiService` etc

    - `HttpInterceptor` - intercept incoming or outgoing HTTP requests using the HttpClient and add the error handler code there. 

## Additional added dependencies
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

