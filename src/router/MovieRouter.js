import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieDetail } from "../views/MovieDetail";
import { MovieRent } from "../views/MovieRent";
import { Movies } from "../views/Movies";

export const MovieRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie" element={<MovieDetail />} />
        <Route path="/rent" element={<MovieRent />} />
        <Route path="/" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
};
