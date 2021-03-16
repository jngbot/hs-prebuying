import React, {Component} from 'react'
import { Button,TextField } from '@material-ui/core';
import landing from '../resources/prebuying-landing.jpg'
const min = 0;
const max = 10;
class MasterForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 0,
        email:  '',
        name: '',
        location: '', 
        houseType: '',
        priceRange: '',
        numBed: '',
        numBath: '',
        preapproval: false,
      }
    }
    
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    handleSubmit = event => {
      event.preventDefault()
      const { email, username, password } = this.state
      alert(`Your registration detail: \n 
             Email: ${email} \n 
             Username: ${username} \n
             Password: ${password}`)
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= max-1? max: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= min? min: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==min){
      return (
        <Button 
        variant="outlined" size="large" color="grey" 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Back
        </Button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <max){
      return (
        <Button
        variant="contained" size="large" color="primary"  
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Continue
        </Button>        
      )
    }
    return null;
  }
    
    render() {    
      return (
          <div id="page">
        <React.Fragment>
  
        <form onSubmit={this.handleSubmit}>
        {/* 
          render the form steps and pass required props in
        */}
        <Step0
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            start={this._next}
            email={this.state.email}
          />
          <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            password={this.state.password}
          />
          <Step4 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            password={this.state.password}
          />
          <Step5 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            password={this.state.password}
          />
          <br/> <br/>
          <div id="nav-buttons">
            <ul>
                <li id="back">
                {this.previousButton()}
                </li>
                <li id="front">
                {this.nextButton()}
                </li>
            </ul>
          </div>
        </form>
        </React.Fragment>
        </div>
      );
    }
  }
  
  function Step0(props){
    if (props.currentStep !== 0) {
        return null
      } 
      return(<div id="Landing">
                    
      <div className="landing-item">
      <h1>Home Simple Recommendations</h1>
      <p>Your home buying recommendation coach. We deliver unbiased, personalized and data-driven houses that are best for you</p>
      <Button
      variant="contained" size="large" color="primary"  
      className="btn btn-primary float-right" 
      type="button" onClick={props.start}>
      Get started
      </Button>
      </div>
  
  <div className="landing-item-2">
      <img className="landing-img" src={landing}></img>
      </div>
  
</div>);
  }
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <div className="form-group">
        <h1>We respect your data and privacy</h1>
        <p>We realize that to make accurate recommendations, this requires the input of personal user data. The data we collect will solely be used for generating tailored home recommendations and will not be sold. </p>
        
      </div>
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div className="form-group">
        <h1 className="form-title">Tell Us About Yourself</h1>
        <p>Letting us know more about you helps us find houses that are better suited for you</p>
        <TextField
          variant="filled"
          className="form-control"
          id="name"
          name="name"
          type="text"
          fullWidth
          placeholder="Your name"
          value={props.name}
          onChange={props.handleChange}
          /><br/><br/>
          <TextField
          variant="filled"
          className="form-control"
          id="location"
          name="location"
          type="text"
          fullWidth
          placeholder="Where do you want to live?"
          value={props.location}
          onChange={props.handleChange}
          /><br/><br/>
          <TextField
          variant="filled"
          className="form-control"
          id="location"
          name="location"
          type="text"
          fullWidth
          placeholder="Type of house"
          value={props.location}
          onChange={props.handleChange}
          /><br/><br/>
          <TextField
          variant="filled"
          className="form-control"
          id="location"
          name="location"
          type="text"
          fullWidth
          placeholder="Price range"
          value={props.location}
          onChange={props.handleChange}
          /><br/><br/>
          <TextField
          variant="filled"
          className="form-control"
          id="location"
          name="location"
          type="text"
          fullWidth
          placeholder="Number bedrooms"
          value={props.location}
          onChange={props.handleChange}
          /><br/><br/>
          <TextField
          variant="filled"
          className="form-control"
          id="location"
          name="location"
          type="text"
          fullWidth
          placeholder="Number bathrooms"
          value={props.location}
          onChange={props.handleChange}
          /><br/><br/>
          
      </div>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <React.Fragment>
      <div className="form-group">
      <h1 className="form-title">Have you been pre-approved for a mortgage?</h1>
        <p>If you’re futher in the home buying process, you may have already been pre-approved for a mortgage by your bank.</p>
        <Button>No I haven't</Button>
        <Button>Yes I have</Button>
      </div>
      
      </React.Fragment>
    );
  }
  function Step4(props) {
    if (props.currentStep !== 4) {
      return null
    } 
    return(
      <React.Fragment>
      <div className="form-group">
      <h1 className="form-title">Enter your pre-approved mortgage amount</h1>
        <p>Your bank or mortgage lender should have given you a rough estimate of what you’ve been pre-approved for </p>
        <TextField
          className="form-control"
          id="location"
          name="location"
          type="text"
          fullWidth
          placeholder="Pre-approved amount"
          value={props.location}
          onChange={props.handleChange}
          />
      </div>
      
      </React.Fragment>
    );
  }
  function Step5(props) {
    if (props.currentStep !== 5) {
      return null
    } 
    return(
      <React.Fragment>
      <div className="form-group">
      <h1 className="form-title">Congratulations on your pre-approval!</h1>
        <p>Now that we know more about you, begin your house hunting journey to recieve tailored recommendations</p>
      </div>
      
      </React.Fragment>
    );
  }
//   ReactDOM.render(<MasterForm />, document.getElementById('root'))
  export default MasterForm;