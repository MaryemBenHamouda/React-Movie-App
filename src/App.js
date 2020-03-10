import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";
import AddModal from "./Modale";
import ListMovies from "./ListMovies";
import Search from "./Search";
import Rating from "./Rating";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: uuidv4(),
          title: "FORZEN II",
          image:
            "https://www.chroniquedisney.fr/imgAnimation/2010/2019-reine-neiges-II-01-big.jpg",
          rating: 5,
          year: "2020"
        },
        {
          id: uuidv4(),
          title: "ALAD'2",
          image:
            "https://fr.web.img6.acsta.net/pictures/18/06/28/13/57/4993195.jpg",
          rating: 3,
          year: "2018"
        },
        {
          id: uuidv4(),
          title: "Roi Lion",
          image:
            "https://fr.web.img3.acsta.net/pictures/19/02/25/12/06/2908996.jpg",
          rating: 2,
          year: "2019"
        },
        {
          id: uuidv4(),
          title: "FORZEN II",
          image:
            "https://www.chroniquedisney.fr/imgAnimation/2010/2019-reine-neiges-II-01-big.jpg",
          rating: 5,
          year: "2020"
        },
        {
          id: uuidv4(),
          title: "FORZEN II",
          image:
            "https://www.chroniquedisney.fr/imgAnimation/2010/2019-reine-neiges-II-01-big.jpg",
          rating: 5,
          year: "2020"
        }
      ],
      newRate: 1,
      search:""
    };
  }
  setRate = x => {
    this.setState({ newRate: x });
  };
  getSearch = value => {
    this.setState({
     search:value
    });
  };

  addMovie = y => {
    this.setState({
      list: this.state.list.concat(y)
    });
  };

  render() {
    return (
      <div className="App">
        <header className="container">
          <Navbar className="bg-light justify-content-between form">
            <Form inline className="form-inline ">
              <div className="flex">
                <Search data={val => this.getSearch(val)} />
{/* 
                <Button type="Search"> Submit</Button> */}
                <div className="icon">
                  <Rating
                    setRate={x => this.setRate(x)}
                    rating={this.state.newRate}
                  />
                </div>
              </div>
            </Form>
          </Navbar>
          <div className="items">
            <ListMovies
              data = {this.state.list.filter(
                el => el.rating >= this.state.newRate && el.title.toUpperCase().includes(this.state.search.toUpperCase().trim())
               
                 )}
            />
          </div>

          <div className="addition">
            <AddModal addMovie={elemet => this.addMovie(elemet)} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
