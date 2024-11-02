import { useRef, useState, useEffect } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState([]);

  // Using useEffect avoid infinite loop
  // first argument to useEffect is executed AFTER every component execution
  // Only if the dependencies array's values change does the 1st argument get executed again
  // Therefore the dependencies array is necessary to avoid infinite looping, even if it's an empty array

  // does not return value, but takes 2 arguments
  // first argument wraps the side effect code
  // second argument is an array of dependencies
  useEffect(() => {
    // navigator is provided by the browser
    // It is exposed by the browser to our JS code
    // getCurrentPosition() asks user for permission, and if granted allows us the user's location info
    // but since that can take some time, we call it as a callback
    navigator.geolocation.getCurrentPosition((position) => {
      // THIS is a side effect
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      // this triggers new render cycle
      // but then it re-triggers the app, causing the fetch of location to happen again
      // causes infinite loop which will crash
      setAvailablePlaces(sortedPlaces);
    });
  }, [] );
  // remember that not all side effects may need useEffect
  // and overuse can be bad practice as it requires an execution cycle

  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    // example of side effect without use of useEffect
    // because it does not update any states, 
    // also does not run with app execution, so no infinite loop
    // localStorage is provided by browser
    const storeIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if (storedIds.indexof(id) === -1) {
      localStorage.setItem(
        'selectedPlaces',
        JSON.stringify([id, ...storedIds])
      )
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();
  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
