// import React from "react";
// import Proptypes from "prop-types";

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h2>I Like {name}</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: Proptypes.string.isRequired,
//   picture: Proptypes.string.isRequired,
//   rating: Proptypes.number.isRequired,
// };

// const FoodILike = [
//   {
//     id: 1,
//     name: "potato",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSREuVKqud66oomNvDSd9YgU2USeTlJ2tiucg&usqp=CAU",
//     rating: 4.1,
//   },
//   {
//     id: 2,
//     name: "milk",
//     image:
//       "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OAEOY5GKSII6LJ5SLIXYESYCZE.jpg&w=1440",
//     rating: 5.5,
//   },
//   {
//     id: 3,
//     name: "bacon",
//     image:
//       "https://www.thespruceeats.com/thmb/D1UAHYlf62gGzqSR4DcKud7HVlw=/1500x844/smart/filters:no_upscale()/how-to-make-your-own-bacon-4146515-17-5b4643f1c9e77c0037514094.jpg",
//     rating: 9.8,
//   },
// ];

// /*
// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }
// */
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello!!</h1>
//       {FoodILike.map((dish) => (
//         <Food
//           key={dish.id}
//           name={dish.name}
//           picture={dish.image}
//           rating={dish.rating}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;
