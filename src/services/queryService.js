```javascript
// Importing required modules
const Query = require('../models/queryModel');

// Defining the QueryService class
class QueryService {
    // Method to create a new query
    static async create(queryString) {
        // Create a new Query instance
        const query = new Query({ query: queryString });

        // Execute the query
        const result = query.execute();

        // Save the query to the database
        await query.save();

        // Return the result
        return result;
    }

    // Method to get all queries
    static async getAll() {
        // Fetch all queries from the database
        const queries = await Query.find();

        // Return the queries
        return queries;
    }

    // Method to get a query by ID
    static async getById(id) {
        // Fetch the query from the database
        const query = await Query.findById(id);

        // Return the query
        return query;
    }

    // Method to update a query by ID
    static async updateById(id, queryString) {
        // Fetch the query from the database
        const query = await Query.findById(id);

        // Update the query
        query.query = queryString;
        const result = query.execute();

        // Save the updated query to the database
        await query.save();

        // Return the result
        return result;
    }

    // Method to delete a query by ID
    static async deleteById(id) {
        // Delete the query from the database
        const query = await Query.findByIdAndDelete(id);

        // Return the deleted query
        return query;
    }
}

// Exporting the QueryService class
module.exports = QueryService;
```
