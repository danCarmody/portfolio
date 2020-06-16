import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };

    // //Analytics initialization:
    // ReactGA.initialize('UA-110570651-1');
    // ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    const load = document.getElementById('siteLoading')
    $.ajax({
      url: '/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
        setTimeout(() => {
          load.outerHTML='';
        }, 500)
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Portfolio data={this.state.resumeData.resume} />
        <Resume data={this.state.resumeData.resume}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    )
  }
}

export default App;
