export const changeHeader = (text) => {
  return {
    type: 'CHANGE_HEADER',
    payload: text
  };
};

export const addEvents = (prop) => {
  return {
    type: 'ADD_EVENTS',
    payload: prop
  };
};

export const updateForm = (state) => {
  return {
    type: 'UPDATE_FORM',
    payload: state,
  };
};

export const changeCenter = (prop) => {
  return {
    type: 'CHANGE_CENTER',
    payload: prop
  };
};

export const addGeolocation = (prop) => {
  return {
    type: 'ADD_GEOLOCATION',
    payload: prop
  };
};

export const toggleEventDetails = () => {
  return {
    type: 'TOGGLE_EVENT_DETAILS',
  };
};

export const setCurrentEvent = (index) => {
  return {
    type: 'SET_CURRENT_EVENT',
    payload: index
  };
};

export const setCurrentEventParticipants = (data) => {
  return {
    type: 'SET_CURRENT_EVENT_PARTICIPANTS',
    payload: data
  };
};

export const disableButton = (data) => {
  return {
    type: 'DISABLE_BUTTON',
    payload: data
  };
};

export const setCurrentEventLikes = (count) => {
  return {
    type: 'SET_CURRENT_EVENT_LIKES',
    payload: count
  };
};

export const incrementLikes = () => {
  return {
    type: 'INCREMENT_LIKES',
  };
};
