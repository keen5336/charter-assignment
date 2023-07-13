SEE README FOR INSTRUCTIONS:

npm install needs to be run in both t he backend folder and frontend folder.

To run, execute "npm run dev" in the backend folder and "npm run start" in the frontend folder.

a random data set is generated at the init of the backend.

This is by far not the best way to construct the app.

A better way would be to store pre calculated data in the database and perform a proper query on optimized date values.

Have the back end sanitize the query and simply return the record set from the database directly to the front end

There should be little to no calculations on the front end, it should arrive in the proper format, and number calculations should NOT be performed on the front end.

I'm performing the filtering and math on the client side because that was how the app was requested to be built.

This is not a complete solution.

Styling is ignored, it was not a part of the assignment, but could easily be added.