import { IBlogAnimals } from "@/interfaces/blog-animals-interface";

const BLOGS_ANIMALS_DATA: IBlogAnimals[] = [
  {
    id: 1,
    title: "Blog Animal 1",
    content: "Content about the Dog",
    type: "Omnivoro",
  },
  {
    id: 2,
    title: "Blog Animal 2",
    content: "Content about the Cat",
    type: "Carnivoro",
  },
  {
    id: 3,
    title: "Blog Animal 3",
    content: "Content about the Snake",
    type: "Carnivoro",
  },
  {
    id: 4,
    title: "Blog Animal 4",
    content: "Content about the Elephante",
    type: "Herviboro",
  },
];

class BlogAnimalService {
  async getAll(): Promise<IBlogAnimals[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(BLOGS_ANIMALS_DATA);
      }, 2000);
    });
  }

  async getById(id: number): Promise<IBlogAnimals> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const blog = BLOGS_ANIMALS_DATA.find((b) => b.id == id);
        if (blog) {
          resolve(blog);
        } else {
          reject(new Error("Blog not found!"));
        }
      }, 2000);
    });
  }

  async Save(blog: IBlogAnimals): Promise<IBlogAnimals> {
    return new Promise((resolve) => {
      setTimeout(() => {
        blog.id = BLOGS_ANIMALS_DATA.length + 1;
        BLOGS_ANIMALS_DATA.push(blog);
        resolve(blog);
      }, 2000);
    });
  }

  async Edit(blog: IBlogAnimals): Promise<IBlogAnimals> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Blog received for editing:", blog);
        const index = BLOGS_ANIMALS_DATA.findIndex(
          (b) => b.id === Number(blog.id)
        );
        if (index !== -1) {
          BLOGS_ANIMALS_DATA[index] = blog;
          resolve(blog);
        } else {
          reject(new Error("Blog not found for editing!"));
        }
      }, 2000);
    });
  }
}

export const blogAnimalService = new BlogAnimalService();
