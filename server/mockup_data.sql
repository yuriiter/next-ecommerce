INSERT INTO Car (id, isDeleted, name, title, subtitle, carType, fuelCapacity, peopleCapacity, isManual, price, previousPrice, thumbnail, photos, description)
VALUES
    ('1c714acd-bd98-49a7-874f-40b99bda8e47', false, 'Honda Civic', '2023 Honda Civic', 'Sleek and Stylish Sedan', 'sedan', 55, 5, false, 25000.00, 27000.00, 'civic-thumbnail.jpg', ARRAY['civic-photo1.jpg', 'civic-photo2.jpg'], 'The Honda Civic is a compact car.'),
    ('0a62a493-5baf-4b06-a05f-956de48c7366', false, 'Toyota Corolla', '2023 Toyota Corolla', 'Reliable Family Car', 'sedan', 50, 5, false, 23000.00, 24000.00, 'corolla-thumbnail.jpg', ARRAY['corolla-photo1.jpg', 'corolla-photo2.jpg'], 'The Toyota Corolla is a popular choice.'),
    ('d2cc2d25-20e5-4461-8228-68c2d61bdcf1', false, 'BMW X3', '2023 BMW X3', 'Luxury SUV', 'SUV', 65, 5, false, 45000.00, 48000.00, 'x3-thumbnail.jpg', ARRAY['x3-photo1.jpg', 'x3-photo2.jpg'], 'The BMW X3 combines luxury with performance.');


INSERT INTO Review (id, isDeleted, avatar, fullName, caption, date, rating, comment, carId, userId)
VALUES
    ('3d373f48-575f-4b7b-8d94-9f85801b6f97', false, 'user1.jpg', 'John Doe', 'Great Car!', '2023-03-05', 4.7, 'I loved the driving experience.', '1c714acd-bd98-49a7-874f-40b99bda8e47', 'b55a58a5-33f7-4a64-9f3d-6e6eb067bd4f'),
    ('dcf0a98e-c3e3-4681-86d1-68606fa6bf15', false, 'user3.jpg', 'Emily Johnson', 'Good but could be better.', '2023-03-10', 3.5, 'Nice car overall but had some issues.', '0a62a493-5baf-4b06-a05f-956de48c7366', 'b83db5b7-884d-4e5b-a92d-f3f044ab6813'),
    ('fb11922b-0f61-44d6-897e-5a74815bb1a4', false, 'user2.jpg', 'Alice Smith', 'Excellent SUV!', '2023-02-28', 4.9, 'BMW X3 is fantastic.', 'd2cc2d25-20e5-4461-8228-68c2d61bdcf1', 'f1628197-9096-4ee1-9e55-d9a4e36a53f5');


INSERT INTO Rental (id, isDeleted, rentalDate, total, taxes, carId, userId)
VALUES
    ('745a3cd3-ff33-4f05-8ae3-0ef14ccba3b1', false, '2023-03-15', 200.00, 20.00, '1c714acd-bd98-49a7-874f-40b99bda8e47', 'b55a58a5-33f7-4a64-9f3d-6e6eb067bd4f'),
    ('58fc6a50-45b3-4792-9b2e-cd1780c0d1d9', false, '2023-03-20', 180.00, 15.00, '0a62a493-5baf-4b06-a05f-956de48c7366', 'f1628197-9096-4ee1-9e55-d9a4e36a53f5'),
    ('8b4aa46b-f0b2-4892-bacc-d8c6ec366ecf', false, '2023-03-22
