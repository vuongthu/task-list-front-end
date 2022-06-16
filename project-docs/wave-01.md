# Wave 01: Setup and Baseline

**Learn Topics: React Components, Props, and State & Event Handling required for this wave**

## Setup

Use the following steps to get started:

1. One team member should fork and clone the repository.
1. Add other team member(s) as collaborators in GitHub
1. Run `yarn install` to install dependencies.
1. Run `yarn start` to run the local development server.

## Baseline

In Wave 01, we will explore the starter code for Task List Front End.

Read through the code in `App.js`, `TaskList.js` and `Task.js` and their style sheets to understand how data and events are being handled. You may use the following questions and suggestions to guide your exploration:

1. What `props` does `Task` have? 
            id, title, isComplete
    Where do they come from? 
            Task is called by TaskList and passes props through Task.
            
2. The `Task` component uses destructuring to read in the props `const Task = ({ id, title, isComplete }) => {...`
    - How would the code change if `{id, title, isComplete}` were replaced with `props`?
    - Consider making this change and the subsequent necessary changes through the rest of the component to deepen your understanding of the code.
    
    ID, title, etc. would be undefined without referencing props.id, etc.
    
4. How is the ~~strikethrough~~ style applied when the task title is clicked?
    - Consider updating the appropriate rule sets to change the text or background color when a task is marked complete.

    It adds a completed class in CSS onClick.
    
5. What `props` does `TaskList` have? Where do they come from?

    App passes in an array to TaskList, which in turn maps the array and calls the Task component and passes that map object through Task.

7. Where is the function `getTaskListJSX` called in `TaskList`?
    - How would the code change without this helper function?

    It is called in the final return statement. We could replace the helper function with a variable that stores the results of the map made by the current helper function.

8. What component is `TASKS` passed to in `App`?
    - How does the component pass `TASKS`?
    - What element is the component wrapped in?

    App defines TASKS and then calls TaskList and passes TASKS through that component. TaskList is wrapped in a <div> element.

The suggestions above should give you a strong foundation for working with Task List Front End. As time allows, follow your curiosity to explore more of the code and features.








