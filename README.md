# Shopping Cart (Ecommerce application examples)

### Primary Featues

- State Management - Cart Management/ Add|Remove Items
- Sort and Filter Catalog Items
- Authentication (Auth0)
- New User Registeration (MongoDB, not released via UI)
- Access Control | Session Management - Individual Carts

### Notes

#### Auth0 Integration

- https://manage.auth0.com/dashboard/us/dev-00twbc5zjstbgrtt/applications (via github login)
- Docs and API integration: https://auth0.com/docs/quickstart/spa/react/interactive
- ENV variables (REACT_APP_AUTHO_DOMAIN & REACT_APP_AUTHO_CLIENT_ID) required for auth to work

#### Pending

- Cart session per user
- Cart page UI
- Use docker to bundle app in container
- Enable CI/CD

#### Docker

create docker image using -

```docker build -t ecommerce-backend-nodejs .

```

#### CI/CD

Auto Deploys enabled on 'Render' (render.com)

# BRANCH UPDATE

Updated Backend to -
https://fakeapi.platzi.com/?ref=public_apis

More APIs here -
https://publicapis.dev/category/shopping
