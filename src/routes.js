import { query } from '../data/config';

// Display all users
app.get('/users', (request, response) => {
    query('SELECT * FROM users', (error, result) => {
        if (error) throw error;
 
        response.send(result);
        console.log("Working");
    });
});