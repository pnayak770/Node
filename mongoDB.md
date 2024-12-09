# MongoDB Notes

## Introduction
- MongoDB is a **NoSQL database** that stores data in a flexible, JSON-like format called BSON.
- It is document-oriented, making it suitable for handling unstructured or semi-structured data.

## Key Features
1. **Schema-less**: No predefined schema, allowing dynamic and flexible data structures.
2. **Scalability**: Supports horizontal scaling through sharding.
3. **High Performance**: Optimized for read and write operations.
4. **Rich Query Language**: Supports CRUD operations, aggregation, and indexing.
5. **Cross-Platform**: Compatible with Windows, macOS, and Linux.

## Core Components
- **Database**: Holds a collection of documents.
- **Collection**: Similar to a table in SQL, but schema-free.
- **Document**: Basic unit of data, represented as a JSON object.

## Advantages
- Easy to scale and integrate.
- Handles large volumes of data efficiently.
- Suitable for applications requiring real-time analytics and fast prototyping.

## Use Cases
- Content management systems (CMS).
- Real-time analytics.
- IoT applications.
- Social networks and e-commerce platforms.

## Basic Commands
### 1. Start MongoDB
```bash
mongod
```
# MongoDB Query Language (MQL)

## Comparison Operators
| SQL Equivalent | MongoDB Operator |
|-----------------|------------------|
| `==`           | `$eq`           |
| `>`            | `$gt`           |
| `>=`           | `$gte`          |
| `<`            | `$lt`           |
| `<=`           | `$lte`          |
| `!=`           | `$ne`           |

## Logical Operators
| SQL Equivalent | MongoDB Operator |
|-----------------|------------------|
| `&&`           | `$and`          |
| `||`           | `$or`           |
| `!`            | `$not`          |

---

## Read Operations
### Syntax
```javascript
db.<collection-name>.find(<CONDITION>)

```

### Example
```javascript
db.users.find({ age: { $gt: 25 } })
``` 

## Update Operations
### Syntax
```javascript
db.<collection-name>.updateOne(<CONDITION>, <UPDATE>)
db.<collection-name>.updateMany(<CONDITION>, <UPDATE>)
```

### Example 
```javascript
db.users.updateOne({ name: "John" }, { $set: { age: 30 } })
db.users.updateMany({ age: { $gt: 25 } }, { $inc: { age: 1 } })
``` 

## Delete Operations
### Syntax
```javascript
db.<collection-name>.deleteOne(<CONDITION>)
db.<collection-name>.deleteMany(<CONDITION>)
```

### Example
```javascript   
db.users.deleteOne({ name: "John" })
db.users.deleteMany({ age: { $gt: 25 } })
``` 
### Example-Taking a example of prducts collection:-


#### Q. Write a query to fetch all products

```javascript
db.products.find()
```

#### Q. Write a query to fetch all products with price greater than 500 ?

```javascript
db.products.find(
    {
     price:{
          $gt:500
        }
    }
)
```
#### Q. Find all the products whose price is between 500 and 600 ?

```javascript
db.products.find(
    {
     price:{
          $gt:500,
          $lt:600
        }
    }
)
```     
### SCHEMA :-structure of the data to expect in incoming request.

### MODEL :- the db collection with which that data will iteract.

