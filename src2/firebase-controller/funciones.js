export const getData = (coleccionName) => {
  return  firebase.firestore().collection(coleccionName).get();
};
