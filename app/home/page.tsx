import { RecipeCard } from "../components/recipe-card/card";

const Home = () => {
  const exampleRecipe = {
    id: 1,
    title: "Delicious Dish",
    description: "A simple and tasty dish",
    prepTime: "30 mins",
    difficulty: "Easy",
    image: "/path/to/image.jpg" // Asegúrate de tener una imagen válida
  };

  return (
    <div className="container">
        <h4 className="mt-4 mb-4 text-center">Tus recetas mas populares</h4>
      <RecipeCard recipe={exampleRecipe} />
    </div>
  );
};

export default Home;
