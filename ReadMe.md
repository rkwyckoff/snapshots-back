Readme for "Snapshots" developed by: Marie Filbey and Kurt Wyckoff
Instructor:  Brit Butler
The Iron Yard - Atlanta Jan 2017 cohort

Developed a front end using Angular

Created back end server using Node JS, Express, and Sequelize

Set up server to run on Heroku using PostGRES database
Created a photo sharing app that provides:
a) viewing,  b) posting, and c) commenting on photos

Set up local database with sqLite3 and tested routes on POSTMAN using localhost


Route 1: User registers on the Home page
POST(https://intense-woodland-38140.herokuapp.com/users)

Route 2: User logs in on the Home page (token is returned)
POST(https://intense-woodland-38140.herokuapp.com/login)

Route 3: List all Photos onto Home page
GET(https://intense-woodland-38140.herokuapp.com/photos)

Route 4: Display one Photo after clicking on it(also displays username and comments)
GET(https://intense-woodland-38140.herokuapp.com/photos/:id)

Route 5: Post a new Photo (requires login authentication)
POST(https://intense-woodland-38140.herokuapp.com/photos)

Route 6: Post a comment on a photo (by photo_id)
POST(https://intense-woodland-38140.herokuapp.com/photos/:id/comment)

Route 7: List all comments on a photo (by photo_id)
GET(https://intense-woodland-38140.herokuapp.com/photos/:id/comment)

Route 8: Delete a photo (by photo_id)
POST(https://intense-woodland-38140.herokuapp.com/photos/:id/delete)

Route 9: Delete a comment (by photo_id)
POST(https://intense-woodland-38140.herokuapp.com/comment/:id/delete)
