import React, { useContext } from "react";
import Context from "../Context";
function Location() {
  const contextValue = useContext(Context);
  return (
    <div className="location">
      <div className="added">Added Locations:</div>
      <ul className="location__list">
        {contextValue.favoritesList.map((item, index) => {
          return (
            <div>
              <span
                key={`list_${index}`}
                id={item}
                onClick={() => {
                  contextValue.request(item, contextValue.setResult);
                }}
              >
                {item}
              </span>
              <button
                onClick={(e) => {
                  contextValue.favoritesList.map((element, index) => {
                    if (element === item) {
                      let newArray = [...contextValue.favoritesList];
                      newArray.splice(index, 1);
                      contextValue.setFavoritesList(newArray);
                      localStorage.setItem(
                        "listItems",
                        JSON.stringify(Array.from(new Set(newArray)))
                      );
                    }
                  });
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default Location;
