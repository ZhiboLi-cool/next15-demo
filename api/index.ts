import { Blog } from '@/types';

interface CommonResponse<T = any> {
  err: Error;
  res: {
    message: string;
    data: T;
  };
}

export async function getAllData(): Promise<CommonResponse<Blog[]>> {
  try {
    const response = await fetch("/api/blog/getData");

    if (!response.ok) {
      return {
        res: null,
        err: new Error(response.statusText)
      };
    }

    const data = await response.json();

    return {
      res: {
        message: 'success',
        data
      },
      err: null
    };
  } catch (error) {
    return {
      res: null,
      err: error as Error
    };
  }
}

export async function postBlog(blog: Omit<Blog, 'id'>): Promise<CommonResponse<any>> {
  try {
    const response = await fetch("/api/blog/post", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    });

    if (!response.ok) {
      return {
        res: null,
        err: new Error(response.statusText)
      };
    }

    return {
      res: {
        message: 'success',
        data: null
      },
      err: null
    };
  } catch (error) {
    return {
      res: null,
      err: error as Error
    };
  }
}