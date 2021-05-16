## To-Do-Backend

Simple backend server implemented with nodejs and express.

- To start in development mode use npm run dev

```bash
npm run dev
```

- It will listen to port 3000 and try to connect mongodb on localhost:27017 with using DB_USERNAME DB_PASSWORD environment variables.
- The server looks for .env file in the root directory.
  endpoint.
- The server can response to GET, POST, DELETE and PATCH requests for only /tasks route.
- /app/modules/task/dto folder can be used to check validations for /tasks endpoint.
