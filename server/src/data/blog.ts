export const findBlog = async (id: string) => {
  return {
    id: id,
    name: `Blog No. ${id}`,
  }
}

export const getBlogs = async () => {
  return [
    {
      id: "1",
      name: `Blog No. 1`,
    },
    {
      id: "2",
      name: `Blog No. 2`,
    },
    {
      id: "3",
      name: `Blog No. 3`,
    },
  ]
}