import React from 'react';
import $ from 'jquery';
import GamesItem from './GamesItem.js';
import Login from './login';

class GamesFeed extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "Loading...",
      gamesItems: []
    };
  }

  componentDidMount() {
    this.loadGames();
  }

  loadGames() {
    let url = this.props.url;
    let component = this;

    $.ajax({
       type: "GET",
       url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
       dataType: 'json',
       error: function(){
         console.log('Unable to load feed, Incorrect path or invalid feed');
       },
       success: function(xml){
         component.setState({
           title: xml.responseData.feed.title,
           gamesItems: xml.responseData.feed.entries
         });
       }
     });
  }

  renderGamesItem(item, index) {
    console.log(item);

    // Get the image from the HTML content snippet
    var content = $("<div/>").html(item.content);
    var image = $("img", content).attr("src");

    return (
      <GamesItem
        key={index}
        title={item.title}
        image={image}
        description={item.contentSnippet}
        link={item.link} />
    );
  }

    render() {
      let title = this.state.title;
      let gamesItems = this.state.gamesItems;

        return (
          <div style = {{backgroundColor: "#008b8b" }}>
            <h1 style = {{marginLeft: 760, marginTop: 0 }}>GamesReview</h1>
            <h1 style = {{marginLeft: 700, marginTop: 10, fontSize: 20}}>{title}</h1>

            <div style = {{marginLeft: 170, marginTop: 10, backgroundColor: "#fff", width: 1500 }}>
              {gamesItems.map(this.renderGamesItem.bind(this))}
            </div>
          </div>
        );
    }
}

export default GamesFeed;
