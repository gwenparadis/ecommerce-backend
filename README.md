# E-Commerce Back End

## Description

I created this E-Commerce Backend in order to create an interactive database to store my store's inventory data. I am able to view product Categories, Products, and Tags. I am able to add Categories, Products, or Tags, and update existing data, as desired, using Insomnia as the interactive space. This application utilizes Node, Express,js to create the application routes, MySQL and Sequelize to create, seed and update the database, as well as the relational capabilities of MySQL when desired. I learned how to improve coding structure and accessibility of MySQL databases utilizing Sequelize models, refined my knowledge of Express.js routes, and conducted testing of routes and database capabilities with Insomnia.

## Installation

This webpage is a backend program, that has not been deployed publicly. The code can be access in the following Github repository: https://github.com/gwenparadis/ecommerce-backend

There is no visual for this application, as it does not have a front end. You can see the functionality of the code here:
https://drive.google.com/file/d/17MyLdJ6GeWjsGvi-UIof24Y7NaFncKqw/view

## Usage

See the following Acceptance Criteria to understand how the application can be accessed and utilized:
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file (ENV FILE)
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands (source schema.sql, exit, node seeds.sql)
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application (node server.js)
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags (api/categories and api/categories/id, api/products and api/products/id, api/tags and api/tags/id)
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia (for post: api/categories, api/products, api/ tags; for put and delete: api/categories/id, api/products/id, api/tags/id)
THEN I am able to successfully create, update, and delete data in my database

## Technologies Used

Node.js, Express.js, MySQL, Sequelize, Insomnia (tests), Github (store and edit code)

## License

NA

