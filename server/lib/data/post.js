"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPostsByBlogId = exports.findPost = void 0;
const findPost = async (id) => {
    return {
        id: id,
        title: `Blog Post No. ${id}`,
        body: "hogehoge"
    };
};
exports.findPost = findPost;
const findPostsByBlogId = async (blogId) => {
    const base = 3 * (Number(blogId) - 1);
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
    ];
};
exports.findPostsByBlogId = findPostsByBlogId;
