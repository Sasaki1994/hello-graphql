export const findPost = async (id: string) => {
  return {
    id: id,
    title: `Blog Post No. ${id}`,
    body: "hogehoge"
  }
}

export const findPostsByBlogId = async (blogId: string) => {
  return [
    {
      id: "1",
      title: `Blog ${blogId} Post No.1`,
      body: "hoge1"
    },
    {
      id: "2",
      title: `Blog ${blogId} Post No.2`,
      body: "hoge2"
    },
    {
      id: "3",
      title: `Blog ${blogId} Post No.3`,
      body: "hoge3"
    },
  ]
}