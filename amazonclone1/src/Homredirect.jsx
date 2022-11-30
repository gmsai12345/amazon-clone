=import React from "react";
import Navbar1 from "./Navbar1/Navbar1";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function ()
{
  return (
    <div><Navbar1/>
  <Nav>
  <Navbar>
  <div>
  <span>
              <p>Toys & Games</p>
              <p>Brands</p>
              <p>Bestsellers</p>
              <p>Games</p>
              <p></p>
              <p>Puzzles</p>
              <p>Soft Toys</p>
              <p>Die-Cast & Toy vehicles</p>
              <p>Learning and Education</p>
            </span>


                  </div>
                  <span><p>1-12 over 12 results</p>
                  <p>
                  <div>
                  <select id="cars" name="cars">
                    <option value="volvo">Featured</option>
                    <option value="saab">Price: Low to High</option>
                    <option value="fiat">Price: High to Low</option>
                    <option value="audi">Avg. Customer Review</option>
                    <option value="fiat">Newest Arrivals</option>
                  </select>
                </div>
                  </p>
                  </span>
                  <div>
                  <span>Delivery Day </span>
                    </div>
    </Navbar>
    </Nav>
    </div>
  )
}
