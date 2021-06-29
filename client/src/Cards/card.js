import React from "react";

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
  fontFamily: "Avenir-Heavy",
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

export default class Card extends React.Component {
  render() {
    return (
    <div style={{display : 'flex'}}>   
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
            <small />
          </div>
        </div>
      </div>
    </div>  
    );
  }
}

Card.defaultProps = {
  width: 350,
  title: "Template - Card Title",
  location: "Location label",
  description: "Template description textbox"
};
