# **Types of Middleware in Express.js**

Middleware in Express.js are functions executed during the request-response cycle. They act as intermediaries between the client and the server to process requests and responses. Middleware can perform tasks like logging, authentication, error handling, and more.

---

## **1. Application-Level Middleware**
- Defined using `app.use()` or directly on specific routes like `app.get()` or `app.post()`.  
- Executes on every request for the app or specified routes.  
- Commonly used for logging, parsing data, and adding headers.

### Example:
```javascript
// Middleware applied to all routes
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next(); // Passes control to the next middleware or route
});

// Middleware for a specific route
app.use('/api', (req, res, next) => {
    console.log("Middleware applied to /api routes");
    next();
});
```

---     

## **2. Router-Level Middleware**
- Defined using `router.use()` or directly on specific routes like `router.get()`.  
- Executes on every request for the router or specified routes.  
- Commonly used for authentication, authorization, and error handling.

### Example:
```javascript
const router = express.Router();

// Middleware applied to all routes in the router
router.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next(); // Passes control to the next middleware or route
});

// Middleware for a specific route in the router
router.use('/api', (req, res, next) => {
    console.log("Middleware applied to /api routes");
    next();
});

app.use('/api', router);
``` 

---

## **3. Error Handling Middleware**
- Defined using `app.use()` or directly on specific routes like `app.get()`.  
- Executes when an error occurs during the request-response cycle.  
- Commonly used for error logging, error handling, and error responses.

### Example:             
```javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});      
```

--- 

## **4. Built-in Middleware**
- Pre-defined middleware provided by Express.js.  
- Commonly used for parsing data, logging, and error handling.

### Example:             
```javascript
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(express.static('public')); // Serve static files from 'public' directory
``` 

## **5. Third-Party Middleware**
- Middleware written by third-party developers.  
- Commonly used for authentication, authorization, and error handling.

### Example:             
```javascript
app.use(passport.initialize()); // Initialize passport middleware
app.use(passport.session()); // Use passport session middleware
```     
    