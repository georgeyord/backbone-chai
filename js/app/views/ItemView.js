define([
  'react',
  'reactdom'
  ], function(React, ReactDOM) {
    return Backbone.View.extend({
        el: $('#content-placeholder'),
        itemTemplate: React.createClass({
            render: function() {
                return (
                  <div className="item clearfix">
                    <h2 className="item-taste">{this.props.taste}</h2>
                    <ul className="item-details">
                      <li className="item-type">{this.props.type}</li>
                      <li className="item-supplier">{this.props.supplier}</li>
                      <li className="item-dateBought">{this.props.dateBought}</li>
                      <li className="item-packaging">{this.props.packaging}</li>
                      <li className="item-description">{this.props.description}</li>
                    </ul>
                  </div>
                );
            }
        }),

        render: function() {
            ReactDOM.render(
                React.createElement(this.itemTemplate, this.model.toJSON()),
                this.$el[0]
            );
        }

    });
});
