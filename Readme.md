PERN Boilerplate
====================

Usage
--------------------
```
> git clone git@github.com:zdenham/PERNBoilerplate.git 
> cd PERNBoilerplate 
```

Set up postgres, can use command line or use https://postgresapp.com/documentation/gui-tools.html which installs postgres for you and provides a GUI for your databases. You need to create a psql db. You do this by starting the psql shell:

```
> psql
> CREATE DATABASE db;
> \q
```

Now that your database is created, run your app!

```
> npm install 
> npm run server 
```

Open new tab: ⌘t

```
> npm run client \n
```

navigate to http://localhost:8080 to view your app!