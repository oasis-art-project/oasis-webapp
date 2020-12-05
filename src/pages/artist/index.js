import React, { Component } from 'react';
// import Grid from 'styled-components-grid';
// import styled from 'styled-components';
import capitalize from 'lodash/capitalize';
// import moment from 'moment';
import { Loader, Seo} from '../../components';
// import { IMGS_URL } from '../../helpers/index';

const formatName = (first, last) =>
  `${capitalize(first)} ${capitalize(last)}`;

const filterArray = (array, id) => {
    if (!array || !array.filter)  return null;
    
    const res = array.filter(el => el.id === parseInt(id))[0]
    console.log("filterArray -------")
    console.log("  ARRAY", array)
    console.log("  ID", id)
    console.log("  RES", res)
    return res;
  };
  

// const formatName = (name, lastName) =>
//   `${capitalize(name)} ${capitalize(lastName)}`;

// const formatDates = (start, end) =>
//   `${DateFormater(start)} - ${DateFormater(end)}`;

// const Container = styled.div`
//   padding: 10px;
// `;

// const EventImage = styled.img`
//   width: 100%;
// `;

// const Header = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const EventName = styled.h3`
//   font-weight: 400;
//   margin-right: 20px;
// `;

// const EventInfoCont = styled.div`
//   margin-bottom: 20px;
// `;

// const EventInfoItem = styled.h3`
//   font-weight: 400;
//   margin: 3px 0;
// `;

// const EventDesc = styled.p``;

class Artist extends Component {
  state = {
    currentArtist: filterArray(this.props.users, this.props.match.params.id),
  };

  componentDidMount() {
    if (this.state.currentArtist === null) {
      console.log("componentDidMount", this.props.match.params.id)
      this.props.getArtist(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.users !== prevProps.users) {
      console.log("componentDidUpdate", this.props.match.params.id)
      this.setState({
        currentArtist: filterArray(
          this.props.users,
          this.props.match.params.id
        ),
      });
    }
  }

  render() {
    const { currentArtist } = this.state;
    console.log("users", this.props.users)
    console.log("currentArtist", currentArtist)
    if (currentArtist) {
    //   const tags = currentArtist.tags.split(';');
      return (
        <div>
          <Seo title={`${formatName(currentArtist.firstName, currentArtist.lastName)}`} />
         </div>
       );
    }
    return <Loader />;
  }
}

export default Artist;
