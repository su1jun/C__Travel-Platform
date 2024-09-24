# Full Stack Airbnb Clone

![그림1](https://github.com/user-attachments/assets/b9329338-fca3-4a8b-8eeb-d0967b8a85f8)
![그림2](https://github.com/user-attachments/assets/8a09229d-508d-4e23-9e21-e06fb8222656)
![그림3](https://github.com/user-attachments/assets/f4acb7ca-2c2d-4386-884f-8d7e72b3cccb)
![그림4](https://github.com/user-attachments/assets/f8127630-fd8d-4ae6-a886-950dbb44a7d8)

This is a repository for a Full Stack Airbnb Clone with Next.js 13.  
App Router: React, Tailwind, Prisma, MongoDB, NextAuth  

Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
    - For example we will filter out properties that have a reservation in your desired date range to travel
- Favorites system
- Shareable URL filters
    - Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results
- How to write POST and DELETE routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling
- How to handle relations between Server and Child components!

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/su1jun/C__Travel-Platform.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

