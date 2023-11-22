# CIS444-Final-Project

## 11/21/23 Update

To get database started in order to log in or register:
1. Run MAMP.
2. Click on 'Open WebStart page'.
3. Go to phpMyAdmin.
4. Click on 'SQL' tab.
5. Run the following queries in order:

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

6. On the browser, run 'http://localhost/MovieLovers/pages/index.html'.
7. You should be able to register an account and log in.


Notes: 'Cookies' feature currently disabled until logging out feature works on 'View Profile' page.