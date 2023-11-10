import axios from "axios";

/**
 * Fetches images from the Unsplash API based on the provided search query.
 * @param searchQuery The search query to use when fetching images.
 * @returns A Promise that resolves to the fetched image data.
 */

// searchQuery: string


// still in review will soon hear from the unsplash team
const pullImageFromAxios = async () => {
  const response = await axios
    .get(
      // `https://api.unsplash.com/search/photos?query=${searchQuery}`,
      "https://api.unsplash.com/photos/random?count=10",
      {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { pullImageFromAxios };
