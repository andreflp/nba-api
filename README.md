# NBA API

- Features

  - Authentication to access routes;
  - Creating new users;
  - List all teams of NBA;
  - List all teams of a conference;
  - List all teams of a division;
  - List all conferences;
  - List all divisions;
  - List divisions of a conference.


After setting up the database, you must run the migrations to create all initial data:


```sh
$ yarn
$ yarn typeorm migration:run -t=each
$ yarn dev:server
```

Another way to setting up is using docker and docker-compose to creating two containers, for the database and apps:

```sh
$ docker-compose up -d
```
