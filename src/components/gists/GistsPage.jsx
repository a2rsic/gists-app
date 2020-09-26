import React, { useEffect, useState } from "react";

import { gistService } from "../../services/gistService";

import GistItem from "../gist-item/GistItem";
import Pagination from "../../common/pagination/Pagination";
import Loader from "../../common/loader/Loader";

const GistsPage = () => {
  const [gists, setGists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchGists(currentPage);
  }, [currentPage]);

  const fetchGists = async (currentPage) => {
    try {
      setLoading(true);
      const gists = await gistService.fetchGists(currentPage);
      setGists(gists);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  const mapGists = () => {
    return gists.map((gist, index) => (
      <GistItem gist={gist} loading={loading} key={index} />
    ));
  };

  const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);

  if (!gists.length) {
    return <Loader />;
  }
  return (
    <div>
      {error && <p>{error}</p>}
      {mapGists()}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={gists.length}
        currentPage={currentPage}
        onClickHandler={handlePageClick}
      />
    </div>
  );
};

export default GistsPage;
