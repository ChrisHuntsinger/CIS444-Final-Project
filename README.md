# CIS444-Final-Project

THINGS REQUIRED BEFORE STARTING:

Database (MAMP)

API KEY (Ask Lyle for the Authorization or get your own through 'https://www.themoviedb.org/?language=en-US').

## 12/14/23 Update
INITIALIZE DATABASE FIRST! THEN UPDATE API KEY IN 2 FILES!

To get database started:
1. Create new folder 'MovieLovers' under MAMP/htdocs. 
2. Copy all files from GitHub and paste it under the new folder, 'MovieLovers'.
3. Run MAMP.
4. Click on 'Open WebStart page'.
5. Go to phpMyAdmin.
6. Click on 'SQL' tab.
7. Run the following SQL statements in order:

```sql
CREATE DATABASE movie_lovers;
```

8. Click on the new database called "movie_lovers" on the left side.
9. Click on the SQL tab again and execute the 2 statements below.

```sql
CREATE TABLE lovers(
  loverID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first VARCHAR(40),
  last VARCHAR(40),
  email VARCHAR(40),
  username VARCHAR(40), 
  password VARCHAR(40)
);
```

```sql
CREATE TABLE reviews (
    reviewID INT PRIMARY KEY AUTO_INCREMENT,
    movieID INT,
    loverID INT,
    headline VARCHAR(255),
    rating INT,
    review TEXT,
    FOREIGN KEY (loverID) REFERENCES lovers(loverID)
);
```

10. In file, "/js/myapp.js" and "/js/load_movie_details.js", replace '(Insert your API Key here)' with API Key.
11. On the browser, run 'http://localhost/MovieLovers/pages/index.html'.
12. You should be able to register an account and log in.
