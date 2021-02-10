import {useState} from "react";
import axios from "axios";

const AddBookPage = () => {
    const [Book, SetBook] = useState({
        name:"",
        author:"",
        price:"",
        summary:"",
        cover:null
    });

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
            `https://mini-book-store-backend.herokuapp.com/books/add`, formData, config
          )
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));

      };

    return (
        <main>
            <div className="book_page add_book_page">
                <div className="add_book_warp">
                <h1 className="page_heading">Add Book</h1>
                <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Book Name"
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
                  placeholder="Book Author"
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
                  placeholder="Book Price"
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
                  placeholder="Book Summary"
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
                Upload
              </button>
            </form>
                </div>
            </div>
        </main>
    )
}

export default AddBookPage;