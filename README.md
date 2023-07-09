# Node.js Express Pet Store API

This is a simple project that implements a subset of the petstore.swagger.io API. The purpose of this project is to sharpen the knowledge of Node.js, Express, and REST API development.

## Technologies

The project is built using the following technologies:

<ul>
<li>Node.js v16 (ES6 syntax)</li>
<li>Express framework</li>
<li>Joi for data validation</li>
</ul>

## Project Scope

The project focuses on implementing the "pet" and "store" components of the petstore.swagger.io API. It provides the basic CRUD (Create, Read, Update, Delete) functionality for managing pets and store inventory.

### Key Features:

<ul>
<li>Implement the required endpoints and functionality for the "pet" and "store" components.</li>
<li>Utilize Express framework to create a RESTful API.</li>
<li>Perform data validation using Joi to ensure the correctness of request payloads.</li>
</ul>

## Project Setup

To set up the project, follow these steps:

<ol>
<li>Clone the project repository.</li>
<li>Install the dependencies using npm install.</li>
<li>Start the server by running npm start.</li>
<li>The server will listen on port 5000.</li>
</ol>

## API Endpoints

### Pet Endpoints

<ul>
<li><code>GET /pets</code> - Retrieve all pets.</li>
<li><code>GET /pets/:petId</code> - Retrieve a specific pet by ID. </li>
<li><code>POST /pets</code> - Create a new pet.</li>
<li><code>PUT /pets/:petId</code> - Update an existing pet.</li>
<li><code>DELETE /pets/:petId</code> - Deletes a pet.</li>
</ul>

### Store Endpoints

<ul>
<li><code>GET /store/inventory</code> - Retrieve the store inventory.</li>
<li><code>GET /store/order/:orderId</code> - Retrieve a specific order by ID.</li>
<li><code>POST /store/order</code> - Place a new order.</li>
<li><code>DELETE /store/order/:orderId</code> - Deletes an order.</li>
</ul>

## Data Validation

Data validation is performed using the Joi library. The request payloads are validated against predefined schemas to ensure that the required fields are present and have the correct format. If validation fails, an appropriate error response is returned.

## Contribution

Feel free to enhance the project by adding more features and expanding the functionality. Happy coding!
