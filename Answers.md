1.  Explain the differences between `client-side routing` and `server-side routing`.

    `Client-side routing` means that the routing is handled internally by the javascript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application. The whole page wont refresh, just certain elements inside the application that will change.
    
    `Server-side routing` means that the routing is handled from the server and an example of this can be seen regularly by clicking on a link, which in turn will request a new page from the server, giving a whole new docuument to the user each time that there's an adjustment to the URL.

2.  What does HTTP stand for?

    HTTP stands for Hypertext Transfer Protocol.

3.  What does CRUD stand for?

    CRUD stands for Create, Read, Update, and Delete
    
4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    1. Create = Post
    2. Read = Get
    3. Update = Put
    4. Delete = Delete

5.  Mention three tools we can use to make AJAX requests

    1. The methods (GET, PUT, POST, DELETE)
    2. The .then() promise which is an async function to do what we want with the response.
    3. The .catch() function which is a way to get error messages in case the request fails.