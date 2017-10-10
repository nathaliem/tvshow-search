import React, { Component } from 'react';
import Search from './components/Header/Search';
import Poster from './components/LeftColumn/Poster';
import Rating from './components/LeftColumn/Rating';
import Title from './components/LeftColumn/Title';
import Info from './components/RightColumn/Info';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedShowId: ''
    }
    this.updateSelectedShow = this.updateSelectedShow.bind(this);
  }

  updateSelectedShow(id) {
    this.setState({
      selectedShowId: id
    }, function() {
      this.getShowInformation();
    });
  }

  shouldComponentUpdate() {
    if ( this.state.selectedShowId ) {
      return true;
    }
    return false;
  }

  componentWillUpdate() {
    let appClassList = document.querySelector('.App').classList;
    if ( appClassList.contains('Screen-Start') ) {
      appClassList.remove('Screen-Start');
    }
  }

  getShowInformation() {
    const id = this.state.selectedShowId;
    fetch('http://api.tvmaze.com/lookup/shows?thetvdb=' + id).then(response => response.json())
            .then(data => {
              this.setState({selectedShowInfo: data});
            });
  }

  getSelectedShowSummaryAsHTML() {
    if (this.state.selectedShowInfo) {
      return { __html: this.state.selectedShowInfo.summary };
    }
  }

  onBlur(e) {
    console.log(e.target);
  }

  render() {
    let main_content, poster, rating, customStyling = null;
    if ( this.state.selectedShowInfo ) {
      let summary = this.state.selectedShowInfo.summary;
      if ( this.state.selectedShowInfo.image.medium ) {
        poster = <Poster selectedShowImage={this.state.selectedShowInfo.image.medium} selectedShowName={this.state.selectedShowInfo.name} />
      }
      if ( this.state.selectedShowInfo.rating.average ) {
        rating = <Rating selectedShowRating={this.state.selectedShowInfo.rating.average} />
      }
      main_content = <main>
          <aside>
            { poster }
            <Title selectedShowName={this.state.selectedShowInfo.name} />
            { rating }
          </aside>
          <article>
            <Info selectedShowInfo={this.state.selectedShowInfo} />
             <div className="summary" dangerouslySetInnerHTML={this.getSelectedShowSummaryAsHTML()}></div>
          </article>
        </main>;
    }
    if ( this.state.selectedShowInfo && this.state.selectedShowInfo.image.original ) {
      customStyling = {
        backgroundImage: 'url(' + this.state.selectedShowInfo.image.original + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }
      console.log(this.state.selectedShowInfo.image.original)
    }
    return (
      <div className="App Screen-Start" style={customStyling} onClick={this.onBlur.bind(this)}>
        <header>
          <Search updateSelectedShow={this.updateSelectedShow} />
        </header>
        { main_content }
      </div>
    );
  }
}

export default App;
