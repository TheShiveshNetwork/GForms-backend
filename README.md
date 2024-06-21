## Google Forms Backend

This is a higly scalable backend server. The backend server is made in order to create a simple Google Forms Clone.

This backend server suppors custom routes with schema validation for bulletproof backend.

Author: [@TheShiveshNetwork](https://github.com/TheShiveshNetwork)

## Tech Stack

NodeJS + Typescript + Express + Zod + MongoDB

## Instructions

1. Clone the repo locally
   ```
   git clone https://github.com/TheShiveshNetwork/GForms-backend
   ```
2. Navigate into the directory and then install the packages
   ```
   npm i
   ```
3. Start the server
   ```
   npm run dev
   ```
### Extra setup
4. Create a mongodb database
5. Create .env.local file and add the following
   ```
   PORT=<port-to-start-server>
   MONGODB_URL=<your-mongodb-compass-url>
   dbName=<your-mongodb-database-name>
   ```

## Directory structure

The repository follows a structured organization of code.

- docs : Temporary json file, forms.json is stored there, which is for storing changes with the route /submit into a file.
- src :
  - controllers: Contains modules responsible for handling business logic and request/response processing.
  - models: Includes data models that define the structure of data objects and interact with the database.
  - mongodb: Manages MongoDB database connections, configurations, and utility functions for data interaction.
  - routes: Defines API endpoints and routes to handle incoming HTTP requests and delegate them to appropriate controllers.
  - schemas: Stores validation schemas using libraries like Joi or Zod to ensure data integrity and validation.
