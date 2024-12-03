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

| **Aspect**      | **HTTP**                                     | **HTTPS**                                    |
|------------------|---------------------------------------------|---------------------------------------------|
| **Full Form**    | Hypertext Transfer Protocol                 | Hypertext Transfer Protocol Secure          |
| **Purpose**      | Transfers data between browser and server   | Same as HTTP but with added security        |
| **Security**     | Unencrypted; data can be intercepted        | Encrypted using SSL/TLS; data is secure     |
| **URL Format**   | `http://`                                   | `https://`                                  |
| **Use Case**     | Non-sensitive websites (e.g., blogs)        | Sensitive websites (e.g., banking, e-commerce) |
| **Speed**        | Faster, no encryption overhead              | Slightly slower due to encryption           |
| **Trust Level**  | Less secure                                 | Secure (often shown with a padlock in browser) |