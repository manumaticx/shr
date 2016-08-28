const Mixcloud = {
  API: "https://api.mixcloud.com/",
  User: "soulhealingradio"
};

var MixcloudBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    
    // Load shows
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <MixcloudList data={this.state.data} />
    );
  }
});

var MixcloudList = React.createClass({
  grouperise:function (g, a) {
      var groups = {};

      $.each(a, function (n, v) {
          var ng = Math.trunc(n/g);

          groups[ng] = groups[ng] || [];
          groups[ng].push(v);
      });

      var result = [];

      for (var index in groups) {
          result.push(groups[index]);
      }

      return result;
  },
  render: function() {
    var groups = this.grouperise(4, this.props.data);
    var covers = groups.map(function(group, index){
      var row = group.map(function(track){
        return (
          <MixcloudCover {...track} />
        );
      });
      
      return (
        <div key={index} className="row small-up-1 medium-up-2 large-up-4">{row}</div>
      );
    });
    
    return (
      <div>{covers}</div>
    );
  }
});

var MixcloudCover = React.createClass({
  render: function() {
    return (
      <div className="column">
        <img src={this.props.pictures.large} className="thumbnail" alt={this.props.name} />
      </div>
    );
  }
});

ReactDOM.render(
  <MixcloudBox url={Mixcloud.API + Mixcloud.User + "/cloudcasts/"} />,
  document.getElementById('container')
);
