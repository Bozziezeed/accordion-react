import SingleContent from "./components/SingleContent";
import data from "./data";
import { useState } from "react";
import "./App.css";

function App() {
  // eslint-disable-next-line
  const [content, setContent] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>เครื่องมือพัฒนาเว็บปี 2023</h3>
        <section>
          {content.map((data) => {
            return <SingleContent key={data.id} {...data} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
