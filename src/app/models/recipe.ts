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

