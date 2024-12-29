import React, { useState } from 'react';
import styles from "./QuotesGallery.module.css"
import muhamad from "../assets/people/muhamad.jpg"
import muhamad2 from "../assets/people/muhamad2.jpg"
import muhamad3 from "../assets/people/muhamad3.jpg"
import muhamad4 from "../assets/people/muhamad4.jpg"
import muhamad5 from "../assets/people/muhamad5.jpg"


function QuoteGallery() {

    // Updated quotes array with images and quotes
    const quotes = [
      {
        image: muhamad,
        text: "Success is built on risk and patience, trusting the process even when the path is unclear.",
        author: "Chinonso Okafor",
      },
      {
        image: muhamad2,
        text: "We turned vision into reality, proving that with the right mindset, anything is possible.",
        author: "Radric Delantic Davis (Gucci Mane)",
      },
      {
        image: muhamad3,
        text: "Crypto is not just about wealth, it's about making bold moves when others hesitate.",
        author: "Kwame Nkrumah",
      },
      {
        image: muhamad4,
        text: "We didn't wait for opportunities; we created them and changed our lives forever.",
        author: "Ngozi Ikenna",
      },
      {
        image: muhamad5,
        text: "Success doesn’t come easy, but with perseverance and innovation, it’s inevitable.",
        author: "Sibongile Mthembu",
      }
  ];    
    

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  return (
    <div className={styles["quote-gallery"]}>
      <button className={styles["nav-button"]} onClick={prevQuote}>❮</button>
      
      <div className={styles["card"]}>
        <img src={quotes[currentIndex].image} alt="Quote" className={styles["card-image"]} />
        <p className={styles["quote"]}>{quotes[currentIndex].text}</p>
        <p><b>~{quotes[currentIndex].author}</b></p>
      </div>
      
      <button className={styles["nav-button"]} onClick={nextQuote}>❯</button>
    </div>
  );
}

export default QuoteGallery;
