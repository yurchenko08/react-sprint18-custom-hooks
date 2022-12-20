# React online marathon

## The tasks of the topic "custom hooks"

There are components EntitiesList and EntityDetails in the application.
These components have similar logic: they both display some external data that is loaded via a method passed in a props.

Please, extract common logic regarding fetching data into custom hook.

Name it "useLoading" and place into the "hooks" folder. Use named export for the hook.   
The hook should have one argument - method that fetches data.   
The hook should return retrieved data. 
  
Update EntitiesList and EntityDetails to use the hook.
