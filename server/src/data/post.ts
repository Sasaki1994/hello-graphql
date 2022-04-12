export const findPost = async (id: string) => {
  return {
    id: id,
    title: `Blog Post No. ${id}`,
    body: "hogehoge"
  }
}

export const findPostsByBlogId = async (blogId: string) => {
  const base = 3 * ( Number(blogId) - 1) 
  return [
    {
      id: String(base + 1),
      title: `Blog ${blogId} Post No.${String(base + 1)}`,
      body: "hoge1"
    },
    {
      id: String(base + 2),
      title: `Blog ${blogId} Post No.${String(base + 2)}`,
      body: "hoge2"
    },
    {
      id: String(base + 3),
      title: `Blog ${blogId} Post No.${String(base + 3)}`,
      body: "hoge3"
    },
  ]
}