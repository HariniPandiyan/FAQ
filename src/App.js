import React, { Component } from "react";

import "./App.css";
import SearchField from "react-search-field";
import { Navbar, Nav } from 'react-bootstrap';

import FAQ from "./FAQ";
class App extends Component {
  render() {
    
    return (
      
      <div >
     
            <Navbar collapseOnSelect bg="dark" expand="md" className="mb-3">
              <Navbar.Brand href="/" className="font-weight-bold text-muted">
                FAQ
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Nav>
                  <Nav.Link href="/Home">Home</Nav.Link>
                  <Nav.Link href="/ContactUs">ContactUs</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
            </Navbar>
            
         
            <div >
        <div className="jumbotron text-center">
        <div className="row">
          <div className="col-md-12">
          <h1>How can we help? </h1>
        </div>
        </div>
        <SearchField
  placeholder="Search..."

/>
        </div>
       
        <div>  
        </div>
        </div>
        
            <div className="text-center">
      <FAQ>
        <FAQ.QAItem>
          <FAQ.Question answerId="q1">
            {(isOpen, onToggle) => {
              return (
                <>
                 
                  <span>What is your question?</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q1"> Knock Knock! </FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
          <FAQ.Question answerId="q2">
            {(isOpen, onToggle) => {
              return (
                <>
                  
                  <span>Why do you ask such this questions?</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q2"> 42 is the answer. </FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
          <FAQ.Question answerId="q3">
            {(isOpen, onToggle) => {
              return (
                <>
                 
                  <span>Any other questions?</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q3"> Seek and you shall find. </FAQ.Answer>
        </FAQ.QAItem>
      </FAQ>
    </div>
    </div>
    );
            
          
     
    
    
  }
}

export default App;
