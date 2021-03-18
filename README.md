# Angular Micro UI Boilerplate

On this project we approach the micro front-ends architecture,
it provides a solution and basic implementation, we cover the
following aspects:

- Folder Structure
- Modules needed
- Configuration
- Custom Events

PD: It's important to mention this is just a way of implementing it, and there are multiple ways and enhancements that can be made, this "template" is only to provide a basic solution.

### Folder Structure

First of all we have to know we need an angular project for each micro ui, on this example we use 2 micro ui and 1 root application where we host our micro frontends.

- content-micro-ui
- main-micro-ui
- root-app

### Modules Needed

It's important we look at the module version, depending on the version sometimes the implementation might not work

For the micro ui we will need to install the following:

- ng-bootstrap/ng-bootstrap: ^6.1.0
- document-register-element: ^1.14.3
- ngx-build-plus: ^9.0.4

To run the micro ui we will also need (dev dependency):

- http-server: ^0.12.3

We need that to run the micro ui and use it on our host app.

### Configuration

Change the builder on angular.json to use:

- ngx-build-plus:build

Once we install the modules we have to configure the start of our micro ui to link it on our hosting app, we run the following command:

```sh
npm run micro host
```

> It's important to know we have to run each micro on a different port

That is to host the micro ui to use it on the host app, if we want to change the app and see how the changes are reflecting we run:

```sh
npm start
```

Once we run our http-server on each micro we want to use we will proceed to link those on our host application, we basically have to fetch the file we built and append it to our host application.

Once we have that in place we simply run our hosting app and we can see tha magic happening.
