create table sample (
  id varchar(100) not null,
  name varchar(100) not null,
  primary key (id)
)engine innodb;

create table customers (
  id varchar(255) not null,
  name varchar(255) not null,
  email varchar(255) not null,
  phone varchar(255) not null,
  primary key (id),
  constraint customers_email_unique unique (email),
  constraint customers_phone_unique unique (phone),
)engine innodb;

create table categories (
  id int not null auto_increment,
  name varchar(255) not null,
  primary key (id)
)engine innodb;

create table wallet (
  id varchar(255) not null,
  balance INT not null,
  customer_id varchar(100) not null,
  primary key (id),
  constraint wallet_customer_id_fk foreign key (customer_id) references customers(id),
  constraint wallet_customer_id_unique unique (customer_id)
)engine innodb;

create table comments (
  id INT not NULL auto_increment,
  customer_id varchar(255) not null,
  title varchar(255) not null,
  description text,
  primary key (id),
  constraint comments_customer_id_fk foreign key (customer_id) references customers(id)
)engine innodb;

INSERT INTO comments (customer_id,title,description) VALUES 
('a-11','Sample 1','Description 1'),
('a-11','Sample 2','Description 2'),
('a-02','Sample 1','Description 1'),
('a-02','Sample 2','Description 2');

CREATE TABLE likes (
  customer_id VARCHAR(255) not NULL,
  product_id VARCHAR(255) not NULL,
  constraint likes_customer_id_fk foreign key (customer_id) references customers (id),
  constraint likes_product_id_fk foreign key (product_id) references products (id)
)engine innodb;

CREATE TABLE _loves (
  A varchar(255) not null,
  B varchar(255) not null,
  primary key (A,B),
  constraint customer_loves_fk foreign key (A) references customers(id),
  constraint product_loves_fk foreign key (B) references products(id)
)engine innodb;

CREATE DATABASE belajar_prisma_migrate;
