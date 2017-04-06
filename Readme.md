PERN Boilerplate
====================

Usage
--------------------
```
> git clone git@github.com:zdenham/PERNBoilerplate.git 
> cd PERNBoilerplate 
```

Set up postgres, can use command line or use https://postgresapp.com/documentation/gui-tools.html which installs postgres for you and provides a graphical user interface for your local postgres servers. Start a postgres server, make sure it is running on port 5432 (the default port). 

Now you need to create a psql db. You do this by starting the psql shell:

```
> psql
# CREATE DATABASE db;
# \q
```
One last thing for the database. In your PERNBoilerplate navigate to ```/server/database.js``` and edit "YOURUSERNAME" to your computer username. This can be seen with:

```
> cd /Users
> ls
```

Now that your database is created, change directories back to PERNBoilerplate and run your app!

```
> npm install 
> npm run server 
```

Your backend API should be running! Now run the front end on a separate server:

Open new tab: ⌘t

```
> npm run client
```

navigate to http://localhost:8080 to view your app!