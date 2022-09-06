# Software Requirements

## Vision

* What is the vision of this product?
    Our vision of this product is to allow potential customers to view the dealership inventory and for the dealer to be able to CRUD their inventory.
    Our mission is to provide a high level of employee and customer engagement by providing a positive and professional work environment while also meeting our customer's needs, wants, and expectations. Our core values and processes are in place to guarantee a one of a kind car ownership experience that cannot be replicated anywhere in the automotive industry.

* What pain point does this project solve?
    The pain point that this project solves is for a dealer to be able to display their inventory of cars. Allow dealers to CRUD car inventory.
    Waiting, Pressure too many people in the process, Data.

* Why should we care about your product?
    This product allows a potential client to view the inventory of the dealership and schedule an appointment to see the car.
    Offers an opportunity to see and drive various models before making a decision.

## Scope (In/Out)

* IN - What will your product do
      * Describe the individual features that your product will do.

        * The web app will provide information to the users about all the different Cars in the dealership inventory*
          
        * Have a carousel of all the feature cars
         
        * List of the cars inventory
         
        * Model of a single car in detail
         
        * Dealer authentication 
         
        * Dealer CRUD
          
        * The web app will provide both driving directions to each of the destinations of the cars.

* OUT - What will your product not do?
          My website will never turn into an IOS or Android app.
          Our site will not have a cart because customers will have to schedule an appointment to see a car.

## Minimum Viable Product vs

What will your MVP functionality be?
    MVP will be an app that show the carousel of feature cars, list of inventory, dealer authentication, dealer CRUD functionality.
    Show car and Information and client have to add to the database.

What are your stretch goals?
    To find an image API for our cars.
    Filter inventory

## Stretch
  
  What stretch goals are you going to aim for?
  image API in and working
  Filter inventory

## Functional Requirements

List the functionality of your product. This will consist of tasks such as the following:
  
  1. Customer can view car inventory  
  2. A dealer can CRUD inventory of cars.
  3. A dealer can login
  4. A dealer can search all of the products in the inventory

## Data Flow

Customers will land on Homepage and will see the featured cars in the carousel and the list of cars inventory. Customers can click on a car to get a modal of that single car information. Dealers can login and be authenticated. Dealers can CRUD car inventory.

## Non-Functional Requirements (301 & 401 only)

Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.

Examples include:
  
  1. Security: login for dealers with Auth0.

  2. Usability:  the quality of a user's experience when interacting with products or systems, including websites, software, devices, or applications

  3. Availability: the quality or state of being available to the customer and employee.

  4. Reliability:  That a product, system, or service will perform its intended purpose for the customer and employee.

Pick 2 non-functional requirements and describe their functionality in your application.
    Dealers must be able to login with Auth0 to be able to CRUD inventory.
    The app must be scalable enough to add 500 cars at the same time while maintaining optimal performance.
