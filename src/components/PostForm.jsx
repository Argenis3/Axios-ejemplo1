import React from "react";

export const PostForm = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {    
            const newPost = await createPost({ title, body })
            console.log("Post created successfully:", newPost)

            setTitle("");
            setBody("");
        } catch (error) {
            console.error("Error creating post:", error);
        }
    }
    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "24px" }}>
            <div style={{ marginBottom: "12px" }}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div style={{ marginBottom: "12px" }}>
                <label htmlFor="body">Body:</label>
                <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
};
