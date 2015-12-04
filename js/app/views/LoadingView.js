define([
    'react',
    'reactdom'
], function(React, ReactDOM) {
    return Backbone.View.extend({
        el: $('#content-placeholder'),

        initialize: function() {
            this.loadingTemplate = React.createClass({
                render: function() {
                    return <h2>{this.props.label}</h2>
                }
            });
        },

        render: function(label) {
            if (_.isUndefined(label)) {
                label = "Loading...";
            }
            ReactDOM.render(
                React.createElement(this.loadingTemplate, {
                    label: label
                }),
                this.$el[0]
            );
            return this;
        }

    });
});
