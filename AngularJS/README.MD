# Conceptual Overview

| Concept | Description |
| --- | --- |
|Template | HTML with additional markup
|Directives | extend HTML with custom attributes and elements
|Model |the data shown to the user in the view and with which the user interacts
|Scope |context where the model is stored so that controllers, directives and expressions can access it
|Expressions | access variables and functions from the scope
|Compiler | parses the template and instantiates directives and expressions
|Filter | formats the value of an expression for display to the user
|View | what the user sees (the DOM)
|Data | Binding sync data between the model and the view
|Controller | the business logic behind views
|Dependency | Injection Creates and wires objects and functions
|Injector | dependency injection container
|Module | a container for the different parts of an app including controllers, services, filters, directives which configures the Injector
|Service | reusable business logic independent of views