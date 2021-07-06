# ApmNew

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Basic Features:

Support for Progressive Web Apps
Lazy Loading
Forms
RXJS - async features
Fully featured router
Animations

Advanced Features:

Server-Side Rendering
Mobile friendly
Angular Language Service
ngUpgrade

Angular Architecture:
If a change is detected in parent, the child components also go through change detection cycle. Flow always goes down, never up. 

Dependency Injection

Directives - Custom html element or attribute used to power up and extend HTML (Custom or built in).
	Some built in - *ngIf, *ngFor (* represents structural directive). BrowserModule exposes these built 	in directives. 

Templates - Specify how components display

Change detection - State changes when something happens in the application. When state changes, framework runs change detection and re-renders the component. Angular handles state change and cascading changes (other changes due to state change) before rerendering the component. This is very efficient compared to frameworks that do not account for cascading changes and have to rerender the component twice. 

Zone.js - Creates a wrapper around all async operations in the browser (user interactions, http, timers etc, any event that can cause changes in the state). Angular subscribes to these notifications from zone whenever one of these operations complete. Angular then runs change detection and re-renders the component. 

Rendering Targets - Angular supports many rendering targets (Browser/DOM, Server Side, Native Mobile Apps, Desktop Apps, others etc)

Angular CLI - Minimizes creating a javascript application by bundling all the tools/frameworks. Supports building application, linting, serve dev application, and much more. 

Server Side Rendering - Happens through Angular Universal. Lowes initial download size, minimizes render time, search engine optimization

Mobile - Ionic and Nativescript to build native mobile apps, Electron on desktop 

Testing Tools - Karma (Unit testing tool, runs locally), Protactor (End to end tools). Alternatives are Jest, theIntern and Cypress.io

Angular comes with TestBed - helps construct components, async and fakeAsync, MockBackend

AOT compiler - Ahead of time compiler

Tips:
Use the CLI
Follow the style guide
Do sorting and filtering in your component
Leandras & use typescript
Learn & use Ngrx
Learn Webpack
Use lazy loading
Don’t touch the Dom directly
Understand what you’re sending down to the browser
Use immutable or observable data to maximize performance where appropriate


Angular: Getting Started

Application - Set of components and services that provide functionality across the components

Component - Template (HTML, view), Class (code associated with the view, methods, properties), Metadata (additional info about the component) - defined with a decorator (function that adds metadata to a class, members or method arguments). Decorator is always prefixed with @ (@Component()).

Anatomy of Component decorator
@Component({
	selector: ‘some-selector’ - Reference the component in html using the selector. Directive is custom 							html tag
	template: <h1> Some Title </h1> - Template is the view for the component 
})
NPM - Node Package Manager (install dependencies)
package.json - Contains all packages needed for our project. Divided into two sections:
1. Dependencies - Packages required for development and deployment
2. DevDependencies - Packages only required for development

npm installs all required dependencies in the node_modules folder

Importing what we need: 

Import statement - allows us to use exported class and functions from other files, angular framework, or other external javascript libraries. 

AppModule - How angular knows about our custom elements. It helps us organize our application into cohesive blocks of functionality. Provide boundaries within application. Provides template resolution environment. When angular compiler finds a directive and template, it looks in the app-module for definition. We define the component in app-module so compiler can find it. We also use the module to bootstrap our startup component. We also add browser module, so our application runs correctly in the browser. 

Angular module is identified using @NgModule decorator. Properties in the ngmodule decorator are arrays. In the declarations array we define all the components that belong in the module. In the imports we declare all of the external modules that we want all of our components to be able to access. External modules can be modules provided by angular, third party or our own. Bootstrap array defines startup component of the application. Startup component must contain the selector we use in index.html file


Angular compiles all templates and typescript to javascript. angular.io/errors has a list of common errors

Browser -> Dev tools -> webpack -> . Contains all application files that can be used to debug the application 

Template - Can be defined within the @Component directive using html in quotes or can be linked to a separate html file using templateUrl property

Styling - To use stylesheets in all templates we need to add them to the styles.css file in the src folder. You can use @import statement

Binding - Coordinates communication between the component’s class and it’s template and often involves passing data
1. {{Template expression}} - Interpolation binding - one way binding 
2. Property Binding - Bind to an element property to use the value of a template expression (Ex. <img [src] = ‘product.imageUrl’> - One way binding. 
3. Event Binding - Bind events to a method/property
4. Two way binding using ngModel - Syntax is typically known as Banana in a box [()] - [] brackets to indicate property binding, and () To indicate event binding to send notification back to the component. ngModel is built in angular directive

ES2015 has both for of and for in loops
Of represents each item whereas in represents the index

Pipes - Transform bound properties before display
	Built in pipes - date, number, decimal, percent, currency, json etc
	Ex. Display productCode in lowercase ({{product.productCode | lowercase}})
	Can be used in property bindings as well 
	Some pipes support parameters which can be added using colon
	Ex ({{product.price | currency:’USD’:’symbol’:’1.2-2’}})
	Custom pipes can be created using @Pipe decorator - name is what we will be referencing in the 		html when using pipe


Interface 
1. Specify a type
2. Specify a feature set

Component Lifecycles: 
	Lifecycle hooks - interface we implement to write code when a component lifecycle event occurs
1. OnInit - Perform component initialization, retrieve data
2. OnChanges - Perform action after change to input properties
3. OnDestroy - Performs cleanup

@Input() - pass data from parent to child
@Output() - pass data from child to parent (it has to be an emitted event). EventEmitter defines event. Accepted by the parent as an event in template


Dependency Injection
Angular injector manages dependency injection. All injected services are singletons (shared instance). Any data or logic is shared by all classes that use it. 

Dependencies can be injected into the class using constructor parameter. 

Services:
- Use Injectable decorator
- Registration:
    1. Root Injector - Service is available throughout the application (recommended for most scenarios). Use providedIn property in Injectable decorator and set the value to ‘root’
    2. Component Injector - Service is available ONLY to that component and it’s child components. It isolates a service used by only one component. Provides multiple instances of the service for multiple components. Use providers property in the component decorator to register for component injection. 


Reactive Extensions and Observables:
RxJS - library for composing data using observable sequences and transforming that data using operators (similar to LINQ). Angular uses Reactive Extensions for working with data (especially async data).
- Http requests are async
- Async notifications are handled by RxJS observable sequences 
- Observable - Collection of items over time. It does not retain items. Items can be observed over time.  Observable is lazy. Observable doesn’t do anything until subscribed. When subscribed, observable starts emitting notifications. 
    1. next - Next item is emitted. Observable provides the item. 
    2. error - An error occurred and no more items are emitted.
    3. complete - No more items are emitted
- When using http get observable returns a single next notification with an array of the response data
- Pipeline can be setup for map, filter, transform when observable receives an item
- Stop the observable with unsubscribing 
- Add $ suffix to variables that hold observables 


Handling HTTP response errors:
Tap - taps into the observable stream and allows us to look at the emitted values in the stream without transforming the stream
catchError - catches any errors
We can use both of these as parameters to the pipe method in the observable class. 


Navigation and Routing:

Routing: 
1. Configure a route for each component
2. Define options/actions
3. Tie a route to each option/action
4. Activate the route based on user action
5. Activating a route displays the component’s view

Angular application has one router managed by Angular’s router service. Import RouterModule to register the router service and declare the router directives. 

Configuring Routes: 
Pass routes to RouterModule using RouterModule.forRoot and pass an array of routes. Each item in the array specifies a route object. Each route object has a path property. You can also define additional properties like redirectTo and pathMatch. 
Ex. {path: ‘products’, component: ProductListComponent}. The path is appended to app url when called allowing bookmark. 

You can also add path parameters by using :
	Ex. products/:id - You can add multiple parameters by /

More specific routes should be on the top of the array.

You can use routerLink directive to route to a specific component.
	Ex. routerLink="['/welcome’]”. When passing parameters to the route you can add it as a second 		parameter to the array. Ex. [routerLink]=“[‘products’, product.productId]”
	If it only contains path, shortcut syntax can be used [routerLink]=“/welcome”

Once routerLink directive has been added you need to specify where to display the component after it routes. That can be done using router-outlet directive. All routing specifications have been done in the app-component currently. 
￼

To get a parameter from the route you can use ActivatedRoute service. Inject it to the component constructor.
1. If the component only needs to access the parameter once, you can use ActivatedRoute.snapshot.paramMap.get(‘parameter’);
2. If the component needs to read parameters as they change, you can use paramMap observable in ActivatedRoute


Using code to route:

Use Router, another service provided by the router. 
You can use the navigate method.
￼

Protecting Routes with Guards:
1. Limit access to a route
2. Restrict access to only certain users
3. Require confirmation before navigating away

Angular Router provides several guard methods: (These are all interfaces that need to be implemented to a service)
1. canActivate - Guard navigation to a route
2. canDeactivate - Guard navigation from a route
3. Resolve - Pre-fetch data before activating a route
4. canLoad - Prevent async routing

Once you implement a guard, you can add it to the RouterModule.forRoot array within the component properties. 
￼

Angular Module:
1. Class with NgModule decorator
2. It’s purpose:
    1. Organize the pieces of application
    2. Arrange them into blocks
    3. Extend application with capabilities from external libraries
    4. Provide a template resolution environment
    5. Aggregate and reexport

Bootstrap Array:
1. Every app must bootstrap at least one component, the root application component
2. Only be used in the root application module, AppModule

Declarations Array: 
1. Every component, directive and pipe we create must belong to one and only one Angular Module
2. Only declare components, directives and pipes
3. All declared components, directives and pipes are private by default (they are only accessible to components, directive, pipes in the same module)
4. Angular module provides the template resolution environment for it’s component templates


Exports array:
1. Allows sharing of component, directives and pipes to other modules
2. Export any component, directive, or pipe if other components need it 
3. Re-export modules to re-export their component, directives and pipes
4. We can export something without including it in the imports array

Imports Array:
1. Adding a module to the imports array makes available any components, directives, and pipes defined in that module’s exports array
2. Only import what this module needs
3. Importing a module does NOT provide access to it’s imported modules
4. Use the imports array to register services provided by Angular or third-party modules

Providers Array
1. Register services with the root application Injector. Recommended way is to use provided in parameter in @Injectable decorator set to ‘root’

To separate responsibility and maintain scalability feature sets should be created. Each feature set will have it’s own module which will be imported by the app module


Shared module can be defined to organize commonly used pieces of our application. Export those pieces to share them. 
















