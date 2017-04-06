Lightweight PERN Boilerplate
=============================

Usage
--------------------

### Cloaning Repository

```
> cd where/you/want/your/app
> git clone git@github.com:zdenham/PERNBoilerplate.git 
> cd PERNBoilerplate 
```

### Installing Postgresql

We are using postgres for our Database. You can install it manually or use https://postgresapp.com/documentation/gui-tools.html which installs postgres for you and provides a graphical user interface for your local postgres servers. 

After installing, start a postgres server, make sure it is running on port 5432 (the default port).

### Create a database

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

### Installing Packages and Running App

Now that your database is created, change directories back to PERNBoilerplate and run your app! If you don't have npm, first make sure to install that. I recommend using homebrew!

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


Other stuff to do
--------------------

Edit the package.json YOUR APP NAME, YOUR NAME, YOUR REPOSITORY.

Rename folder to your app name.

Reinitialize git:

```
> rm -rf .git
> git init
```

Create a repository of your folder name on Github web client.

```
> git add .
> git commit -m "initial commit"
> git remote set origin <your-repo-name>
> git push --set-upstream origin master
```

