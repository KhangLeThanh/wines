import { useState, useEffect } from "react";
import axios from "axios";

export default function WinesAPI(limit) {
  const [wines, setWines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const fetchWines = async () => {
      try {
        await axios({
          method: "GET",
          url: "https://api-staging.vello.fi/front-challenge-2020/wine",
          params: { limit: limit },
        }).then((response) =>
          setWines(
            Object.entries(response.data.items).map((obj) => ({
              id: obj[0],
              data: obj[1],
            }))
          )
        );
      } catch (err) {
        setError(true);
        console.error(err);
      }
      setLoading(false);
    };
    limit > 500
      ? alert("Sorry there are no more wines to show...")
      : fetchWines();
  }, [limit]);

  return { wines, loading, error };
}
