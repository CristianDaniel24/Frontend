import { IBlog } from "@/interfaces/blog-interface";

const BLOGS_DATA: IBlog[] = [
  { id: 1, title: "Blog1", content: "Content of blog number 1, amazing!" },
  { id: 2, title: "Blog2", content: "Content of blog number 2, amazing!" },
  { id: 3, title: "Blog3", content: "Content of blog number 3, amazing!" },
];

class BlogService {
  async getAll(): Promise<IBlog[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(BLOGS_DATA);
      }, 1000);
    });
  }

  async getById(id: number): Promise<IBlog> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const blog = BLOGS_DATA.find((b) => b.id == id);
        if (blog) {
          resolve(blog);
        } else {
          reject(new Error("Blog not found!"));
        }
      }, 1000);
    });
  }

  async Save(blog: IBlog): Promise<IBlog> {
    return new Promise((resolve) => {
      setTimeout(() => {
        blog.id = BLOGS_DATA.length + 1;
        BLOGS_DATA.push(blog);
        resolve(blog);
      }, 2000);
    });
  }
}

export const blogService = new BlogService();
