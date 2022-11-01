# Goact Example Project
This project is aimed at showcasing how the goact exoskeleton can be used to add full chatting functionality into a pre-existing front end. 

For this example, the chatterbox component from the old front end directory is moved into the new frontend, and can be intergrated with a single import line and a single decloration line. 

As of Goact v0.2.2 all of the functionality is contained in the 500x400px square component.

<p align="center">
  <img src="https://github.com/Syssos/ChatterboxGoactExample-v0.2.2/blob/main/goactexampleImg.png" alt="goact example img"/>
</p>

## Dependancies
- [Go](https://golang.org/)
	* UUID Package ([google/uuid](https://github.com/google/uuid))v1.2.0
	* JWT Go ([dgrijalva/jwt-go](https://github.com/dgrijalva/jwt-go))v3.2.0
	* Websocket Package ([gorilla/websocket](https://github.com/gorilla/websocket))v1.4.2
	* Mux Router ([gorilla/mux](https://github.com/gorilla/mux))v1.8.0
	* CORS Router ([rs/cors](https://github.com/rs/cors))v1.8.0

- [Node.js & npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
	* [axios](https://www.npmjs.com/package/axios)
	* [node-sass](https://www.npmjs.com/package/node-sass)

## Running Locally
To get this project running local start by cloning this repository to a location on your local machine.

The Go Back end will need to be running at all times in order to have chat functionality. It is responsable for validating users, creating TCP/IP websocket connections, and tracking each chat room in a Go routine while any user is connected.

The Front end will optain a cookie string for the current user, this string will be valid for a predetermand amount of time and the browser uses it as a sort of key to tell the server the user is the person they claim to be. 

In order for the project to run both the front and back end will need to be ran, these services will run on different ports and will both need to be started in their own termian session, or have one run in the background.


### Terminal 1 (../goact/backend/)

```bash
$ go test ./...

ok      github.com/Syssos/goact
ok      github.com/Syssos/goact/models/chatroom
ok      github.com/Syssos/goact/routes

$ go build .
$ ./goact
Starting server on localhost:8080

```

> **Note:** This should run the 'go get' command for any needed package's that are not installed.
> Alternatively you can start the docker container.
> ```bash
> docker build -t backend .
> ```
> ```bash
> docker run -it -p 8080:8080 backend
> ```

### Terminal 2 (../goact/goactexample/)
The first thing we need to do to get our front end together is install any packages needed by this project. The package.json file will in this directory includeds all of the required dependancies meaning the npm install command can handle grabbing them for us.

```bash
npm install
```

With dependancies gathered, and the backend running, we can start our frontend and begin interacting with the app.

```bash
npm start
```
