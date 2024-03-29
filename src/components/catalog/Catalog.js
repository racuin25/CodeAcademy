import React, { useEffect } from "react";
import Accordion from "./accordion/Accordion";
import Quiz from "../quiz/Quiz";
import PopularCatalog from "./PopularCatalog";
import NewsNoteWorth from "./newsNoteWorthy/NewsNoteWorth";
import GetInpsire from "./getInspireSection/GetInspire";
import Footer from "../footer/Footer";

const languages = [
	"HTML & CSS",
	"Python",
	"JavaScript",
	"Java",
	"SQL",
	"Bash/Shell",
	"Ruby",
	"C++",
	"R",
	"C#",
	"PHP",
	"Go",
	"Swift",
	"Kotlin",
];

const subjects = [
	"Web Development",

	"Data Science",
	"Computer Science",
	"Developer Tools",
	"Machine Learning",

	"Code Foundations",
	"Web design",
	"Full Catalog",
	"Beta Content Roadmap",
];

const Catalog = () => {
    useEffect(() => {
        document.title = "Catalog Home | CodeAcademy";
    }, []);

    return(
        <div className="catalogContainer__outer">
            <div className="sidebar">
                <div className="sidebar__left">
                    <div className="sidebar__left--container">
                        <Accordion Links={languages} title="Language" />
                        <Accordion Links={subjects} title="Subjects" />
                    </div>
                </div>
                <div className="sidebar__right">
                    <div className="catalogContainer__inner">
                        <Quiz />
                        <PopularCatalog />
						<NewsNoteWorth />
                        <GetInpsire />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Catalog;