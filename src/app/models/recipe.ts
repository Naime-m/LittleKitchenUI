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
    Appetizer,
    MainCourse,
    Dessert,
    Beverage
}

export enum Category {
    Vegan,
    Meat,
    Fish,
    GlutenFree

}