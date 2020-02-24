import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://i.pravatar.cc/150?img=${img}`;
  return (
    <article className="person">
      <img src={url} alt="ImagePerson" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="28" name="Anirwala More" job="Doctor" />
      <Person img="36" name="Anshul Bharadwaj" job="Artist">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
          maxime?
        </p>
      </Person>
      <Person img="34" name="Abhilasha Sisodiya" job="Philosopher" />
    </section>
  );
};

ReactDom.render(<PersonList></PersonList>, document.getElementById("root"));
