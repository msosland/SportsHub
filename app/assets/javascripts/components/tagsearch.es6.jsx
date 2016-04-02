class TagSearch extends React.Component {
  render () {
    return (
      <div>
        <div>Tagsearch {this.props.query} </div>
      </div>
    );
  }
}

Headerstrip.propTypes = {
  query: React.PropTypes.string
};