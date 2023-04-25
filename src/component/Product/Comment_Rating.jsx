import { useState } from "react";
import {FaStar} from "react-icons/fa"
import Style1 from "./style1.JPG"
import { Modal,Button, Form, Row } from "react-bootstrap";
import "./Comment_Rating.css";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};


export default function CommentRating() {
    const stars = Array(5).fill(0)
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [text,setText] = useState('')
    

    const [show, setShow] = useState(false);
    const handleSave = (e) => {
        e.preventDefault();
        setShow(false);

    }
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

  
    const handleClick = value => {
      setCurrentValue(value)
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }

    const handleChangeText = (e) => {
      setText(e.target.value);
    }
  
    return (
      <div className="row">
          <Button variant="primary" onClick={handleShow} id="add_comment" >
            +comment
          </Button>
          <Modal show={show} onHide={handleClose} animation={false} className="model">

              <Modal.Header closeButton>
                <Modal.Title>Your comment</Modal.Title>
              </Modal.Header>


              <Modal.Body>
                <Form className="m-3"  id="form_modal" action="">
                  <div className="row-lg" >

                    <div>Rating:</div>

                    {
                        stars.map((_, index) => {
                            return(
                              <span key={`star-${index}`}>
                                
                                <label for={`star-${index}`}>
                                  <FaStar
                                      key={index}
                                      size={24}
                                      
                                      onClick={() => handleClick(index + 1)}
                                      onMouseOver={() => handleMouseOver(index + 1)}
                                      onMouseLeave={handleMouseLeave}
                                      color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                  />
                                </label>
                                <input type="radio"
                                        className="needHidden"
                                        id={`star-${index}`} 
                                        name="rating"
                                        value={currentValue}
                                        style={{display: "none"}}
                                />
                              </span>
                            )
                        })
                    }

                  </div>

                  <Form.Label htmlFor="comment">Your comment</Form.Label>
                  <Form.Control as="textarea" name="comment" onChange={handleChangeText} value={text}/>  
                  <Button variant="primary" type="submit">
                          Save
                  </Button>  
                  
                </Form> 
              </Modal.Body>
          </Modal> 
      </div>
    );
  };