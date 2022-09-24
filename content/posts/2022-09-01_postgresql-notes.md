## Installation

windows installer which includes PostgreSQL server, pgAdmin and StackBuilder.

pgAdmin is a graphical tool for managing and developing databases.
StackBuilder is a package manager to download and install additional tools utilities.

PostgreSQL can do a lot of data processing itself and hence there may not be need to all such things at api level.

## Schema Designing

1. Preserve everything we know when we split our information into tables
2. Reduce the redundancy of how we store it
3. Create a last line of defense with constraints
4. Never store full addresses in a single field
5. Never store firstname and lastname in the same field
6. Establish conventions for table and field names, and keep them
7. Create Table
8. Create columns in that table

```
Create table test(
    First_Name varchar,
    Last_name varchar
);
```

```
drop table test;
```

When you drop a table it is gone forever

To avoid error in query we can use `if exists`

```
drop table if exists test;
```

To copy data from csv into our table

```
copy sales (order_id, region, country)
from 'c:\downloads\abc.csv'
delimeter ','
CSV Header;
```

Naming convention

- Use lower case table or column names with underscore.
- For prettier report output use alias and then provide a upper case column name along with spaces if needed.

```
select character_name as "Character Name" from foo.
```

Always use timestamptz to store time along with timezone, never store timestamp type which is without timezone.

Notes from PostgreSQL official docs

1. Create database `createdb mydb`.
2. Remove database `dropdb mydb`.
3. Accessing database
   1. Interactive terminal `psql`
   2. Graphical frontend tool like `pgAdmin`

- Tables are grouped into databases, and a collection of databases managed by a single PostgreSQL server instance constitutes a database cluster.
- Whereas columns have a fixed order in each row, it is important to remember that SQL does not guarantee the order of the rows within the table in any way.

4. Creating a table

```
CREATE TABLE weather (
    city            varchar(80),
    temp_lo         int,           -- low temperature
    temp_hi         int,           -- high temperature
    prcp            real,          -- precipitation
    date            date
);
```

- SQL is case insensitive about key words and identifiers, except when identifiers are double-quoted to preserve the case .
- White space can be used freely in SQL commands.
- Two dashes (“--”) introduce comments. Whatever follows them is ignored up to the end of the line.

5. Removing a table `DROP TABLE tablename;`
6. Inserting rows into a table

```
INSERT INTO weather VALUES ('San Francisco', 46, 50, 0.25, '1994-11-27');
```

Above syntax requires you to remember the order of the columns. An alternative syntax allows you to list the columns explicitly:

```
INSERT INTO weather (city, temp_lo, temp_hi, prcp, date)
    VALUES ('San Francisco', 43, 57, 0.0, '1994-11-29');
```

You can list the columns in a different order if you wish or even omit some columns.

Listing the column explicitly is considered a better style.

7. `COPY` command to load data from files.

```
COPY weather FROM '/home/user/weather.txt';
```

8. Rwtrieving data from tables using queries

```
SELECT \* FROM weather;
SELECT city, temp_lo, temp_hi, prcp, date FROM weather;
SELECT city, (temp_hi+temp_lo)/2 AS temp_avg, date FROM weather; -- AS clause to relabel output column name
SELECT * FROM weather
    WHERE city = 'San Francisco' AND prcp > 0.0; -- WHERE clause that specifies which rows are wanted
SELECT * FROM weather
    ORDER BY city; -- sorting by city
SELECT * FROM weather
    ORDER BY city, temp_lo; -- sorting by multiple columns
SELECT DISTINCT city
FROM weather; -- remove duplicate rows
SELECT DISTINCT city
    FROM weather
    ORDER BY city; -- use DISTINCT and ORDER BY together for consistnt row ordering
```

Foreign key constraint helps in maintaining referential integrity of your data.

```
CREATE DATABASE "usdinr"

CREATE TABLE cf (
	trd_date date,
	symbol text,
	exp_date date,
	open_price real,
	hi_price real,
	lo_price real,
	close_price real,
	open_int float8,
	trd_val float8,
	trd_qty float8,
	no_of_cont float8,
	no_of_trade float8
)

\copy cf (trd_date, symbol, exp_date, open_price, hi_price, lo_price, close_price, open_int, trd_val, trd_qty, no_of_cont, no_of_trade) from 'C:\Users\ayush\code\backups\nse-final\cf.csv' delimiter ',' csv header;

CREATE TABLE co (
	trd_date date,
	symbol text,
	exp_date date,
    str_price real,
    opt_type text,
	open_price real,
	hi_price real,
	lo_price real,
	close_price real,
	open_int float8,
	trd_qty float8,
	no_of_cont float8,
	no_of_trade float8,
    notion_val float8,
    pr_val float8
)

\copy co (trd_date, symbol, exp_date, str_price, opt_type, open_price, hi_price, lo_price, close_price, open_int, trd_qty, no_of_cont, no_of_trade, notion_val, pr_val) from 'C:\Users\ayush\code\backups\nse-final\co.csv' delimiter ',' csv header;
```
