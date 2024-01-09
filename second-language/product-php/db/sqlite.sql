-- IF NOT EXISTS: only create the table if it doesn't already exist
-- PRIMARY KEY is the unique identifier for each table row
-- NOT NULL enforces that the row must have a value set for that column
CREATE TABLE IF NOT EXISTS products(
    pid INTEGER NOT NULL PRIMARY KEY,
    pname TEXT NOT NULL,
    model TEXT NOT NULL,
    price TEXT NOT NULL,
    img TEXT,
    descr TEXT );

-- Create
INSERT INTO products
    (pname, model, img, price, descr) 
    VALUES 
        ("Rocky",      "RP017-924-RM789", "rock1.jpg", "$2.07", "Introducing our vibrant and eye-catching colorful rock, featuring a captivating blend of green and orange hues. This unique piece is sure to add a touch of natural beauty to any space. Crafted with precision and attention to detail, this rock is a perfect addition to your collection or as a decorative accent in your home or office. Its striking colors and natural texture make it a standout piece that will surely impress."),
        ("Rockerella", "RP017-924-RM793", "rock2.jpg", "$3.82", "Introducing our exquisite green and red stone with a captivating black center. This unique gemstone showcases a harmonious blend of vibrant green and red hues, beautifully contrasted by a striking black focal point. Crafted with precision and attention to detail, this stunning stone is perfect for adding a touch of elegance and sophistication to any jewelry or decorative piece. Its mesmerizing colors and captivating design make it a must-have for those seeking a truly remarkable and eye-catching gemstone."),
        ("Stonicus",   "RP017-924-RM291", "rock3.jpg", "$1.99", "Introducing our quirky and adorable rock with googly eyes! This unique product adds a touch of whimsy to any space. Crafted from natural stone, this rock features googly eyes securely attached, creating a playful and eye-catching decoration. Whether used as a paperweight, a conversation starter, or simply as a fun addition to your home decor, this rock with googly eyes is sure to bring a smile to your face."),
        ("Pebbler",    "RP017-924-RM417", "rock4.jpg", "$5.12", "This captivating rock is adorned with mesmerizing white and brown crystals. Its composition is visually striking. The contrasting colors of the crystals, ranging from pristine white to earthy brown, adds an element of natural beauty to the overall aesthetic. This rock is sure to captivate and intrigue those with an appreciation for unique geological formations and the wonders of the natural world"),
        ("Boulder",    "RP017-924-RM364", "rock5.jpg", "$100.42", "This is a truly stunning faux stone, with intricate detail and natural textures. Crafted with precision, the rock captivates the imagination. Its realistic appearance makes it an ideal addition to any home or business."),
        ("Gritundra",  "RP017-921-RJ0012", "rock6.jpg", "$65.40", "Introducing our unique brown rock with natural holes, a captivating addition to any collection or home decor. Crafted by nature itself, this rock showcases a stunning blend of earthy brown tones, adding warmth and character to any space. Its distinctive porous texture and intricate perforations make it a fascinating piece to admire and explore. Whether used as a decorative accent or a conversation starter, this brown rock with holes is sure to bring a touch of natural beauty to your surroundings.");

-- Read
SELECT * FROM emp;

-- Update
UPDATE products SET pname = 'name1', model = 'model1', img = 'img1', price = 'price1', descr = 'descr1' WHERE pid = 1;

-- Delete
DELETE FROM products WHERE pid = 1;
DROP TABLE products;