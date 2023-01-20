<br />
<p align="center">
<div align="center">
  <img height="150" src="https://miro.medium.com/max/678/1*zPyqgUPdcEUf5mR7Wb1kNA.jpeg"/>
  <img height="95" src="https://www.scottbrady91.com/img/logos/swagger-banner.png"/>
</div>
  <h1 align="center">Node API Postgre</h1>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setup .env example](#setup-env-example)
  - [Create Postgre Table using DDL](#create-postgre-table-using-ddl)
- [Contributing](#contributing)
- [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

Simple example project implementing node js, express js and PostgreSQL to manage books. Also equipped with a swagger, making it easier to read the API documentation.

### Built With

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL]('https://www.postgresql.org/')
- [Swagger]('https://swagger.io/')
- and other

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* [nodejs](https://nodejs.org/en/download/)
* [PostgreSQL]('https://www.postgresql.org/')

### Installation

- Clone This Back End Repo
```
git clone https://github.com/Chandra-Kurnia/node-api-postgre.git
```
- Go To Folder Repo
```
cd node-api-postgre
```
- Install Module
```
npm install
```

- <a href="#setup-env-example">Setup .env</a>
- Starting application
```
npm run dev
```

### Setup .env example

Create .env file in your root project folder.

```env
# app
PORT=4000

# database
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
DB_PORT=
```

### Create Postgre Table using DDL

Create table in your PostgreSQL database

```DDL
-- public.books definition

-- Drop table

-- DROP TABLE public.books;

CREATE TABLE public.books (
	id uuid NOT NULL,
	tittle varchar(255) NOT NULL,
	author_name varchar(255) NOT NULL,
	publisher_id varchar(255) NOT NULL,
	total_page int4 NOT NULL,
	description text NULL,
	CONSTRAINT books_pkey PRIMARY KEY (id)
);
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

My Email : candrakurniawan.dev@gmail.com


