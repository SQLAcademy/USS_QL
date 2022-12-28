You are the commander of a battleship and there is an enemy ship at an unknown location.

You have access to a database with latitude and longitude coordinates for the entire ocean.

The database has a table called 'intel' with three fields; 'latitude'(a letter), 'longitude'(a number), and 'contents'. The records in the table indicate whether there is open ocean at that location or a ship.

Submit a query request to the database using a SELECT command to find out if the ship is at the location specified.


SAMPLE QUERY (FOR DEV)
`SELECT contents FROM intel WHERE latitude = 'A' AND longitude = 2`