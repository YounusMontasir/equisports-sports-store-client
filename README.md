# EquiSports

**Live Link:** [EquiSports](https://equisports-auth.web.app/)

## Project Overview
EquiSports is a dynamic platform for sports enthusiasts to buy and sell sports equipment easily. Users can showcase their equipment for sale, explore available products, and interact with trusted brands.

## Features

1. **Sports Equipment Marketplace**: Users can list their sports products for sale and purchase items from other users.
2. **All Equipment Section**: Displays all products available for sale with detailed descriptions.
3. **User Equipment Management**:
   - Users can add their own products for sale.
   - Users can view and manage their listed products in the "My Equipment" section.
4. **Customer Reviews**: Allows customers to leave reviews, enhancing buyer confidence.
5. **Trusted Brands**: Highlights brands recognized for quality and reliability.
6. **Authentication System**: Ensures secure login and account management.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **Authentication**: Firebase

### Dependencies

```json
"dependencies": {
    "@emotion/react": "^11.13.5",
    "animate.css": "^4.1.1",
    "firebase": "^11.0.2",
    "localforage": "^1.10.0",
    "lottie-react": "^2.4.0",
    "match-sorter": "^8.0.0",
    "react": "^18.3.1",
    "react-awesome-reveal": "^4.2.14",
    "react-dom": "^18.3.1",
    "react-icons": "^5.4.0",
    "react-router-dom": "^6.28.0",
    "react-tooltip": "^5.28.0",
    "sort-by": "^0.0.2",
    "sweetalert2": "^11.14.5",
    "swiper": "^11.1.15"
}
```

## Installation & Setup

Follow these steps to run the project locally:

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) (if running locally)

### Step 1: Clone the Repository

```sh
git clone https://github.com/YounusMontasir/suggestify-product-recommendation-client.git
cd suggestify-product-recommendation-client
```

### Step 2: Install Dependencies

```sh
npm install
```

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```sh
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_SERVER_URL=your_backend_api_url
```

### Step 4: Run the Development Server

```sh
npm run dev
