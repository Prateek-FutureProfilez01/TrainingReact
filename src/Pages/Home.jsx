import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Accordion, Card, Button } from "react-bootstrap";

export default function Home() {
  return (
    <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Hello, world!</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
        </div>
      </div>
  );
}
