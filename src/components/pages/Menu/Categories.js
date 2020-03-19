import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryItems from "./CategoryItems"
import {
  Card,
  CardTitle,
  CardImg,
  Container,
  Row,
  Col,
  CardBody,
  Button
} from "shards-react";

class Categories extends Component {
  handleClick = category => {
  
    alert(category.title);
  
   return (
     <CategoryItems 
      category={category}
     />
      
   );
    
  };

  render() {
    let categoryList = this.props.categories.map(category => {
      return (
        <div key={category.id}>
          <Col>
            <Card
              key={category.id}
              onClick={() => {
                this.handleClick(category);
              }}
            >
              <CardBody>
                <CardTitle>{category.title}</CardTitle>
              </CardBody>
            </Card>
          </Col>
        </div>
      );
    });
    return (
      <Container>
        <Row>{categoryList}</Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,

    
  };
};

export default connect(mapStateToProps)(Categories);