---
title: "04: sqli"
layout: "bundle"
outputs: ["Reveal"]
---

## We'll get started at 5 past

---

{{< slide class="center" >}}
# Week04
### COMP6443 

---

## Upcoming due dates?
> Next Week
*  Monday during the lecture slot: mid-sem (0%)
* sun 11:59pm
  * report01 (20%)
  * topic03 challenges

---

## ~~SQL~~ SQUILLY

{{% section %}}
> Structured Query Language
* Basically how you can find stuff in a database.
Some examples of "Flavours" (different implementations of SQL) include
  * SQLite, PostgreSQL, MySQL, MSSQL Server

---

Databases
* Tables
  * Defined through columns
  * Contain records
    * each record potentially containing a value for every cell.
  
---

![](/assets/img/week04/database_visualised.png)

---

How do I use SQL? Well you just "QUERY" for what you want!

---

>> Queries
* `SELECT <column> FROM <table>;` -> Returns all the values of "column" in the table.
* `INSERT INTO table (columna, columnb) VALUES (a, b);` -> Inserts some values into a table.
* `UPDATE table SET ... = ...` -> Updates values of a table.
* ~~`DELETE FROM table ...`~~ (*pls dont*)
* `-- a comment (also #)` -> Anything after the -- is ignored.

---

SELECT \* FROM table WHERE ... -> Select ALL THE COLUMNS from a table
* `col =  ...`
* `col >  ...`
* `col <  ...` 
* `col <> ...	#` not equals (!=)
* `col LIKE ...	#` regexp
  * `_` `(.)` and `%` `(.*)` are wildcards

---

SOME EXTRA COOL STUFF YOU CAN SELECT (WRITE THIS DOWN)

---

> Fingerprinting (What flavour am I using?)
* work out the flavour/version
	* **MySQL**: `SELECT Version()`
	* **SQLite**: `SELECT sqlite_version()`
	* **MSSQL**: `SELECT @@Version`


---

> Finding the schema
* what tables exist, what do they look like?
	* **MySQL**: `SELECT * FROM information_schema.[tables|columns]`
	* **SQLite**: `SELECT * FROM sqlite_[master|schema]`
	* **MSSQL**: `SHOW TABLES; DESCRIBE <table_name>`

---

Demo this in `/playground`
	
---

Demo SQL Code

```
SELECT * FROM sqlite_master
INSERT INTO users VALUES (5,'jesse','merhi')
SELECT * FROM users UNION SELECT * FROM stock
```

---

## Notes on UNIONs
* The query needs to extract the same number of columns from both tables
* The data-type for the columns must be compatible
* You can also UNION the same table

---

```
SELECT username, password FROM users UNION SELECT * FROM stock
```

---
{{% /section %}}


---
## SQLi (Squilly for cool kids)
{{% section %}}

### SQL Injection
* *TLDR*: blindly trusting user input is bad

* What if we injected control characters which changed how the database interprets the query? e.g. inject our own `UNIONS/WHERES/etc`

* How could it tell the difference?

---

### How does SQLi work

```sql
SELECT * FROM users WHERE user = '{input}' AND password = '{...}'
```

&nbsp;  

If our input was: `' OR 1=1 --`

```sql
--                        vvvvvvvvvvvvvvvvvvvv
SELECT * FROM users WHERE user = '' OR 1=1 --'and password = '...'
--                        ^^^^^^^^^^^^^^^^^^^^
-- user = '' is always false, but 1=1 is always true
-- so this will return every user from the database
```

---

### Issues you may encounter
* Syntax needs to be correct, or you'll throw an error
  * so, determine syntax through errors/fingerprint

Common syntax errors:
* Single vs. Double quotes
* Commenting character (--) vs #
* Brackets! `((username = '{INPUT}' AND password = '{PASSWORD}'))`

---

* You have SQLi in `items`, but want `users`
  * find out the tables? (database schema)
  * include that table with a `UNION`
```sql
SELECT * FROM items WHERE item = '' UNION SELECT username,password FROM users;--;'
--                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
```
{{% /section %}}

---

# SQLi Demo
> Back to /login

---

## Mitigations

{{% section %}}

### Defense
* Reduce information disclosure
  * Don't display error messages
  * Just fail or show a basic error message (e.g. `'username or password incorrect'`)
* Strip out malicious content (e.g. use a WAF)
* Block requests with anything sus (*kinda bad UX*)

---

### Better defence
* Don't use raw content
  * Use parameterised queries rather than raw input
  * use an ORM (database as an object)

> Note: these have historically still been vulnerable, don't solely rely on them

---

### Offense

* Content stripped?
  * embed dummy characters (oORr)
  * use alternating case (WhErE)
* No response?
  * Timing Attacks (IF success THEN sleep(1))
  * Error-based extraction (get the output in an error)
  * Boolean-based extraction (IF success THEN ...)

{{% /section %}}

---

## NoSQL (MongoDB)
* it's not sql so therefore no sqli right?
  * yes but not yes
  * it's still vulnerable to injection
* not *necessarily* in the challenges
> covered in the extended lecture

{{% /section %}}

---

## Now you
* give the topic3 challenges a shot :)
* get your report ready!!
