import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Ivan");
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();


    const handleSubmit = e => {
        e.preventDefault();
        let blog = { title, body, author };
        setIsLoading(true);

        setTimeout( () => {
            fetch("http://localhost:8000/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog),
            }).then( () => {
                console.log("New Blog Added");
                setIsLoading(false);
                console.log(blog);
                console.log(blog[blog.length - 1]);

                history.push(`/`);
            })
        }, 500)      
    }


    return ( 
        <div className="create">
            <h2> Add a New Blog </h2>

            <form onSubmit={ handleSubmit }>
                <label> Blog title: </label>
                <input 
                    type="text" 
                    required
                    value={ title }
                    onChange={ e => setTitle(e.target.value) }
                />

                <label> Blog body: </label>
                <textarea
                    rows={ 10 }
                    required
                    value={ body }
                    onChange={ e => setBody(e.target.value) }>
                </textarea>

                <label> Blog author: </label>
                <select
                    value={ author }
                    onChange={ e => setAuthor(e.target.value) }>
                    <option value="Ivan"> Ivan </option>
                    <option value="Mary"> Mary </option>
                    <option value="Peter"> Peter </option>
                </select>

                { isLoading && <button> Adding... </button> }
                { !isLoading && <button> Add Blog </button>}
    
            </form>
        </div>
     );
}
 
export default Create;