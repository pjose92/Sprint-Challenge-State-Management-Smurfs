1. What problem does the context API help solve?

Context API provides a way to share values between component without having to pass a prop

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of information that sends data from the application to the store. Only source of information for the sore

reducers specify how the applicaiton's state changes in response to actions sent to the store

Store is an object that contains all the state of the application. Each App only has one store. it is the 'single source of truth' is a redux app

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global. Any component can access application state.
Component state is local. it is only accessible inside of the component. it can live in the component state but it will need to be shared where it lives in the application

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a piece of middleware that allows us to dispatch asynchronous actions. 
It gives more control over how we dispatch our actions, allowing us to dispatch several actions over the course of one action creator.
Redux-thunk intercepts action creator calls, analyzes the content being returned.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite State Management system is Redux. It was confusing at first and still understanding it but I like to organize things in a clean way and so far that's what's providing.
