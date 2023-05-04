import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Blog({ blogPosts, signedInUser, handleLogout, handleLikeChange }) {
    const { blogId } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const getSingleBlog = async () => {
            try {
                const singleBlog = await blogPosts.find((blog) => blog.id === blogId);
                console.log(singleBlog);
                setBlog(singleBlog);
            } catch (err) {
                console.error("Error: ", err);
            }
        };

        getSingleBlog();
    }, [blogPosts, blogId]);

    if (!blog) {
        return null;
    }

    return (
        <main className="min-h-screen grid items-center justify-center">
            <div className="max-w-[400px] grid gap-4 border-2 border-black px-8 pt-4 pb-6 shadow-2xl rounded-lg">
                <h2 className="text-4xl font-extrabold">Blogs</h2>
                <div className="w-full grid grid-cols-3">
                    <p className="col-span-2 grid items-center justify-start text-xl text-blue-700 font-bold">
                        {signedInUser.username} logged in
                    </p>
                    <div>
                        <button
                            onClick={() => handleLogout()}
                            className="border-2 border-blue-950 text-lg px-8 hover:bg-white hover:text-blue-700 bg-blue-700 text-white font-bold py-2 rounded-lg"
                        >
                            logout
                        </button>
                    </div>
                </div>

                <div className="border-2 border-black shadow-2xl rounded-lg py-4">
                    <div className="px-4">
                        <h2 className="text-2xl font-semibold">
                            {blog.title} by {blog.author}
                        </h2>
                    </div>
                    <div className="py-4 px-4">
                        <a href={blog.url} className="text-base text-blue-700">
                            {blog.url}
                        </a>
                    </div>
                    <div className="pb-2 px-4 grid grid-cols-2 text-lg font-bold">
                        <h4 className="col-span-1 grid items-center">{blog.likes} Likes</h4>
                        <button
                            onClick={() => handleLikeChange()}
                            className="col-span-1 border-2 border-blue-950 text-lg px-8 hover:bg-white hover:text-blue-700 bg-blue-700 text-white py-2 rounded-lg"
                        >
                            Like
                        </button>
                    </div>
                    <div className="py-4 px-4 text-lg font-semibold">
                        {blog.user === undefined ? null : <h3>Added by {blog.user.name}</h3>}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Blog;
