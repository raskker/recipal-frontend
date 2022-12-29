import Ingredient from "./Ingredient"
import EDifficulty from "./enums/EDifficulty"

export default interface Recipe {
    name: string,
    desc: string
    ingredients: Ingredient[],
    portion: number,
    calories: number,
    difficulty: EDifficulty,
} 