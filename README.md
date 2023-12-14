# CIS444-Final-Project

## 12/13/23 Update

INITIALIZE DATABASE FIRST!
To get database started:
1. Create new folder 'MovieLovers' under MAMP/htdocs. 
2. Copy all files from GitHub and paste it under the new folder, 'MovieLovers'.
3. Run MAMP.
4. Click on 'Open WebStart page'.
5. Go to phpMyAdmin.
6. Click on 'SQL' tab.
7. Run the following queries in order:

'''
CREATE DATABASE movie_lovers;
'''

'''
CREATE TABLE lovers(
  loverID SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first VARCHAR(40),
  last VARCHAR(40),
  email VARCHAR(40),
  username VARCHAR(40), 
  password VARCHAR(40),
);
'''

...
CREATE TABLE reviews (
    reviewID INT PRIMARY KEY AUTO_INCREMENT,
    movieID INT,
    loverID INT,
    headline VARCHAR(255),
    rating INT,
    review TEXT,
    FOREIGN KEY (loverID) REFERENCES lovers(loverID)
);
...

8. On the browser, run 'http://localhost/MovieLovers/pages/index.html'.
9. You should be able to register an account and log in.


Notes: 'Cookies' feature currently disabled until logging out feature works on 'View Profile' page.
