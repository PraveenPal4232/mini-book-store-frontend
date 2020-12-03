import {useState, useEffect} from "react";
import axios from "axios";
import {
    useParams
  } from "react-router-dom";

const EditBookPage = () => {
    const [Book, SetBook] = useState({
        name:"",
        author:"",
        price:"",
        summary:"",
        cover:null
    });
    const [IsLoading, SetIsLoading] = useState(false);
    let { id } = useParams();

    // Fetch book from server
    const fetchBook = () => {
        axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => {
          SetBook(res.data);
        })
        .catch((err) => console.log(err));
    }

    useEffect(() => {

        // Start Loading data from server
        SetIsLoading(true);

        // Fetch books from server
        fetchBook();

        // Done Loading data from server
        SetIsLoading(false);

      },[]);

      // Handel Input Change
      const handleChange = (e) => {
        SetBook({...Book,
          [e.target.name]: e.target.value,
        });
      };

      // Handel Input Change
      const handleFileChange = (e) => {
        SetBook({...Book,
          [e.target.name]: e.target.files[0],
        });
      };

      // Update book to server
      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',Book.name);
        formData.append('author',Book.author);
        formData.append('price',Book.price);
        formData.append('summary',Book.summary);
        formData.append('cover',Book.cover);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
    
        axios
          .post(
            `http://localhost:5000/books/update/${id}`, formData, config
          )
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));

      };

      // Delete book to server
      const handleDelete = (e) => {
        e.preventDefault();
    
        axios
          .delete(
            `http://localhost:5000/books/${id}`)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));

      };

    return (
        <main>
            <div className="book_page edit_book_page">
                <div className="edit_book_warp">
                  <h1 className="page_heading">Edit Book</h1>
                <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                  onChange={handleChange}
                  value={Book.name}
                />
              </div>

              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  required
                  onChange={handleChange}
                  value={Book.author}
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  required
                  onChange={handleChange}
                  value={Book.price}
                />
              </div>

              <div className="form-group">
                <label htmlFor="summary">Summary</label>
                <textarea
                  type="text"
                  className="form-control form-control-textarea"
                  id="summary"
                  name="summary"
                  required
                  onChange={handleChange}
                  value={Book.summary}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cover">Book Cover</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="cover"
                  name="cover"
                  required
                  onChange={handleFileChange}
                />
              </div>


              <button type="submit" className="btn btn-dark">
                Update
              </button>
            </form>

            <div className="divider">Danger Zone</div>
            
            <form onSubmit={handleDelete}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
                </div>
            </div>
        </main>
    )
}

export default EditBookPage;