class Homepage extends React.Component {
  render () {
    return (
      <div>
        <header>
          <Headerstrip />
        </header>
        <div>Text: {this.props.text}</div>
      </div>
    );
  }
}

Homepage.propTypes = {
  text: React.PropTypes.string
};
