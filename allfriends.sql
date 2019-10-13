
-- Drops the friend_db if it already exists --
DROP DATABASE IF EXISTS friend_db;

-- Create the database friend_db and specified it for use.
CREATE DATABASE friend_db;

USE friend_db;

-- Create the table wishes.
CREATE TABLE friends (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  photo varchar(255) NOT NULL,
  
  PRIMARY KEY (id)
);
CREATE TABLE scores (
  id int NOT NULL AUTO_INCREMENT,
  q1 INT NOT NULL,
   q2 INT NOT NULL,
    q3 INT NOT NULL,
      q4 INT NOT NULL,
       q5 INT NOT NULL,
        q6 INT NOT NULL,
         q7 INT NOT NULL,
          q8 INT NOT NULL,
           q9 INT NOT NULL,
            q10 INT NOT NULL,
  PRIMARY KEY (id)
  FOREIGN KEY (friend_id) REFERENCES friends(id)
);

-- Insert a set of records.
INSERT INTO friends (name,photo) VALUES ('ahm','ggggg');
INSERT INTO scores (q1,q2,q3,q4,q5,q6,q7,q8,q9,q10) VALUES (3, 2, 6, 4, 5, 1, 2, 5, 4, 1);