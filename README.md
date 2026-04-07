# ProductivityTools.AppEngine.Default

This application is created exclusively to fill the `default` service slot that is required by Google App Engine. 

Google App Engine requires a default service to exist before any other microservices (additional App Engine services) can be deployed and run routing rules. This minimal Node.js application accomplishes this by running a simple HTTP server without any external dependencies.

It only returns:
1. The current date and time
2. The server's IP address
