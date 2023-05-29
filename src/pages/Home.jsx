import React from "react";
import Nav from "../components/Nav.jsx";
import MobileNav from "../components/MobileNav.jsx"
import CardItem from "../components/CardItem.jsx"
import Footer from "../components/Footer.jsx"
import "../style/Home.css"
import Banner from '../components/banner.jsx'

const articles = [
    {
      id: 1,
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg?im_w=720",
      price: "$100",
      location: "United States, New York City",
      description: "Cozy apartment in the heart of Manhattan",
      rating: 4.5,
      ownerPicture: "owner-image-url-1"
    },
    {
      id: 2,
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-635437605163910390/original/e22d9d0e-fa0b-48e1-9d35-ab7c3463b357.jpeg?im_w=720",
      price: "$80",
      location: "France, Paris",
      description: "Charming studio near the Eiffel Tower",
      rating: 4.2,
      ownerPicture: "owner-image-url-2"
    },
    {
      id: 3,
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=720",
      price: "$120",
      location: "United Kingdom, London",
      description: "Spacious flat in the city center",
      rating: 4.7,
      ownerPicture: "owner-image-url-3"
    },
    {
      id: 4,
      image: "https://a0.muscache.com/im/pictures/7a3b9e8e-7f89-4710-a476-55f5512513e2.jpg?im_w=720",
      price: "$90",
      location: "Japan, Tokyo",
      description: "Traditional Japanese house experience",
      rating: 4.8,
      ownerPicture: "owner-image-url-4"
    },
    {
      id: 5,
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg?im_w=720",
      price: "$150",
      location: "Italy, Rome",
      description: "Stunning penthouse overlooking the Colosseum",
      rating: 4.9,
      ownerPicture: "owner-image-url-5"
    },
    {
      id: 6,
      image: "https://a0.muscache.com/im/pictures/airflow/Hosting-629652398313106706/original/0620e8a0-0b5a-4991-b5e2-5277b8cc6a13.jpg?im_w=720",
      price: "$70",
      location: "Spain, Barcelona",
      description: "Modern apartment in the Gothic Quarter",
      rating: 4.6,
      ownerPicture: "owner-image-url-6"
    },
    {
      id: 7,
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=720",
      price: "$110",
      location: "Australia, Sydney",
      description: "Beachfront house with stunning ocean views",
      rating: 4.7,
      ownerPicture: "owner-image-url-7"
    },
    {
      id: 8,
      image: "https://a0.muscache.com/im/pictures/b8a5f60d-2bda-4050-bc9e-55af012d6eb4.jpg?im_w=720",
      price: "$95",
      location: "Netherlands, Amsterdam",
      description: "Canal house in the historic city center",
      rating: 4.4,
      ownerPicture: "owner-image-url-8"
    },   {
      id: 9,
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg?im_w=720",
      price: "$100",
      location: "United States, New York City",
      description: "Cozy apartment in the heart of Manhattan",
      rating: 4.5,
      ownerPicture: "owner-image-url-1"
    },
    {
      id: 10,
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-635437605163910390/original/e22d9d0e-fa0b-48e1-9d35-ab7c3463b357.jpeg?im_w=720",
      price: "$80",
      location: "France, Paris",
      description: "Charming studio near the Eiffel Tower",
      rating: 4.2,
      ownerPicture: "owner-image-url-2"
    },
    {
      id: 11,
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=720",
      price: "$120",
      location: "United Kingdom, London",
      description: "Spacious flat in the city center",
      rating: 4.7,
      ownerPicture: "owner-image-url-3"
    },
    {
      id: 12,
      image: "https://a0.muscache.com/im/pictures/7a3b9e8e-7f89-4710-a476-55f5512513e2.jpg?im_w=720",
      price: "$90",
      location: "Japan, Tokyo",
      description: "Traditional Japanese house experience",
      rating: 4.8,
      ownerPicture: "owner-image-url-4"
    },
    {
      id: 13,
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg?im_w=720",
      price: "$150",
      location: "Italy, Rome",
      description: "Stunning penthouse overlooking the Colosseum",
      rating: 4.9,
      ownerPicture: "owner-image-url-5"
    },
    {
      id: 14,
      image: "https://a0.muscache.com/im/pictures/airflow/Hosting-629652398313106706/original/0620e8a0-0b5a-4991-b5e2-5277b8cc6a13.jpg?im_w=720",
      price: "$70",
      location: "Spain, Barcelona",
      description: "Modern apartment in the Gothic Quarter",
      rating: 4.6,
      ownerPicture: "owner-image-url-6"
    },
    {
      id: 15,
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=720",
      price: "$110",
      location: "Australia, Sydney",
      description: "Beachfront house with stunning ocean views",
      rating: 4.7,
      ownerPicture: "owner-image-url-7"
    },
    {
      id: 16,
      image: "https://a0.muscache.com/im/pictures/b8a5f60d-2bda-4050-bc9e-55af012d6eb4.jpg?im_w=720",
      price: "$95",
      location: "Netherlands, Amsterdam",
      description: "Canal house in the historic city center",
      rating: 4.4,
      ownerPicture: "owner-image-url-8"
    }
    
  ];
  

const Home = () => {
    return (<>
        <Nav />
        <CardItem articles={articles} />
        <Banner />
        <Footer />
        <MobileNav />
        </>)
}

export default Home
