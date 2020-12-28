// import axios from "axios";
//
// export const createNote = (data) => {
//
//   return (dispatch) => {
//     return axios.post('/api/v1/notes/', {
//       title: 'testTitle',
//       content: 'testContent'
//     })
//       .then(function (response) {
//         console.log(response);
//         dispatch(getNotes());
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// }
//
//
// export const getNotes = () => {
//   return {
//     type: "GET_NOTES",
//     noteList: []
//   }}