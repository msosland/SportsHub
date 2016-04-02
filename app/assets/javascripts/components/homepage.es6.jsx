class Homepage extends React.Component {
  render () {
    return (
      <div>
        <header>
          <Headerstrip />
        </header>
        <div>Text: {this.props.text}</div>
        <div>
          <TagSearch query="nba" />
          <TagSearch query="nfl" />
          <TagSearch query="nhl" />
          <TagSearch query="mlb" />
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  text: React.PropTypes.string
};
