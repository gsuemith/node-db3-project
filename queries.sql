-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

-- select p.productname, c.categoryname 
-- from product as p join category as c
-- on c.id = p.categoryid;

-- select o.id, s.companyname, o.orderdate 
-- from 'order' as o 
-- left join shipper as s 
-- on o.shipvia = s.id where o.orderdate < '2012-08-09'

-- select p.productname, d.quantity
-- from orderdetail as d
-- join product as p on d.productid = p.id
-- where d.orderid = 10251

-- select o.id as 'Order #', 
--   c.companyname as 'Customer', 
--   e.lastname as 'Employee'
-- from 'order' as o
-- join customer as c 
--   on o.customerid = c.id
-- join employee as e 
--   on o.employeeid = e.id