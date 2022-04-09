"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogs = exports.findBlog = void 0;
const findBlog = async (id) => {
    return {
        id: id,
        name: `Blog No. ${id}`,
    };
};
exports.findBlog = findBlog;
const getBlogs = async () => {
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
    ];
};
exports.getBlogs = getBlogs;
