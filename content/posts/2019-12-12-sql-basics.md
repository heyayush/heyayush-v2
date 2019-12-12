---
template: post
title: SQL Basics
slug: sql-basics
draft: true
date: '2019-12-12T12:00:00.000Z'
description: >
  This is a quick revision of basics of SQL.
category: Programming
tags:
  - SQL
---

## Querying Data with the SELECT Statement

- SELECT statement allows us to retrieve one or more rows from one or more tables.
- Think of SELECT statement as a question you are asking the database.
- Mostly it contains a list of columns from a table we want to query.
- Use of \* wildcard. But it's better to be explicit rather than using \*
- It's a good practice to table qualify your column names. It's helpful in multi table queries.
- Aliasing the table name.
- Alising the column names.
- Constraining the number of results using WHERE clause and DISTINCT qualifier.
- DISTINCT for selecting only the unique values.

```sql
SELECT 'Hello', 'World'
SELECT <COLUMN_NAME>, <COLUMN_NAME> FROM <TABLE_NAME>;
SELECT * FROM <TABLE_NAME>;
SELECT first_name FROM person;
SELECT person.first_name, person.last_name FROM person;
SELECT p.first_name, p.last_name FROM person p;
SELECT p.first_name as FirstName, p.last_name as LastName FROM person p;
SELECT DISTINCT p.first_name FROM person p;
```

### WHERE clause

- Constrains the result set.
- Comes after the FROM clause.
- Contains boolean expressions.
- Using Boolean expressions.
- Use of **AND** and **OR** to combine multiple boolean expressions.

```sql
SELECT p.first_name FROM person p WHERE p.last_name = 'Sharma' AND p.city = 'London';
```

### BETWEEN operator

- Acts on column and two values.
- TRUE if column value is between two values.
- It is inclusive i.e. it includes two values (like >= & <=)

```sql
SELECT p.first_name FROM person p WHERE p.age BETWEEN 13 AND 19;
```

### LIKE operator

- Fuzzy version of =
- Allows using String with special characters to do matching.
```sql
SELECT p.first_name FROM person p WHERE p.first_name LIKE 'A%';
```

### IN operator
- It's a multi-value version of = operator
- List of potential values.
- True if any of the values in the list "hit".
```sql
SELECT p.first_name FROM person p WHERE p.last_name IN ('Sharma', 'Modi');
```
### IS operator
