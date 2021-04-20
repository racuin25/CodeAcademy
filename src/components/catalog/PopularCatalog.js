import React from "react";
import CatalogCards from "./CatalogCards";

const PopularCatalog = () => {
    return(
        <div className="popularCatalog">
            <h2>Most popular</h2>
            <CatalogCards />
        </div>
    );
};

export default PopularCatalog;