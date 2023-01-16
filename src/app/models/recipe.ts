export interface Recipe {
    id: number;
    title: string;
    description: string;
    ingredients: string;
    steps: string;
    date: Date;
    CourseType: CourseType;
    Category: Category;
}
export enum CourseType {
    MainCourse,
    Appetizer,
    Dessert,
    Beverage,
    'Main Course' = MainCourse
}

export enum Category {
    GlutenFree,
    Vegan,
    Meat,
    Fish,
    'Gluten Free' = GlutenFree
}


export let courseTypesDisplay: { [index: number]: string } = {};
courseTypesDisplay[CourseType.MainCourse] = "Main Course";
courseTypesDisplay[CourseType.Appetizer] = "Appetizer";
courseTypesDisplay[CourseType.Dessert] = "Dessert";
courseTypesDisplay[CourseType.Beverage] = "Beverage";

export let categoryTypesDisplay: { [index: number]: string } = {};
categoryTypesDisplay[Category.GlutenFree] = "Gluten Free";
categoryTypesDisplay[Category.Vegan] = "Vegan";
categoryTypesDisplay[Category.Meat] = "Meat";
categoryTypesDisplay[Category.Fish] = "Fish";

