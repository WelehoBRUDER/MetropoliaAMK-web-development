export const fetchData = async (url, options) => {
  try {
    const res = await fetch(url, options);
    if (res.ok) {
      try {
        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Failed to get response data: " + error);
      }
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.error("Connection failed: " + error);
  }
};
