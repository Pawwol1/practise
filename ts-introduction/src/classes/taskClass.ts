import {Category} from "../types/types.js";

interface Logger {
    logCreationDate: (addition: string) => void; // dodatek, czesto stosowany w Angular;
}

export class TaskClass implements Logger {
   public name: string;    // public jest domyślny;
   public done: boolean;
   public category?: Category;

   private createdAt: Date;  // klucza private nie można wywołać w nowym Tasku;

    constructor(
        name: string,
        done: boolean,
        category: Category = Category.GENERAL
    ) {
      this.name = name;
      this.done = done;
      this.category = category;
      this.createdAt = new Date();
    }

    public logCreationDate(extra: string) {
        console.log(`Task został dodany ${this.createdAt} ${extra || ""}`)
    }

}