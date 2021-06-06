import { useEffect, useState } from "react";
import { getMetadata } from "src/Api";

export const useMetadata = (address, tokenId) => {
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMetadata = async () => {
      setLoading(true);
      const data = await getMetadata(address, tokenId);
      setMetadata(data);
      console.log(data);
      setLoading(false);
    };
    fetchMetadata();
  }, []);

  return { metadata, loading };
};
