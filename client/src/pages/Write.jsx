import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Write() {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" 
        placeholder="Title" />

        <div className="editContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>

      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>

          <span>
            <b>Visibilty: </b> Public
          </span>

          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Upload</button>
          </div>
        </div>

        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" id="art" value="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="science" value="science" />
            <label htmlFor="art">Science</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" id="technology" value="technology" />
            <label htmlFor="art">Technology</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" id="cinema" value="cinema" />
            <label htmlFor="art">Cinema</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" id="design" value="design" />
            <label htmlFor="art">Design</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" id="food" value="food" />
            <label htmlFor="art">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
}
