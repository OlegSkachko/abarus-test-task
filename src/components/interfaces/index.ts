import React from "react";

export interface IPost {
    userId: number | string;
    [id: string]: number | string;
    title: string;
    body: string;
  }

export interface IInputSearch {
    setSearch: React.Dispatch<React.SetStateAction<string>>
    getPosts: () => Promise<void>;
}

export interface IPageFooter{
    setPages: React.Dispatch<React.SetStateAction<number[]>>;
    pages: number[] 
    setPage: React.Dispatch<React.SetStateAction<number>>;
    page: number
}

export interface ITableHead {
    posts: IPost[]
    setPosts: React.Dispatch<React.SetStateAction<IPost[]>>
}