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