import { useState, useEffect } from "react";
import axios from "axios";
import Lot from "../components/Lot";
import Search from "../components/Search";

const Lots = () => {
    const [lots, setLots] = useState([]);
    const [program, setProgram] = useState("");
    const [maxPrice, setMaxPrice] = useState();
    const [minArea, setMinArea] = useState();
    const [previous, setPrevious] = useState();
    const [next, setNext] = useState();
    const [pagination, setPagination] = useState(1);
    const [nbResults, setResults] = useState();
    const baseUrl = "http://127.0.0.1:8000/api/lots/";
    useEffect(() => {
        axios.get(baseUrl + "?page=" + pagination + "&program.name=" + program + "&area%5Bgte%5D=" + minArea + "&price%5Blte%5D=" + maxPrice).then((res) => {
            setLots(res.data['hydra:member']);
            setResults(res.data['hydra:totalItems']);
            if(res.data['hydra:view']['hydra:next']) {
                setNext(true);
            } else {
                setNext(false);
            }
            if(res.data['hydra:view']['hydra:previous']) {
                setPrevious(true);
            } else {
                setPrevious(false);
            }
        });
    }, [program, maxPrice, minArea, next, previous, pagination]);
    const nextSubmit = () => {
        setPagination(pagination+1);
    }
    const previousSubmit = () => {
        setPagination(pagination-1);
    }
    const nbPages = Math.ceil(nbResults/3);
    return (
        <div className="lots">
            <div className="row">
                <Search setProgram={ setProgram } setMaxPrice={ setMaxPrice } setMinArea={ setMinArea } setPagination={ setPagination } />
            </div>
            <h2 className="text-center">Liste des lots</h2>
            <p className="text-center"> { nbResults } résultat(s) - Page { pagination } / { nbPages } </p>
            <div className="row">
                { lots.length > 0 && lots.map((lot, index) => (
                    <Lot key={ index } lot={ lot } />
                )) }
                { lots.length <= 0 && <div className="text-center">Pas de résultat. Affiner vos recherches</div> }
            </div>
            <div className="row">
                <nav aria-label="Page navigation example">
                    <ul className="pagination d-flex justify-content-center">
                        { previous && <li className="page-item" onClick={ previousSubmit }><p className="page-link">Previous</p></li> }
                        { next && <li className="page-item" onClick={ nextSubmit }><p className="page-link">Next</p></li> }
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Lots;