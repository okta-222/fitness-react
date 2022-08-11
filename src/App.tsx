import Header from "./app/components/header/header";
import About from "./app/components/banner/banner";
import "./app/scss/main.scss";
import Footer from "./app/components/footer/footer";
import Train from "./app/components/train/train";
import Experience from "./app/components/experience/experience";
import Schema from "./app/components/schema/schema";
import Trainers from "./app/components/trainers/trainers";
import Result from "./app/components/result/result";
import Space from "./app/components/space/space";
import Trail from "./app/components/trail/trail";
import Book from "./app/components/book/book";
import Video from "./app/components/video/video";
import Workouts from "./app/components/workouts/workouts";

export default function App() {
  return (
    <div>
       <Header />
       <About />
       <Schema />
       <Train />
       <Book />
       <Experience />
       <Video />
       <Trainers />
       <Result />
       <Space />
       <Workouts />
       <Trail />
       <Footer/>
    </div>
  );
}