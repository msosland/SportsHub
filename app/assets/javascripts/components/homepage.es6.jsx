class Homepage extends React.Component {
  render () {
    return (
      <div>
        <header className="top-nav">
          <Headerstrip />
        </header>
        <div className="body">
          <div>Text: {this.props.text}</div>
          <div>
            <TagSearch query="nba" /><TagSearch query="nfl" /><TagSearch query="nhl" /><TagSearch query="mlb" />
          </div>
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  text: React.PropTypes.string
};
