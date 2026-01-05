import React, { useEffect, useState } from "react";

export default function Likan() {
  const [cards, setCards] = useState([]);
  const [laoding, setLoading] = useState(true);

  useEffect(() => {
    const getCards = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://db.ygoprodeck.com/api/v7/cardinfo.php"
        );
        const data = await res.json();
        setCards(data.data);
      } finally {
        setLoading(false);
      }
    };
    getCards();
  }, []);
  return (
    <div>
      {laoding ? (
        <p>Loading...</p>
      ) : (
        cards.map((c, i) => (
          <p className="">
            <img src={c.card_images[0].image_url_small} alt="" />
          </p>
        ))
      )}
    </div>
  );
}
