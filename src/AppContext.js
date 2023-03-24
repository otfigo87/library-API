import { useState, createContext, useContext } from "react";

const AppContext = createContext(null); //context

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("Appcontext must be inside appContextProvider");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (book) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.concat(book);
    setFavorites(newFavorites);
  };
  const removeFavorites = (ia) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((book) => book.ia !== ia);
    setFavorites(newFavorites);
  };

  return (
    <AppContext.Provider value={{ favorites, addToFavorites, removeFavorites }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
