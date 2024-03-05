import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [err, setErr] = useState(null);

  async function submitHandler(e) {
    setErr(null);
    e.preventDefault();
    let customer = {
      name,
      email,
      phone,
    };

    try {
      const response = await fetch(
        "https://e-commerce-site-acda9-default-rtdb.firebaseio.com/customerContact.json",
        {
          method: "POST",
          body: JSON.stringify(customer),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("sending customer info failed");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      setErr(error.message);
    }

    setEmail("");
    setName("");
    setPhone("");
  }
  return (
    <Container>
      <Form className="mt-3" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formName" required>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone number"
            pattern="^(\+?91|0)?[6789]\d{9}$"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>

      {err && <p>{err}</p>}
    </Container>
  );
};

export default Contact;
