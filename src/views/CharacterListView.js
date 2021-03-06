import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {fetch} from '../actions/index'

class CharacterListView extends React.Component {
  
  componentDidMount() {
   this.props.fetch() // call our action
  }

  render() {
    if (this.props.fetching) {
      return(<p>Loading ALL outerSpace Animals....</p>// return something here to indicate that you are fetching data
          )    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    characters: state.charsReducer.characters,
    fetching:state.fetching,
  }
  
}
const mapDispatchToProps = {
  fetch:fetch,
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterListView);	