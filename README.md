# React E-Commerce Site 🛍

This is a simple shopping site for small stores and/or individuals.

## What is this site for? 🤔

My friend creates Macramé and wants to sell her goods online. That is the idea of this site.  
 Using Contentful for product control and PayPal for payment.

## Demo 🖥

[Demo site](https://macrameshop37.netlify.com)

## Tech Stack 🔧

- [Create React App](https://github.com/facebook/create-react-app)
- [React-router](https://github.com/ReactTraining/react-router)
- [Material-UI](https://github.com/mui-org/material-ui)
- [Styled-Components](https://github.com/styled-components/styled-components)
- [Contentful](https://www.contentful.com/)
- [React-paypal-express-checkout](https://github.com/thinhvo0108/react-paypal-express-checkout)

## Get Started👩‍💻

Clone the project into your computer

### Setting up the Contentful

- Create a Space in your Contentful Organization
- Create content model fields for Products
  - name[Short text] : Product Name
  - path[Short text] : Slug, Must be unique
  - category[Short text] : Product's Category, for Filter
  - price[Integer] : Product Price
  - featured[Boolean] : True for Featured and/or Popular Product
  - description[Long text]
  - images[Media, many files] : First image will be a Main image for the product
- Add contents (Products)
- Copy API Keys (Space ID & Access token from Settings -> API keys ) and paste them into `.env` file with the same structure as the `.env.example` in the root directory of the repository.

### Setting up the React

- Installing dependencies

```
yarn
```

&emsp; You can use `npm install` as well

- Start at Localhost

```
yarn start
```

&emsp; or `npm start` to start the server
