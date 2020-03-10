import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addMovie=()=>{    
    
    this.props.addMovie({...this.state,id:uuidv4()})
    // les donnees dans state on ajoute un id ds state puis on l'envoi au parent par la fonctin addMovie
       this.setState({
        title:"",
        image:"",
        rating:"",
        year:"",
        show : false
    })

 }

  render() {
    return (
      <div>
        <Button variant="primary" className="btn" onClick={this.handleShow}>
          <i class="fas fa-plus"></i>
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Image:</label>
                <input
                  type="text"
                  name="image"
                  value={this.state.image}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Rating:</label>
                <input
                  type="text"
                  name="rating"
                  value={this.state.rating}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Year:</label>
                <input
                  type="text"
                  name="year"
                  value={this.state.year}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.addMovie}>
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModal;
