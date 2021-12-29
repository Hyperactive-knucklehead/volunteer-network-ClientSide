import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Row, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ImageUploader from "react-images-upload";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddEvent = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState("");
  const onDrop = (pictureFiles, pictureDataURLs) => {
    setPicture(pictureDataURLs[0]);
  };
  const onSubmit = (data) => {
    setLoading(true);
    if (!picture) {
      setError("Image is required");
      error &&
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          text: `${error}`,
        });
      setLoading(false);
    } else {
      data.image = picture;
      axios
        .post("http://localhost:5000/events", data)
        .then(() => setLoading(false))
        .then(() => {
          Swal.fire(
            "Good job!",
            "Successfully added a new event!",
            "success"
          ).then(() => {
            navigate("/");
          });
        });
    }
    reset();
  };

  return (
    <Container style={{ borderRadius: "35px" }} className="p-5 bg-white my-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row xs={1} sm={1} md={2}>
          <div style={{ width: "45%" }} className="mx-auto">
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Event Title</Form.Label>
              <Form.Control
                {...register("name")}
                required
                type="text"
                placeholder="Enter event"
              />
            </Form.Group>
          </div>
          <div style={{ width: "45%" }} className="mx-auto">
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Banner</Form.Label>
              <div>
                {picture && (
                  <img className="w-25" src={picture} alt="bannerImage" />
                )}
                <ImageUploader
                  withIcon
                  onChange={onDrop}
                  singleImage
                  imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                  maxFileSize={5242880}
                />
              </div>
            </Form.Group>
          </div>
        </Row>
        {loading ? (
          <Button
            style={{ width: "15%" }}
            variant="primary"
            className="ms-auto d-block shadow-none"
            disabled
          >
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
          </Button>
        ) : (
          <Button
            style={{ width: "15%" }}
            className="ms-auto  d-block shadow-none"
            variant="primary"
            type="submit"
          >
            Post
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default AddEvent;
