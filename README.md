# Ecommerce Website - Frontend Task
this is a frontend task for interview process.

## Table of Contents
- [Ecommerce Website - Frontend Task](#ecommerce-website---frontend-task)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The task](#the-task)
    - [Requirements](#requirements)
    - [Links](#links)
  - [My process](#my-process)
    - [File Structure](#file-structure)
    - [Notes](#notes)
    - [Useful resources](#useful-resources)
  
## Overview
### The task
The is to create a simple ecommerce website with the following:

- Login page: user can sign in with email and password.
- Landing page: user can see a list of products with filters and sorting options.
- Product page: user can see the product details and add it to the cart.
- User cart should work (count only) even if the user is not logged in.

### Requirements
- Use Angular 
- Implement token interceptor.

### Links
- The API that used in this project to get products data: [DummyJson API](https://dummyjson.com/)
- The link to the live demo: [EcommerceTask](https://frontend-task-ecommerce.vercel.app/)
- 
## My process

- started by reviewing the designs attached with the task.
- Created the project with Angular v.14
- Added the ng-zorro-antd library for the UI components.
- Created the login page and integrated with [firebase authentication](https://firebase.google.com/docs/auth) to provide the login functionality.
- Created the header component and added the login/logout buttons, the cart button and the search input.
- Added the functionality of log out: user Can log out from the header component by clicking on the user avatar.
- Created the landing page and integrated with the [DummyJson API](https://dummyjson.com/)  to get the products' data.
- Implemented the token interceptor to add the token to the request header.
- Created the filtering and sorting functionality.
- Created the searching in products functionality.
- Created the product page and integrated with the [DummyJson API](https://dummyjson.com/) to get the product details.
- Added counting the products in the cart functionality, I used the Rxjs BehaviorSubject to store the cart data and share it between the components.

### File Structure
The project has the following file structure
```
    - src/
        - app/
            - core/
                - components/
                  - header/
                - interceptors/
                  - token.interceptor.ts
            - modules/
                - landing-home/
                - login/
                - product-details/
            - shared/
                - components/
                    - list-filters
                    - list-sort
                    - product-card
                - services/
                    - custom-http
                    - integrations/
                      - auth
                      - products
                - interfaces/
                    - product.interface.ts
                    - common.interface.ts
                    - user.interface.ts
        - assets/ 
            - images
            - styles/
              - components/
                 - button.scss
                 - forms.scss
              - settings/
                 - _fonts.scss
                 - _variables.scss
        - environments/
```   
### Notes
- The credentials for the login page are:
  - **email: User Email: test-user@gmail.com**
  - **password: @Test123**
- The breakpoint for the responsive design is 991px and 768px.
- The categories in the filter are static and not dynamic.
- The prices in the filter are static and not dynamic.
- The sorting options are sort by price from high to low and sort by price from low to high.
- Filters and sorting are made without using the API, as the API doesn't provide those functionalities, so I implemented them in the frontend with the help of array methods.
- In product details page, the sizes and ingredients are static and not dynamic.

### Useful resources

- [Angular](https://angular.io/) - This helped me to create the project with Angular.
- [ng-zorro-antd ](https://ng.ant.design/docs/introduce/en) - This helped me to create the UI components.
- [Rxjs](https://rxjs.dev/) - This helped me to implement the token interceptor and the cart functionality.
- [Firebase](https://firebase.google.com/docs/auth) - This helped me to implement the login functionality.
- [DummyJson API](https://dummyjson.com/) - This helped me to get the products' data.
