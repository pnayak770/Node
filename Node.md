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
