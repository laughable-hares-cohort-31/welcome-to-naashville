//three DOM contructor functions

const buildElementWithText = (elementType, elementTextContent, elementID) => {
  let htmlElement = document.createElement(elementType);
  htmlElement.textContent = elementTextContent;
  htmlElement.id = elementID;
  return htmlElement;
};

const buildInputElement = (elementType, elementId) => {
  let htmlElement = document.createElement("input");
  htmlElement.type = elementType;
  htmlElement.id = elementId;
  return htmlElement;
};

const buildButtonElement = (elementId, elementText, elementClass) => {
  let button = document.createElement("button");
  button.id = elementId;
  button.setAttribute("type", "submit");
  button.textContent = elementText;
  button.classList.add(elementClass);
  return button;
}



const mainCont = document.querySelector(".main-container");
//function that creates the template for building input fields 
const fieldsetCreator = (itItem) => {
  const formFieldSet = (buildElementWithText("fieldset"));
  formFieldSet.appendChild(buildElementWithText("label", `Search for ${itItem}s: `));
  formFieldSet.appendChild(buildInputElement("text", `${itItem}Input`));
  formFieldSet.appendChild(buildButtonElement(`${itItem}Button`, "Search", "searchButton"));
  return formFieldSet;
};



const dropdownCreator = (itItem) => {
  const formFieldSet1 = (buildElementWithText("fieldset"));
  formFieldSet1.appendChild(buildElementWithText("label", `Search for ${itItem}s: `));
  formFieldSet1.appendChild(parkSelectElement());
  formFieldSet1.appendChild(buildButtonElement(`${itItem}Button`, "Search", "searchButton"));
  return formFieldSet1;
};

const buildOptionElement = (value, text, id) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  return option;
};

const parkSelectElement = () => {
  const formSelect = document.createElement("select");
  formSelect.id = "parkInput";
  formSelect.appendChild(buildOptionElement("dog_park", "Dog Park"));
  formSelect.appendChild(buildOptionElement("boat_launch", "Boat Launch"));
  formSelect.appendChild(buildOptionElement("skate_park", "Skate Park"));
  formSelect.appendChild(buildOptionElement("volleyball", "Volleyball"));
  formSelect.appendChild(buildOptionElement("tennis_courts", "Tennis Court"));
  return formSelect;
};

//function that creates the input form section and append to DOM
const buildInputForm = () => {
  const formSection = document.createElement("form");
  formSection.id = "form-container";
  formSection.setAttribute("onsubmit", "return false");
  formSection.appendChild(dropdownCreator("park"));
  formSection.appendChild(fieldsetCreator("restaurant"));
  formSection.appendChild(fieldsetCreator("event"));
  formSection.appendChild(fieldsetCreator("concert"));
  // formSection.appendChild(parkSelectElement())
  mainCont.appendChild(formSection);
};


//function to create initial HTML structures
const createDOM = () => {
  mainCont.appendChild(buildElementWithText("h1", "Nashville Itinerary Planner"));
  buildInputForm();
  const searchContainer = buildElementWithText("section", "", "search-container");
  searchContainer.addEventListener("click", eventDelegation);
  mainCont.appendChild(searchContainer);
  const itineraryContainer = (buildElementWithText("section", "", "itinerary-container"));
  itineraryContainer.appendChild((buildElementWithText("div", "", "park-container")));
  itineraryContainer.appendChild((buildElementWithText("div", "", "restaurant-container")));
  itineraryContainer.appendChild((buildElementWithText("div", "", "event-container")));
  itineraryContainer.appendChild((buildElementWithText("div", "", "concert-container")));
  mainCont.appendChild(itineraryContainer);
};

/*function that accepts an array of arrays, creates the structure for the search results, and appends them to the dom when the search button is clicked.*/
const searchResultsObject = (array, API) => {
  const searchContainer = document.querySelector("#search-container");
  while (searchContainer.firstChild) {
    searchContainer.removeChild(searchContainer.firstChild);
  }
  const createResultList = (buildElementWithText("ol", "Click item to add:", API));
  array.forEach((obj, index) => {
    const createListItem = buildElementWithText("li", obj.join(" : "), `${API}Item${index}`);
    createListItem.classList.add(API);
    const createSpan = buildElementWithText("span", "", index);
    createSpan.appendChild(createListItem);

    createResultList.appendChild(createSpan);
  });
  searchContainer.appendChild(createResultList);
};





const buildParkItems = (string, ID) => {
  const parkContainer = document.querySelector("#park-container");
  const createParkItem = buildElementWithText("p", string, ID);
  while (parkContainer.firstChild) {
    parkContainer.removeChild(parkContainer.firstChild);
  }
  parkContainer.appendChild(createParkItem);
};

const buildRestaurantItems = (string, ID) => {
  const restaurantContainer = document.querySelector("#restaurant-container");
  const createRestaurantItem = buildElementWithText("p", string, ID);
  while (restaurantContainer.firstChild) {
    restaurantContainer.removeChild(restaurantContainer.firstChild);
  };
  restaurantContainer.appendChild(createRestaurantItem);
};
const buildEventItems = (string, ID) => {
  const eventContainer = document.querySelector("#event-container");
  const createEventItem = buildElementWithText("p", string, ID);
  while (eventContainer.firstChild) {
    eventContainer.removeChild(eventContainer.firstChild);
  };
  eventContainer.appendChild(createEventItem);
};
const buildConcertItems = (string, ID) => {
  const concertContainer = document.querySelector("#concert-container");
  const createConcertItem = buildElementWithText("p", string, ID);
  while (concertContainer.firstChild) {
    concertContainer.removeChild(concertContainer.firstChild);
  }
  concertContainer.appendChild(createConcertItem);
};

