import React from "react";
import TinderCard from 'react-tinder-card'; 

const styleCard = {
  margin: "10px 0px",
  boxShadow: "0px 0px 8px #ccc",
  borderRadius: "8px",
  color: "#253B56"
};

const styleImage = {
  height: 140,
  backgroundColor: "lightGray",
  overflow: "hidden"
};

const styleCardTitle = {
  fontSize: 20,
  fontWeight: 600,
  margin: "12px 0px 0px 0px"
};

const styleLocationLabel = {
  fontSize: 14,
  margin: "4px 0",
  color: "#8294AA"
};

const styleDescription = {
  fontSize: 14,
  margin: "8px 0 0 0"
};

const styleCardContent = {
  padding: "4px 16px 20px 16px"
};

const iconStyle = {height: "16px", width: "16px"};

const prizeStyle = {float: "right"};

const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}

export default class Card extends React.Component {



  getStarsContent = nstars => {
    let starsContent = [];
    for(let i=0; i < parseInt(nstars, 10); i++){
      starsContent.push(<img src="https://img.icons8.com/fluent/48/000000/star.png" style={iconStyle}/>);
    }
    return starsContent;
  };
  
  render() {
    return (
    <div>   
      <TinderCard  onSwipe={onSwipe} onCardLeftScreen={()=> onCardLeftScreen()} preventSwipe={[`up`, `down`]} >
      <div style={{ width: this.props.width + "px" }}>
        <div style={styleCard}>
          <div style={styleImage}>
            {this.props.image ? (
              <img
                style={{ width: this.props.width + "px", marginTop: "-8%" }}
                src={this.props.image}
                alt="Seattle"
              />
            ) : (
              <div />
            )}
          </div>
          <div style={styleCardContent}>
            <p style={styleCardTitle}>{this.props.title}</p>
            <p style={styleLocationLabel}>{this.props.location}</p>
            <p style={styleDescription}>{this.props.description}</p>
            <p>
              <span>{this.getStarsContent(this.props.stars)}</span>
              <span style={prizeStyle}><b>{this.props.prize}€/day</b></span>
            </p>
            <small />
          </div>
        </div>
      </div>
      </TinderCard>
    </div>  
    );
  }
}

Card.defaultProps = {
  width: 350,
  title: "Template - Card Title",
  location: "Location label",
  description: "Template description textbox",
  icon: "icon"
};



