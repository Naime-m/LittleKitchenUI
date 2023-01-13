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
    Appetizer = 'Appetizer',
    MainCourse = 'Main course',
    Dessert = 'Dessert',
    Beverage = 'Beverage'
}

export enum Category {
    Vegan = 'Vegan',
    Meat = 'Meat',
    Fish = 'Fish',
    GlutenFree = 'Gluten free'

}