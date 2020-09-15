# YAZSUM Application

This repository contains the code for my yazsum client-side and server-side application

## Installation

**Ensure Node.js is installed**

### Server-Side Installation

- Clone this repository
- `cd` into server folder and install dependencies
- Inside server folder, open config folder and rename `config.env.example` to `config.env`
- Open `config.env` file and add link for `MONGO_URI` env variable
- Go back to server folder and run `npm run dev` for development or `npm start for production`

### Client-Side Installation

- Clone this repository
- `cd` into client folder and install dependencies
- Run `npm run start` or `yarn start` to view application

**Note:** Client-Side application required server-side api to perform operation. Make sure the server-side is running before trying to manipulate data on the client-side.
