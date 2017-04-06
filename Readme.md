Lightweight PERN Boilerplate
=============================

Usage
--------------------

### Cloning Repository

```
> cd where/you/want/your/app
> git clone git@github.com:zdenham/PERNBoilerplate.git 
> cd PERNBoilerplate 
```

### Installing Postgresql

We are using postgres for our Database, so first we need to install postgres. You can accomplish this easily with homebrew! If you don’t have it, definitely install brew by following https://brew.sh/ . After that:

```
> brew update
> brew doctor
> brew install postgresql
```

### Running Postgres Server

We need to run a postgres server to host our databases on our local machine:

```
> brew tap homebrew/services
> brew services start postgresql
```

you can check to see if Postgres is running by enterinig:

```
lsof -i tcp:5432
```

You should see some processes running with postgres and PIDs, this means your database server is running on port 5432 (the default port)!


### Create a database

Now you need to create a psql db. You do this by starting the psql shell:

```
> psql
# CREATE DATABASE db;
# \q
```

### Connecting to the database

One last thing for the database. In your PERNBoilerplate navigate to ```/server/database.js``` and edit "YOURUSERNAME" to your computer username so your app can connect to your shiny new database. In case you forgot, your username can be found by entering:

```
> cd /Users
> ls
```

### Installing Packages and Running App

Now that your database is created, change directories back to PERNBoilerplate to install your local npm packages. You'll need npm for this step. If you don't have it, I recommend installing with brew!

```
> npm install 
```

Now Its time to run the app!

```
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

* Edit the package.json YOUR APP NAME, YOUR NAME, YOUR DESCRIPTION.
* Rename folder to your app name.
* Reinitialize git:

```
> rm -rf .git
> git init
> git add .
> git commit -m "initial commit"
```

* Create a new repository with the same name (case sensitive) as your app folder on https://github.com/.
* Edit the package.json YOUR REPOSITORY to be your github repo url

```
> git remote set origin <your-repo-github-url>
> git push --set-upstream origin master
```

