# reduxStore-client
reduxStore-client - Assignemnt for Trilogy Full Stack Developer course.

## Links

* [Deployed App on Heroku](https://fsf-reduxstore.herokuapp.com/)

* [Related backend repo](https://github.com/macoovacany/reduxStore-server)

----

This assigment was meant to convert Activity 26 from using the ReactCOntext API to use the Redux store instead. Some notes about the Activity 26:

* The repo provided had a half implemented wishlist component. This had to expunged from the various parts of the code.

* The repo did not compile as downloaded, some minor syntax errors and variable renames had to be performed.

The conversion highlights are:

 * the global state is now provided through ```./src/utils/store.js``` instead of ```./src/utils/GlobalState.js```. The initial state and reducers are contained in that single file.
 
 * the React provider for redux is in ```./src/App.js```


----

## Criteria for the assignment:

```
GIVEN an e-commerce platform that uses Redux to manage global state
WHEN I review the app’s store
THEN I find that the app uses a Redux store instead of the Context API
WHEN I review the way the React front end accesses the store
THEN I find that the app uses a Redux provider
WHEN I review the way the app determines changes to its global state
THEN I find that the app passes reducers to a Redux store instead of using the Context API
WHEN I review the way the app extracts state data from the store
THEN I find that the app uses Redux instead of the Context API
WHEN I review the way the app dispatches actions
THEN I find that the app uses Redux instead of the Context API
````
----

