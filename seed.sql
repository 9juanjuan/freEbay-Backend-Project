insert into users
    (first_name, last_name, email, password)
values
    ('Rebecca', 'Uranga', 'rebeccaiscool@gmail.com', 'ilovemycat'),
    ('Antonio', 'Garcia', 'antonioiskindacool@gmail.com', 'ilovecodingsomuch'),
    ('Sebby', 'Kitty', 'yumyumtuna@gmail.com', 'tuna4life'),
    ('Momo', 'Katz', 'popcornlover@gmail.com', 'snacksandnaps')
;

insert into inventory 
    (item_name, category, price, content)
values 
    ('Beats Headphones', 'Electronics', '$299', 'Like new!'),
    ('Cat Food', 'Pet Supplies', '$10', 'Organic, glutenfree.'),
    ('Coding for Dummies', 'Books', '$15', 'Lightly used'),
    ('Phone Case', 'Electronics', '$20', 'Great deal!'),
    ('Cat Litter', 'Pet Supplies', '$12', 'Covers the smell of poop!'),
    ('Backend Development for Dummies', 'Books', '$25', 'You will learn soooo much!')
;

insert into cart 
    (user_id, inventory_id)
values 
    (2, 1),
    (3, 2),
    (2, 3),
    (1, 6),
    (1, 4),
    (4, 2)
;

insert into claimed
    (user_id, inventory_id)
values
    (1,1);