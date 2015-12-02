define([
    'backbone',
    'react',
    'reactdom'
], function(Backbone, React, ReactDOM) {
    return Backbone.View.extend({
        el: $('#content-placeholder'),

        initialize: function() {
          // this.outputBox = React.createClass({
          //   render: function() {
          //     return (
          //       <div>
          //         <h2>Level {this.props.id}</h2>
          //         <p>{this.props.description}</p>
          //       </div>
          //     );
          //   }
          // });
        },

        render: function(item) {
            //   var props = level.toJSON();
            //   ReactDOM.render(
            //     React.createElement(this.outputBox, {description: props.description, id: props.id}),
            //     this.$el[0]
            //   );
            // return this;
        }

    });
});
