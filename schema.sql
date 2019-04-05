create table users (
    id serial primary key,
    first_name varchar(100), 
    last_name varchar(100),
    email varchar(200),
    password varchar(500)
);

create table inventory (
    id serial primary key,
    item_name varchar(200),
    category varchar(200),
    price varchar(200),
    content text
);

-- create table cart (
--     id serial primary key,
--     user_id integer references users(id),
--     inventory_id integer references inventory(id)
-- );

create table claimed (
    id serial primary key,
    user_id integer references users(id),
    inventory_id integer references inventory(id)
);

create table selling (
    id serial primary key,
    item_name varchar(200),
    category varchar (200),
    content text
);
