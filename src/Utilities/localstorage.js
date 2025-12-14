import toast from "react-hot-toast";

const getFromLocalStorage = () => {
  const storedItems = localStorage.getItem("bookings");
  if (storedItems) {
    return JSON.parse(storedItems);
  } else {
    return [];
  }
};

const saveToLocalStorage = (id) => {
  return localStorage.setItem("bookings", JSON.stringify(id));
};

const addToLocalStorage = (id) => {
  const storedItems = getFromLocalStorage();

  const found = storedItems.includes(id);
  if (!found) {
    const newItems = [...storedItems, id];
    saveToLocalStorage(newItems);
    toast.success("Successfully Added");
    return true;
  } else {
    toast.error("Already added.");
    return false;
  }
};

const deleteFromLocalStorage = (id) => {
  const storedItems = getFromLocalStorage();

  const remaining = storedItems.filter((item) => item !== id);
  saveToLocalStorage(remaining);
  toast.error("Booking Cancel.");
};

export { getFromLocalStorage, addToLocalStorage, deleteFromLocalStorage };
