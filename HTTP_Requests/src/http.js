export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  // response.ok = 200, 300
  // !response.ok = 400, 500
  if (!response.ok) {
    throw new Error("Failed to fetch places"); // crashes application
  }

  return resData.places;
}

export async function fetchUserPlaces() {
    const response = await fetch("http://localhost:3000/user-places");
    const resData = await response.json();
  
    // response.ok = 200, 300
    // !response.ok = 400, 500
    if (!response.ok) {
      throw new Error("Failed to fetch user places"); // crashes application
    }
  
    return resData.places;
  }

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({places}),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }

  return resData.message;
}
