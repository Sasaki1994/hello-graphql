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
    ];
};
exports.findPostsByBlogId = findPostsByBlogId;
