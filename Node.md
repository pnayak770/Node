# Introduction to Backend

## What is Backend?

1. **Definition**:  
   Backend refers to the server-side of a web application where the logic, database interactions, and server operations are handled.

2. **Key Responsibilities**:

   - **Data Storage**: Manages databases to store and retrieve data.
   - **Business Logic**: Processes user requests and applies application rules.
   - **API Management**: Provides endpoints for the frontend to communicate with the server.
   - **Authentication and Authorization**: Handles user login, security, and permissions.

3. **Technologies**:

   - **Languages**: Java, Python, JavaScript (Node.js), PHP, Ruby, etc.
   - **Frameworks**: Django, Spring, Express.js, Laravel, etc.
   - **Databases**: MySQL, PostgreSQL, MongoDB, etc.

4. **Core Components**:

   - **Server**: Processes requests (e.g., Apache, Nginx).
   - **Database**: Stores application data.
   - **Application Logic**: Code that implements features.

5. **Interaction**:
   The backend communicates with the frontend (user interface) via APIs, sending processed data to be displayed.

---

## What is Hosting?

Hosting refers to the service of providing storage space and resources on a server to make websites, applications, or digital content accessible via the internet.

---

## What is Three-Tier Architecture?

The three-tier architecture, also known as the three-tier model, is a widely used architectural pattern in software development and web applications.

1. **Presentation Layer (Tier 1 - Frontend)**
2. **Application Layer (Tier 2 - Backend)**
3. **Data Layer (Tier 3 - Database)**

---

## What is HTTP & HTTPS?

### **HTTP**:

Basic protocol for transferring data but not secure.

### **HTTPS**:

Secure version of HTTP using encryption for safe communication.

| **Aspect**      | **HTTP**                                  | **HTTPS**                                      |
| --------------- | ----------------------------------------- | ---------------------------------------------- |
| **Full Form**   | Hypertext Transfer Protocol               | Hypertext Transfer Protocol Secure             |
| **Purpose**     | Transfers data between browser and server | Same as HTTP but with added security           |
| **Security**    | Unencrypted; data can be intercepted      | Encrypted using SSL/TLS; data is secure        |
| **URL Format**  | `http://`                                 | `https://`                                     |
| **Use Case**    | Non-sensitive websites (e.g., blogs)      | Sensitive websites (e.g., banking, e-commerce) |
| **Speed**       | Faster, no encryption overhead            | Slightly slower due to encryption              |
| **Trust Level** | Less secure                               | Secure (often shown with a padlock in browser) |

### **What is an IP Address?**

An **IP Address (Internet Protocol Address)** is a unique identifier assigned to a device (computer, phone, server) connected to a network. It enables devices to communicate with each other over the internet or local networks.

---

### **Key Points**:

1. **Types**:

   - **IPv4**: 32-bit address (e.g., `192.168.1.1`).
   - **IPv6**: 128-bit address (e.g., `2001:0db8:85a3:0000:0000:8a2e:0370:7334`).

2. **Purpose**:  
   Identifies devices and their location on a network for data exchange.

3. **Categories**:

   - **Public IP**: Accessible over the internet.
   - **Private IP**: Used within private networks.

4. **Dynamic vs. Static**:

   - **Dynamic IP**: Changes over time (assigned by ISPs).
   - **Static IP**: Remains constant.

5. **Example Use**:  
   Accessing websites, email servers, or connecting devices.

### **What is a Domain Name?**

A **domain name** is the human-readable address of a website on the internet. It translates into an IP address that computers use to identify servers.

---

### **Key Points**:

1. **Purpose**:  
   Makes it easier for users to access websites without remembering numeric IP addresses.

2. **Structure**:

   - **Example**: `www.example.com`
     - `www`: Subdomain
     - `example`: Domain name
     - `.com`: Top-Level Domain (TLD)

3. **Common TLDs**:

   - `.com`, `.org`, `.net`, `.edu`, `.gov`, etc.

4. **How It Works**:  
   When you type a domain name into a browser, it is converted into its corresponding IP address via the **DNS (Domain Name System)**.

5. **Example**:
   - Domain name: `google.com`
   - IP address: `142.250.190.14`

### **Introduction to API**

An **API (Application Programming Interface)** is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data structures that developers can use to interact with the system, service, or application.

---

### **Key Points**:

1. **Purpose**:  
   Enables different systems, applications, or services to communicate and exchange data.

2. **How It Works**:

   - An API provides a set of endpoints (URLs) that applications can request data from or send data to.
   - The server responds to the request with the requested data or action.

3. **Types of APIs**:

   - **REST API**: Uses HTTP requests (GET, POST, PUT, DELETE) and is stateless.
   - **SOAP API**: A protocol-based API that uses XML for messages.
   - **GraphQL API**: A query language for APIs allowing flexible data retrieval.

4. **Example**:

   - **Weather API**: Allows applications to request weather data for a specific location.
   - **Payment API**: Allows applications to process transactions (e.g., Stripe, PayPal).

5. **Benefits**:

   - Simplifies integration between systems.
   - Enables third-party developers to extend functionalities (e.g., plugins, mobile apps).
   - Increases scalability and flexibility of applications.

6. **Common Use Cases**:
   - Accessing third-party services (e.g., Google Maps, Twitter).
   - Sending and receiving data between a client and server (e.g., web applications, mobile apps).

---

### **In Short**:

APIs act as intermediaries that allow different software systems to communicate with each other, enabling integration and data exchange.

### **Introduction to REST API**

A **REST API (Representational State Transfer API)** is a type of web API that allows applications to communicate over the internet using simple HTTP methods. It is based on the principles of REST, an architectural style that emphasizes scalability and simplicity.

---

### **Key Points**:

1. **What It Does**:  
   REST API enables communication between different software systems over the internet. It allows one system to request data from another using standard HTTP methods.

2. **HTTP Methods Used in REST API**:

   - **GET**: Retrieves data from the server.
   - **POST**: Sends data to the server to create a new resource.
   - **PUT**: Updates existing data on the server.
   - **DELETE**: Removes data from the server.

3. **Stateless**:  
   Every request made to the server is independent, meaning the server does not store any information about previous requests. Each request must contain all necessary information.

4. **Structure**:

   - The data is often in **JSON** or **XML** format.
   - Endpoints (URLs) are used to access specific resources (e.g., `https://api.example.com/users`).

5. **Benefits**:
   - Simple and easy to use.
   - Works well with web and mobile applications.
   - Scalable and flexible.

---

### **In Short**:

A REST API is a simple way for applications to communicate over the web, allowing them to exchange data using standard HTTP methods. It's widely used due to its simplicity and flexibility.

# **Introduction to Node.js**

## 1. **Introduction**

- **Node.js** is an open-source, cross-platform JavaScript runtime built on Chrome's V8 JavaScript engine.
- It allows developers to run JavaScript code on the server-side (outside the browser).
- Node.js is widely used for building scalable and high-performance web applications.

## 2. **The V8 JavaScript Engine**

- **V8** is the JavaScript engine developed by Google for Chrome.
- It compiles JavaScript code directly into machine code, making it very fast.
- Node.js uses V8 to execute JavaScript code, enabling high performance and speed.

## 3. **Features of Node.js**

- **Asynchronous and Non-blocking**: Node.js handles multiple operations at once without waiting for each task to finish, improving performance.
- **Single-threaded**: It uses a single thread for handling requests, making it lightweight and efficient.
- **Event-driven**: Node.js responds to events (like user requests) and uses callbacks to handle them.
- **Scalability**: It can handle many connections simultaneously, making it ideal for real-time applications (e.g., chat apps, online games).
- **Fast**: Thanks to V8 engine, Node.js is known for its fast execution of JavaScript code.
- **Huge Ecosystem**: Node.js has a large number of libraries available through npm (Node Package Manager), making development faster and easier.

---

### **In Short**:

Node.js is a powerful JavaScript runtime that enables server-side development. It's fast, scalable, and event-driven, with a large ecosystem of tools.

# **Environment Setup for Node.js**

## **Commands:**

1. **Initialize a Node.js Project**:

   - Run the following command to create a `package.json` file and add project information manually:
     ```bash
     npm init
     ```
   - Alternatively, to create a default `package.json` file with all fields pre-filled:
     ```bash
     npm init -y
     ```

2. **Exit Terminal Process**:

   - To stop a running process (e.g., a server or `nodemon`), press:
     ```bash
     Ctrl + C
     ```

3. **Run Local `nodemon`**:
   - To run your Node.js file using `nodemon` installed locally in your project:
     ```bash
     npx nodemon fileName
     ```
   - Replace `fileName` with the name of your JavaScript file (e.g., `index.js`).

---

### **Note**:

- Make sure `npm` is installed along with Node.js before starting.
- `nodemon` automatically restarts your application when file changes are detected. Install it locally with:
  ```bash
  npm install --save-dev nodemon
  ```

---

# **Introduction to Express.js**

## **What is Express.js?**

Express.js is a minimal and flexible **web application framework** for Node.js that simplifies building web applications and APIs.

## **Key Features:**

1. **Routing**: Provides a robust set of features to define routes for different URL endpoints.
2. **Middleware**: Supports middleware to handle requests, responses, and custom logic.
3. **API Development**: Simplifies building RESTful APIs.
4. **Template Engines**: Easily integrates with template engines like EJS, Pug, or Handlebars.
5. **Scalability**: Lightweight and highly scalable for large applications.

## **Why Use Express.js?**

1. Simplifies server-side development in Node.js.
2. Allows for easy integration with databases and other tools.
3. Offers a vast ecosystem of third-party middleware.

---

## **Basic Example**

### **Using CommonJS (`require`)**:

```javascript
const express = require("express");
const app = express(); // Create an instance of Express

app.get("/", (req, res) => {
  res.send("Hello from Express.js!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

---

## **Using ES6 (`import`)**:

```javascript
import express from "express";
const app = express(); // Create an instance of Express

app.get("/", (req, res) => {
  res.send("Hello from Express.js!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

---

### **Notes:**

-SEQUENCE OF APIS / CODE IS VERY IMPORTANT IN EXPRESS JS

---
# Query and Param in APIs

When working with APIs, **query parameters** and **route parameters (params)** are used to send additional data to the server as part of the request. These two approaches are common in RESTful APIs.

---

## **1. Query Parameters**

- **Definition**: Query parameters are part of the URL after the `?` symbol. They provide key-value pairs separated by `&` and are typically used to filter, sort, or modify the response data.
- **Example URL**:
https://api.example.com/users?age=25&city=NewYork

- **Explanation**:
- `age=25`: Filters users aged 25.
- `city=NewYork`: Filters users in New York.

- **Code Example**:
```javascript
const express = require("express");
const app = express();

app.get("/users", (req, res) => {
    const { age, city } = req.query;
    res.json({ message: `Filtering users with age: ${age}, city: ${city}` });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
```
---
# Route Parameter Example in Express.js

Route parameters are used to capture dynamic values in the URL path. These parameters are defined using a `:` followed by a variable name in the route definition.

- **Example URL**:
http://localhost:3000/users/123

---

## **Example Code**

```javascript
const express = require("express");
const app = express();

// Define a route with a parameter ":id"
app.get("/users/:id", (req, res) => {
    // Extract the "id" parameter from the request
    const { id } = req.params;

    // Respond with the captured ID
    res.json({ message: `Fetching user with ID: ${id}` });
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
```


