import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/skills";
import {Works} from "./layout/sections/works/Works";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Footer} from "./layout/footer/Footer";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;
