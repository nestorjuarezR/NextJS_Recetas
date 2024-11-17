import { Clock } from 'lucide-react';
import Image from 'next/image';

interface Recipe {
  id: number;
  title: string;
  description: string;
  prepTime: string;
  difficulty: string;
  image: string;
}

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="card mb-4 col-3 mt-4 ml-3">
      <div className="card-header">
        <h5 className="card-title mb-1">{recipe.title}</h5>
        <p className="card-text text-muted">{recipe.description}</p>
      </div>
      <div className="card-body">
        <Image
          src="/store/bg3.jpg"
          alt={recipe.title}
          width={300}
          height={300}
          className="img-fluid rounded mb-3"
        />
        <div className="d-flex justify-content-between text-muted">
          <div className="d-flex align-items-center">
            <Clock className="me-2" size={16} />
            {recipe.prepTime}
          </div>
          <div>Difficulty: {recipe.difficulty}</div>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary w-100">View Recipe</button>
      </div>
    </div>

  );
}
