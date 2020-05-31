<h2>The Project Idea and Working</h2>

<h3>Pizza_Mania</h3>
A restaurant management website with different interface for the customers, the chef and the waiter. It is assumed that each customer is represented by the table that they occupy. The customers can open their interface by either operating the screen on the table or scanning the QR and opening the website linked to it on thei mobile.

<h4>Customer's Interface:</h4>

The customer sees a menu where the different categories of pizzas are displayed with their price and selected quantity counter displayed below.As the customer makes a selection, the counter increases and the customer's bill gets formulated on the side.
After the customer is finished with his selections and clicks on place order, his complete selection is displayed on the screen with his total amount. He can review and make edits to his order and then place the order.

<h4>Chef's Interface:</h4>
When the customer finally places his order, the chef gets the order details on this interface along with the table number where  the customer is sitting, which serves as the customer's identity at the restaurant.
When the chef is done with the table's order, he clicks on done. When he does this, that order gets removed from the chef's screen and appears on the waiter's interface.

<h4>Waiter's Interface: </h4>
On receiving a notification of the completed orders from the chef's end, the waiter collects the respective orders from the kitchen and delivers it to the respective tables.
The payment is made and then the waiter clicks done.

<h2>Implementation</h2>
Using the technologies like React, Node.js, mLab (for database management).

Node servers are used for the different interfaces and the application runs on different ports locally for now. mLab databse stores 3 tables for the customer's orders, chef's pending orders and the waiter's orders.
React is used to render the pages to the customer, chef and waiter.
