import React from 'react';

const Search = ({ setProgram, setMaxPrice, setMinArea, setPagination }) => {
    const handleChangeProgram = (e) => {
        if(e.target.value.length === 0) {
            setProgram("");
            setPagination(1);
        }
        if(e.target.value.length > 3) {
            setProgram(e.target.value);
            setPagination(1);
        }
    }
    const handleChangeMaxPrice = (e) => {
        setMaxPrice(e.target.value);
        setPagination(1);
    }
    const handleChangeMinArea = (e) => {
        setMinArea(e.target.value);
        setPagination(1);
    }
    return (
        <div>
            <form className="form-group form-search">
                <div className="row">
                    <div className="col-4">
                        <input placeholder="Nom du programme" type="text" className="form-control" id="programName" onChange={ handleChangeProgram } />
                    </div>
                    <div className="col-4">
                        <input placeholder="Prix maximum" type="text" className="form-control" id="maxPrice" onChange={ handleChangeMaxPrice } />
                    </div>
                    <div className="col-4">
                        <input placeholder="Surface minimum" type="text" className="form-control" id="minArea" onChange={ handleChangeMinArea } />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Search;