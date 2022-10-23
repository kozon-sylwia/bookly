import { addDoc, collection, Timestamp } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../api/firebase";
import { useState } from "react";
import {
  StyledButton,
  StyledContainer,
  StyledH2,
  NewBookBackground,
  StyledFormulars,
  StyledAddBookImg,
} from "./NewBook.styled";
import { InputField } from "./InputField";
import { FORM_INITIAL_VALUES } from "./constants";
import newBook from "./img/newBookIcon.jpg";

export const NewBook = (e) => {
  const [formValues, setFormValues] = useState(FORM_INITIAL_VALUES);

  const imageHandleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];

    if (!file) return null;
    const storageRef = ref(storage, `covers-img/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      e.target[0].value = "";
      getDownloadURL(snapshot.ref).then((downloadURL) => {});
    });
    alert("Image has been uploaded!");
  };

  const newBookConstructor = () => {
    addDoc(collection(db, "books"), {
      author: formValues.author,
      category: (
        formValues.category.replace(/\s/g, "").replace("all", "") + ",all"
      ).split(","),
      cover: formValues.cover,
      isbn: parseInt(formValues.isbn),
      pages: parseInt(formValues.pages),
      price: parseInt(formValues.price),
      published: Timestamp.fromDate(new Date(formValues.published)),
      quantity: parseInt(formValues.quantity),
      sold: 0,
      title: formValues.title,
    });
  };

  const addNewBook = () => {
    if (!formValues.author) {
      alert("Field 'Author' can't be empty!");
    } else if (!formValues.title) {
      alert("Field 'Title' can't be empty!");
    } else if (!formValues.category) {
      alert("Field 'Category' can't be empty!");
    } else if (!formValues.isbn) {
      alert("Field 'ISBN' can't be empty!");
    } else if (!formValues.pages) {
      alert("Field 'Pages' can't be empty!");
    } else if (!formValues.cover) {
      alert("Field 'Cover' can't be empty!");
    } else if (Number.isNaN(new Date(formValues.published).getTime())) {
      alert("Field 'Published' can't be empty!");
    } else if (!formValues.price) {
      alert("Field 'Price' can't be empty!");
    } else if (!formValues.quantity) {
      alert("Field 'Quantity' can't be empty!");
    } else {
      newBookConstructor();
      alert("Book has been added!");
      setFormValues(FORM_INITIAL_VALUES);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewBook();
  };

  const onChangeHandler = (e) => {
    const inputName = e.target.name;
    setFormValues({ ...formValues, [inputName]: e.target.value });
  };

  return (
    <NewBookBackground>
      <StyledAddBookImg src={newBook} />
      <StyledContainer>
        <StyledH2>
          You can add <span className="orange__font">new book </span>here!
        </StyledH2>
        <StyledFormulars>
          <form onSubmit={handleSubmit}>
            <InputField
              title={"Author"}
              type={"text"}
              value={formValues.author}
              onChange={onChangeHandler}
              name={"author"}
            />
            <InputField
              title={"Title"}
              type={"text"}
              value={formValues.title}
              onChange={onChangeHandler}
              name={"title"}
            />
            <InputField
              title={"Category (separate by commas)"}
              type={"text"}
              value={formValues.category}
              onChange={onChangeHandler}
              name={"category"}
            />
            <InputField
              title={"ISBN"}
              type={"number"}
              min="0"
              value={formValues.isbn}
              onChange={onChangeHandler}
              name={"isbn"}
            />
            <InputField
              title={"Pages"}
              type={"number"}
              min="1"
              value={formValues.pages}
              onChange={onChangeHandler}
              name={"pages"}
            />
            <InputField
              title={"Cover"}
              type={"text"}
              value={formValues.cover}
              onChange={onChangeHandler}
              name={"cover"}
            />
            <InputField
              title={"Published"}
              type={"date"}
              value={formValues.published}
              onChange={onChangeHandler}
              name={"published"}
            />
            <InputField
              title={"Price"}
              type={"number"}
              min="0"
              value={formValues.price}
              onChange={onChangeHandler}
              name={"price"}
            />
            <InputField
              title={"Quantity"}
              type={"number"}
              min="0"
              value={formValues.quantity}
              onChange={onChangeHandler}
              name={"quantity"}
            />
            <StyledButton type="submit" value="Add new book" />
          </form>
          <form onSubmit={imageHandleSubmit} className="cover__form">
            <InputField title={"Cover image (optional)"} type={"file"} />
            <StyledButton type="submit" value="Upload Image" />
          </form>
        </StyledFormulars>
      </StyledContainer>
    </NewBookBackground>
  );
};
