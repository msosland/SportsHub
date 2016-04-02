class Homepage extends React.Component {
  render () {
    return (
      <div>
        <div>Text: {this.props.text}</div>
      </div>
    );
  }
}

Homepage.propTypes = {
  text: React.PropTypes.string
};
